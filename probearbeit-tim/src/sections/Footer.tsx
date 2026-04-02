import { Link } from 'react-router-dom'

import Button from '../components/Button'
import FooterCols from '../components/FooterCols'
import type { FooterColProps } from '../components/FooterCols'
import type { LinkProps } from '../components/Link'

import ArrowUpIcon from '../assets/icons/ui/arrow-sm-up.svg?react'
import YouTubeIcon from '../assets/icons/socials/logo-youtube 1.svg?react'


const linkBarItems: LinkProps[] = [
  {
    text: 'Datenschutz',
    link: '/',
  },
  {
    text: 'Infopflichten Pharmakovigilanz',
    link: '/',
  },
  {
    text: 'Impressum',
    link: '/',
  },
]


const footerItems: FooterColProps[] = [
  {
    heading: 'Loremipsum GmbH',
    hasParent: false,
    content: (
      <div className='flex flex-col gap-4'>
        <p className='flex flex-col gap-0'>
          <span>Musterstraße 16</span>
          <span>12345 Musterstadt</span>
          <span>
            Telefon:&nbsp;
            <a href='tel:012345678910'>
              0123 / 456789-10
            </a>
          </span>
          <span>
            Telefax:&nbsp;
            <a href='tel:012345678911'>
              0123 / 456789-11
            </a>
          </span>
        </p>
        <div>
          <Button variant='secondary'>
            Zur Kontaktseite
          </Button>
        </div>
      </div>
    ),
  },
  {
    heading: 'Corporate',
    hasParent: false,
    links: [
      { text: 'About', link: '/about' },
      { text: 'Who we are', link: '/' },
      { text: 'Team', link: '/' },
      { text: 'Jobs', link: '/' },
      { text: 'Development', link: '/' },
    ],
  },
  {
    heading: 'Products',
    hasParent: false,
    links: [
      { text: 'Product-A', link: '/' },
      { text: 'Product-B', link: '/' },
      { text: 'Product-C', link: '/' },
      { text: 'Product-D', link: '/' },
      { text: 'Product-E', link: '/' },
      { text: 'Product-F', link: '/' },
      { text: 'Product-G', link: '/' },
      { text: 'Show all', link: '/products' },
    ],
  },
  {
    heading: 'Service',
    hasParent: true,
    links: [
      { text: 'Downloads', link: '/' },
      { text: 'FAQ', link: '/' },
    ],
    content: (
      <a href='https://www.youtube.com/' className='flex flex-row gap-2'>
        <YouTubeIcon className='size-6' />
        YouTube
      </a>
    )
  },
]


function Footer() {
  return (
    <footer className='relative flex flex-col items-center pt-10 md:pt-30 bg-white text-gray-900'>
      <div className='absolute -top-5 md:top-10'>
        <Button
          variant='default'
          iconOnly
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpIcon className='size-5' />
        </Button>
      </div>

      <div className='hidden md:grid container w-full py-20 bg-gray-70 '>
        {footerItems.map((item, i) => (
          <FooterCols
            key={i}
            heading={item.heading}
            hasParent={item.hasParent}
            links={item.links}
            content={item.content}
          />
        ))}
      </div>

      <div className='container flex flex-col md:flex-row md:justify-between items-center w-full py-6 gap-2 md:gap-0 caption-text'>
        <span>
          © 2023 Loremipsum GmbH
        </span>
        <ul className='flex flex-row justify-center gap-2 md:gap-4'>
          {linkBarItems.map((item, i) => (
            <li key={i}>
              <Link to={item.link}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer