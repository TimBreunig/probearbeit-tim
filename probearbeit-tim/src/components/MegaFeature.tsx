import Button from '../components/Button'
import { Link } from 'react-router-dom'

import ArrowIcon from '../assets/icons/ui/arrow-right.svg?react'


type MegaFeatureProps = {
  image: string
  category: string
  heading: string
  description: string
  link: string
}


function MegaFeature({ image, category, heading, description, link }: MegaFeatureProps) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='w-full aspect-video bg-gray-70 rounded-lg'>
          <img src={image} alt={heading} className='w-full object-cover'/>
        </div>
        <div className='flex flex-col justify-between h-48'>
          <div className='flex flex-col gap-2'>
            <span className='overline-text text-gray-500'>
              {category}
            </span>
            <h2 className='h2'>
              {heading}
            </h2>
            <p className='body-text'>
              {description}
            </p>
          </div>
          <div>
            <Link
                // Replace placeholder link with individual product page
                to={link}
            >
              <Button size='lg'>
                <ArrowIcon className='size-5' />
                Read more
              </Button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default MegaFeature