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
  const [scrollProgress, setScrollProgress] = useState(0)
  const [thumbSize, setThumbSize] = useState(0)
  const [trackWidth, setTrackWidth] = useState(0)
  const [isScrollable, setIsScrollable] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)


  const filteredItems =
    filter === 'show all' ? items : items.filter(i => i.category === filter)


  // Scroll logic
  const updateScrollState = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const { scrollLeft, scrollWidth, clientWidth } = container
    const maxScroll = scrollWidth - clientWidth

    const progress = maxScroll > 0 ? Math.min(scrollLeft / maxScroll, 1) : 0

    setScrollProgress(progress)
    setThumbSize(Math.min(clientWidth / scrollWidth, 1))
    setTrackWidth(clientWidth)
    setIsScrollable(scrollWidth > clientWidth + 1)
  }, [])


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
    updateScrollState()
  }, [updateScrollState])


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

    const observer = new ResizeObserver(updateScrollState)
    observer.observe(container)

    return () => observer.disconnect()
  }, [filteredItems, updateScrollState])


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

      {/* Scroll Track */}
      {thumbSize < 1 && (
        <div
          ref={trackRef}
          className='w-full h-0.5 bg-gray-70 rounded-full relative overflow-hidden'
        >
          <div
            className='h-1 bg-gray-900 rounded-full absolute top-0 left-0'
            style={{
              width: `${thumbSize * 100}%`,
              transform: `translateX(${scrollProgress * (trackWidth - trackWidth * thumbSize)}px)`,
            }}
          />
        </div>
      )}
    </div>
  )
}

export default Slider