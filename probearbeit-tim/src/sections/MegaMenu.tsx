import { Link } from 'react-router-dom'

import Button from '../components/Button'
import type { LinkProps } from '../components/Link'
import MegaFeature from '../components/MegaFeature'

import ArrowIcon from '../assets/icons/ui/arrow-right.svg?react'
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
    <div className='absolute container w-full top-full left-0 py-10 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white border-b border-gray-70 shadow-[0_40px_40px_rgba(0,0,0,0.04)]'>
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

      <MegaFeature 
        image={ProductATeaser}
        category="Products"
        heading="Product A"
        description="At proin ipsum massa turpis viverra mi tristique nisi at. Sapien sed leo sit faucibus mattis augue morbi leo."
        link="/products" // Replace placeholder link with individual product page
      />

      <MegaFeature 
        image={ProductBTeaser}
        category="Products"
        heading="Product B"
        description="Ante sit congue arcu morbi. Id diam id erat ultrices cursus eu at in mi. Euismod at a nibh sed duis ac."
        link="/products" // Replace placeholder link with individual product page
      />
    </div>
  )
}

export default MegaMenu