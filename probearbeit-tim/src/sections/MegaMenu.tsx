import Button from '../components/Button'
import { Link } from 'react-router-dom'
import type { LinkProps } from '../components/Link'

import ArrowIcon from '../assets/icons/arrow-right.svg?react'
import ProductATeaser from '../assets/images/products/product-a-teaser.png'
import ProductBTeaser from '../assets/images/products/product-b-teaser.png'


const megaButtons: LinkProps[] = [
  // Replace placeholder links with individual product pages
  {
    text: 'Product A',
    link: '/products',
  },
  {
    text: 'Product B',
    link: '/products',
  },
  {
    text: 'Product C',
    link: '/products',
  },
  {
    text: 'Product D',
    link: '/products',
  },
  {
    text: 'Product E',
    link: '/products',
  },
  {
    text: 'Product F',
    link: '/products',
  },
  {
    text: 'Product G',
    link: '/products',
  },
]



function MegaMenu() {
  return (
    <div className='absolute container w-full top-full left-0 py-10 grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-70 shadow-[0_40px_40px_rgba(0,0,0,0.04)]'>
      <div className='flex flex-col justify-between items-start'>
        <div className='flex flex-col gap-8'>
          <h2 className='h2'>
            Products
          </h2>
          <div className='flex flex-row flex-wrap gap-2'>
            {megaButtons.map((button, i) => (
              <Link
                to={button.link}
              >
                <Button key={i}>
                  {button.text}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <Button variant='underline'>
          <ArrowIcon className='size-5' />
          Show all
        </Button>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='w-full aspect-video bg-gray-70 rounded-lg'>
          <img src={ProductATeaser} alt='Product A teaser image' />
        </div>
        <div className='flex flex-col justify-between h-48'>
          <div className='flex flex-col gap-2'>
            <span className='overline-text text-gray-500'>
              Products
            </span>
            <h2 className='h2'>
              Product A
            </h2>
            <p className='body-text'>
              At proin ipsum massa turpis viverra mi tristique nisi at. Sapien sed leo sit faucibus mattis augue morbi leo.
            </p>
          </div>
          <div>
            <Link
                // Replace placeholder link with individual product page
                to='/products'
            >
              <Button size='lg'>
                <ArrowIcon className='size-5' />
                Read more
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='w-full aspect-video bg-gray-70 rounded-lg'>
          <img src={ProductBTeaser} alt='Product B teaser image' />
        </div>
        <div className='flex flex-col justify-between h-48'>
          <div className='flex flex-col gap-2'>
            <span className='overline-text text-gray-500'>
              Products
            </span>
            <h2 className='h2'>
              Product B
            </h2>
            <p className='body-text'>
              Ante sit congue arcu morbi. Id diam id erat ultrices cursus eu at in mi. Euismod at a nibh sed duis ac.
            </p>
          </div>
          <div>
            <Link
                // Replace placeholder link with individual product page
                to='/products'
            >
              <Button size='lg'>
                <ArrowIcon className='size-5' />
                Read more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MegaMenu