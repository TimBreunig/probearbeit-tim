import { useState } from 'react'

import logo from '../assets/images/brand/combination_mark_green.svg'
import menuIcon from '../assets/icons/ui/menu-8 1.svg'

import MegaMenu from './MegaMenu'
import NavItem from '../components/NavItem'
import type { LinkProps } from '../components/Link'


const navItems: LinkProps[] = [
  {
    text: 'Blog',
    link: '/blog',
  },
  {
    text: 'Products',
    link: '/products',
    component: MegaMenu,
  },
  {
    text: 'About',
    link: '/about',
  },
]

function Header() {
  const [isMegaOpen, setIsMegaOpen] = useState(false)

  return (
    <div className='w-full container sticky top-0 h-20 md:h-22 flex justify-between items-center bg-white border-b border-gray-70 z-50'>
      <a href='/'>
        <img src={logo} alt='Logoips logo' className='h-8'/>
      </a>

      {/* Mobile Navigation Menu */}
      <a className='block md:hidden rounded-full hover:bg-gray-70'>
        <img src={menuIcon} alt='Logoips logo' className='w-12 h-12 p-3.5'/>
      </a>

      {/* Desktop Navigation Menu */}
      <ul className='hidden md:flex items-center'>
        {navItems.map((item, i) => {
          const Component = item.component;

          if (Component) {
            return (
              <li
                key={i}
                onMouseEnter={() => setIsMegaOpen(true)}
                onMouseLeave={() => setIsMegaOpen(false)}
              >
                <NavItem text={item.text} link={item.link} />
                {Component && isMegaOpen && <Component />}
              </li>
            )
          }

          return (
            <li>
              <NavItem key={i} {...item} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Header