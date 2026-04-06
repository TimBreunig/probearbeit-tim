import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Button from './Button'


type Category = 'city' | 'forest' | 'water'

export type CardItem = {
  image: string
  alt: string
  link: string
  category: Category
}

export type SliderProps = {
  items: CardItem[]
}


const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  show: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.1 },
  }),
  exit: { opacity: 0, x: -40, transition: { duration: 0.3, ease: 'easeIn' } },
}


function SliderCard({ item, index }: { item: CardItem; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      initial='hidden'
      animate='show'
      exit='exit'
      className='group relative shrink-0 basis-[calc((1232px-3*18px)/4)] md:basis-[calc((100%-3*18px)/4)] aspect-3/4 rounded-lg snap-start cursor-pointer overflow-hidden'
    >
      <img
        src={item.image}
        alt={item.alt}
        className='w-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out'
      />
      <Link to={item.link}>
        <Button
          variant='primary'
          size='lg'
          className='absolute bottom-9 left-1/2 transform -translate-x-1/2'
        >
          Lorem Ipsum
        </Button>
      </Link>
    </motion.div>
  )
}

export default SliderCard