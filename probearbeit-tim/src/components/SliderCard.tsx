import { Link } from 'react-router-dom'

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


function SliderCard({ item }: { item: CardItem }) {
  return (
    <div className='group relative shrink-0 basis-[calc((1232px-3*18px)/4)] md:basis-[calc((100%-3*18px)/4)] aspect-3/4 rounded-lg snap-start cursor-pointer overflow-hidden'>
      <img src={item.image} alt={item.alt} className='w-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out' />
      <Link to='/'>
        <Button
          variant='primary'
          size='lg'
          className='absolute bottom-9 left-1/2 transform -translate-x-1/2'
        >
          Lorem Ipsum
        </Button>
      </Link>
    </div>
  )
}

export default SliderCard