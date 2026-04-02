import { Link } from 'react-router-dom'

import Button from '../components/Button'
import ProductTile from '../components/ProductTile'
import type { TileProps } from '../components/ProductTile'


const productItems: TileProps[] = [
  {
    name: 'Product G',
    description:
      'A diam dolor gravida eu et nibh morbi at nullam. Enim urna quis vitae arcu donec purus. Faucibus iaculis at duis pulvinar eget. Ipsum ut cras magna.',
    link: '/',
    color: 'bg-product-g-blue',
  },
  {
    name: 'Product F',
    description:
      'Nec eget dui pulvinar ut at neque duis. Integer ligula donec vel risus malesuada sed id faucibus. Sed cursus morbi egestas tincidunt metus ipsum.',
    link: '/',
    color: 'bg-product-f-blue-dark',
  },
  {
    name: 'Product A',
    description:
      'Tellus tellus nibh duis scelerisque nibh consequat. Volutpat consectetur maecenas volutpat odio. Vulputate nisl morbi et scelerisque cras. Non et.',
    link: '/',
    color: 'bg-product-a-yellow-dark',
  },
]


function Products() {
  return (
    <div className='container flex flex-col gap-4 py-10'>
      <h2 className='h2 text-gray-900'>
        Our Products
      </h2>
     
      <div className='grid'>
        {productItems.map((item, i) => (
          <ProductTile
            key={i}
            name={item.name}
            description={item.description}
            link={item.link}
            color={item.color}
          />
        ))}
      </div>

      <Link
        to='/products'
        className='flex justify-end'
      >
        <Button variant='underline'>
          Show all
        </Button>
      </Link>
    </div>
  )
}

export default Products