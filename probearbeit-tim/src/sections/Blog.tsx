import Headline from '../components/Headline'
import Slider from '../components/Slider'
import type { HeadlineProps } from '../components/Headline'
import type { CardItem } from '../components/Slider'

import Forest1 from '../assets/images/backgrounds/forest-1.png'
import Forest2 from '../assets/images/backgrounds/forest-2.png'
import Forest3 from '../assets/images/backgrounds/forest-3.png'
import Forest4 from '../assets/images/backgrounds/forest-4.png'
import Forest5 from '../assets/images/backgrounds/forest-5.png'
import City1 from '../assets/images/backgrounds/city-1.png'
import Water1 from '../assets/images/backgrounds/water-1.png'


const blogHeadline: HeadlineProps = {
  heading: 'Blog',
  lines: [
    'Diam enim suscipit habitant ac nunc arcu commodo pulvinar massa.',
    'Odio pellentesque fusce elit facilisi risus blandit dictum turpis erat. A vestibulum sed scelerisque quis in.',
  ],
}

const sliderItems: CardItem[] = [
  {
    image: Forest1,
    alt: 'Forest 1',
    link: '/',
    category: 'forest'
  },
  {
    image: Forest2,
    alt: 'Forest 2',
    link: '/', 
    category: 'forest'
  },
  {
    image: Forest3,
    alt: 'Forest 3',
    link: '/',
    category: 'forest'
  },
  {
    image: Forest4,
    alt: 'Forest 4',
    link: '/',
    category: 'forest'
  },
  {
    image: City1,
    alt: 'City 1',
    link: '/',
    category: 'city'
  },
  {
    image: Water1,
    alt: 'Water 1',
    link: '/',
    category: 'water'
  },
  {
    image: Forest5,
    alt: 'Forest 5',
    link: '/',
    category: 'forest'
  },
]


function Blog() {
  return (
    <>
      <Headline heading={blogHeadline.heading} lines={blogHeadline.lines} />
      <Slider items={sliderItems} />
    </>
  )
}

export default Blog