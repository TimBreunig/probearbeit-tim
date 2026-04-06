import { useRef, useState, useEffect, useCallback } from 'react'

import Button from './Button'
import SliderCard from './SliderCard'

import ArrowIcon from '../assets/icons/ui/arrow-right.svg?react'


type Category = 'city' | 'forest' | 'water'


const categories: Array<'show all' | Category> = [
  'show all',
  'city',
  'forest',
  'water',
]

export type CardItem = {
  image: string
  alt: string
  link: string
  category: Category
}

export type SliderProps = {
  items: CardItem[]
}


function Slider({ items }: SliderProps) {
  const [filter, setFilter] = useState<'show all' | Category>('show all')
  const [isScrollable, setIsScrollable] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)



  const filteredItems =
    filter === 'show all' ? items : items.filter(i => i.category === filter)


  // Button to scroll right on-click 
  const scrollNext = () => {
    const container = containerRef.current
    if (!container) return

    const firstCard = container.children[0] as HTMLElement
    if (!firstCard) return

    const cardWidth = firstCard.getBoundingClientRect().width

    const styles = window.getComputedStyle(container)
    const gap = parseInt(styles.columnGap || styles.gap || '0', 10)

    const step = cardWidth + gap
    const maxScroll = container.scrollWidth - container.clientWidth

    const currentIndex = Math.round(container.scrollLeft / step)
    const nextIndex = currentIndex + 1

    let target = nextIndex * step

    if (target > maxScroll) target = maxScroll

    if (container.scrollLeft >= maxScroll - 1) {
      container.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }

    container.scrollTo({ left: target, behavior: 'smooth' })
  }


  // Scroll Handler
  const handleScroll = useCallback(() => {
    const container = containerRef.current
    if (!container) return
  }, [])


  // Scroll Listener
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])


  // Calculates the dimensions of the horizontal scroll bar
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateSizes = () => {
      const { clientWidth, scrollWidth } = container

      setIsScrollable(scrollWidth > clientWidth + 1)
    }

    const observer = new ResizeObserver(updateSizes)
    observer.observe(container)

    updateSizes()

    return () => observer.disconnect()
  }, [filteredItems])


  // Reset scroll when changing filter
  useEffect(() => {
    containerRef.current?.scrollTo({ left: 0 })
  }, [filter])


  return (
    <div className='container flex flex-col justify-center gap-4 py-10'>
      <div className='flex flex-row gap-2'>
        {categories.map(category => (
          <Button
            key={category}
            variant='default'
            isActive={filter === category}
            onClick={() => setFilter(category)}
            className='capitalize'
          >
            {category}
          </Button>
        ))}
      </div>

      <div className='relative'>
        <div
          ref={containerRef}
          className='flex gap-4.5 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory'
        >
          {filteredItems.map(item => <SliderCard key={item.link} item={item} />)}
        </div>

        <Button
          variant='secondary'
          iconOnly
          onClick={scrollNext}
          disabled={!isScrollable}
          className='absolute right-0 md:-right-5 top-1/2 transform -translate-y-1/2'
        >
          <ArrowIcon className='size-5' />
        </Button>
      </div>
    </div>
  )
}

export default Slider