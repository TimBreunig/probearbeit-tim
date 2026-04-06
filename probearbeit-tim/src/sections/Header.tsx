import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import MegaMenu from './MegaMenu'
import Button from '../components/Button'
import NavItem from '../components/NavItem'
import type { LinkProps } from '../components/Link'

import logo from '../assets/images/brand/combination_mark_green.svg'
import menuIcon from '../assets/icons/ui/menu-8 1.svg'
import crossIcon from '../assets/icons/ui/e-remove 1.svg'


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
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <div className='w-full container sticky top-0 h-20 md:h-22 flex justify-between items-center bg-white border-b border-gray-70 z-50'>
      <a href='/'>
        <img src={logo} alt='Logoips logo' className='h-8'/>
      </a>

      {/* Mobile Navigation Menu */}
      <Button
        iconOnly
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className='block md:hidden rounded-full hover:bg-gray-70'
      >
        {isMobileOpen
          ? <img src={crossIcon} alt='Close Menu' className='w-12 h-12 p-3.5'/>
          : <img src={menuIcon} alt='Open Menu' className='w-12 h-12 p-3.5'/>
        }
        
      </Button>

      <div
				className={`fixed left-0 right-0 bottom-0 top-20 md:top-22 z-40 bg-white transform transition-transform duration-300 ease-in-out
          ${isMobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
			>
				<ul className='container flex flex-col items-start'>
          {navItems.map((item, i) => {
            const Component = item.component

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