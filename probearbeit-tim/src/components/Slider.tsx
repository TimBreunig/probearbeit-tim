import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Button from './Button'
import SliderCard from './SliderCard'

import ArrowLeftIcon from '../assets/icons/ui/arrow-left.svg?react'
import ArrowRightIcon from '../assets/icons/ui/arrow-right.svg?react'


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


// Tolerance buffer for floating-point operations
const EPSILON = 0.5


function Slider({ items }: SliderProps) {
  const [filter, setFilter] = useState<'show all' | Category>('show all')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [thumbSize, setThumbSize] = useState(0)
  const [trackWidth, setTrackWidth] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const filteredItems =
    filter === 'show all' ? items : items.filter(i => i.category === filter)


  // Scroll logic
  const updateScrollState = useCallback((container: HTMLDivElement) => {
    const { scrollLeft, scrollWidth, clientWidth } = container
    const maxScroll = scrollWidth - clientWidth
    const scrollable = maxScroll > EPSILON

    const progress = maxScroll > 0 ? Math.min(scrollLeft / maxScroll, 1) : 0
    setScrollProgress(progress)
    setThumbSize(Math.min(clientWidth / scrollWidth, 1))
    setTrackWidth(clientWidth)

    return {
      canScrollPrev: scrollLeft > EPSILON,
      canScrollNext: scrollLeft < maxScroll - EPSILON,
      scrollable,
    }
  }, [])


  // Scroll to card onClick
  const scrollToCard = useCallback(
    (direction: 1 | -1) => {
      const container = containerRef.current
      if (!container) return

      const cards = Array.from(container.children) as HTMLElement[]
      if (!cards.length) return

      // Find first visible card index
      const visibleIndex = cards.findIndex(
        card => card.offsetLeft + card.offsetWidth > container.scrollLeft + EPSILON
      )
      if (visibleIndex === -1) return

      const targetIndex = Math.min(
        Math.max(0, visibleIndex + direction),
        cards.length - 1
      )

      const targetCard = cards[targetIndex]

      // Calculate scrollLeft to align the target card at the start
      const scrollLeft = targetCard.offsetLeft
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    },
    []
  )

  
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)


  // Scroll Handler
  const handleScroll = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const { canScrollPrev, canScrollNext } = updateScrollState(container)
    setCanScrollPrev(canScrollPrev)
    setCanScrollNext(canScrollNext)
  }, [updateScrollState])


  // Scroll Listener
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [handleScroll])


  // Resize observer
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new ResizeObserver(() => {
      const { canScrollPrev, canScrollNext } = updateScrollState(container)
      setCanScrollPrev(canScrollPrev)
      setCanScrollNext(canScrollNext)
    })

    observer.observe(container)

    // Initial state
    const { canScrollPrev, canScrollNext } = updateScrollState(container)
    setCanScrollPrev(canScrollPrev)
    setCanScrollNext(canScrollNext)

    return () => observer.disconnect()
  }, [filteredItems, updateScrollState])

  
  // Reset scroll on filter change
  useEffect(() => {
    containerRef.current?.scrollTo({ left: 0, behavior: 'smooth' })
  }, [filter])


  // Card animation staggering setup
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }


  return (
    <div className='container flex flex-col justify-center gap-4 py-10'>
      {/* Filter Buttons */}
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

      {/* Slider */}
      <div className='relative'>
        <motion.div
          variants={containerVariants}
          initial={false}
          animate='show'
          exit='hidden'
          ref={containerRef}
          className='flex gap-4.5 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory'
        >
          <AnimatePresence mode='wait'>
            {filteredItems.map((item, index) =>
              <SliderCard key={index} item={item} index={index} />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Navigation Buttons */}
        {canScrollPrev && (
          <Button
            variant='secondary'
            iconOnly
            aria-label='Scroll previous'
            onClick={() => scrollToCard(-1)}
            className='absolute left-0 md:-left-5 top-1/2 transform -translate-y-1/2'
          >
            <ArrowLeftIcon className='size-5' />
          </Button>
        )}
        {canScrollNext && (
          <Button
            variant='secondary'
            iconOnly
            aria-label='Scroll next'
            onClick={() => scrollToCard(1)}
            className='absolute right-0 md:-right-5 top-1/2 transform -translate-y-1/2'
          >
            <ArrowRightIcon className='size-5' />
          </Button>
        )}
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