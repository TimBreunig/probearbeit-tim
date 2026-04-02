import { Link } from 'react-router-dom'

import Button from '../components/Button'
import type { LinkProps } from '../components/Link'

import ArrowUpIcon from '../assets/icons/arrow-sm-up.svg?react'


const navItems: LinkProps[] = [
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

function Footer() {
  return (
    <div className='relative w-full flex flex-col items-center gap-10 pt-10 bg-white'>
      <div className='absolute -top-5'>
        <Button
          variant='default'
          iconOnly
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpIcon className='size-5' />
        </Button>
      </div>
      <div className='container flex flex-col md:flex-row items-center px-4 py-6 gap-2 caption-text text-gray-900'>
        <span>
          © 2023 Loremipsum GmbH
        </span>
        <ul className='flex flex-row justify-center gap-2'>
          {navItems.map((item, i) => (
            <li key={i}>
              <Link to={item.link} className='hover:text-black active:text-black transition-colors duration-300 ease-out'>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer