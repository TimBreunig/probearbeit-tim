import { Link } from 'react-router-dom'

import Button from './Button'

import ArrowRightIcon from '../assets/icons/ui/arrow-right.svg?react'
import ProductTransparent from '../assets/images/products/product-transparent.png'


export type TileProps = {
  name: string
  description: string
  link: string
  color: string
}


function ProductTile({ name, description, link, color }: TileProps) {
  return(
    <div
      aria-label={name}
      className={`col-span-4 flex flex-col ${color} rounded-lg`}
    >
      <img
        src={ProductTransparent}
        alt='alt text'
        className='aspect-square'
      />
      <div className='hidden md:flex flex-col gap-6 px-4 pb-6 text-white'>
        <div className='flex flex-col gap-2'>
          <h3 className='h3'>
            {name}
          </h3>
          <p className='body-text'>
            {description}
          </p>
        </div>
        <div>
          <Link to={link} aria-label={`Link to ` + name}>
            <Button variant='primary' iconOnly>
              <ArrowRightIcon className='size-5' />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductTile