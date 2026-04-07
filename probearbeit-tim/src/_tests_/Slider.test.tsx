import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Slider from '../components/Slider'
import type { CardItem } from '../components/SliderCard'


const mockItems: CardItem[] = [
  { image: 'img1.jpg', alt: 'City 1', link: '/', category: 'city' },
  { image: 'img2.jpg', alt: 'Forest 1', link: '/', category: 'forest' },
  { image: 'img3.jpg', alt: 'Forest 2', link: '/', category: 'forest' },
  { image: 'img4.jpg', alt: 'Water 1', link: '/', category: 'water' },
  { image: 'img5.jpg', alt: 'city 2', link: '/', category: 'city' },
]


test('renders slider cards', () => {
  render(
    <MemoryRouter>
      <Slider items={mockItems} />
    </MemoryRouter>
  )

  expect(screen.getByAltText('City 1')).toBeInTheDocument()
  expect(screen.getByAltText('Forest 1')).toBeInTheDocument()
})