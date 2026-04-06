import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import MegaMenu from './MegaMenu'
import Button from '../components/Button'
import NavList from '../components/NavList'
import type { LinkProps } from '../components/Link'

import logo from '../assets/images/brand/combination_mark_green.svg'
import MenuIcon from '../assets/icons/ui/menu-8 1.svg?react'
import CrossIcon from '../assets/icons/ui/e-remove 1.svg?react'


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


  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
  }, [isMobileOpen])

  
  return (
    <div className='w-full container sticky top-0 h-20 md:h-22 flex justify-between items-center bg-white border-b border-gray-70 z-50'>
      <Link to='/' aria-label='Home Button'>
        <img src={logo} alt='Logoips logo' className='h-8'/>
      </Link>

      {/* Mobile Navigation Menu */}
      <Button
        variant='underline'
        iconOnly
        aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className='md:hidden rounded-full hover:bg-gray-70 active:bg-gray-70'
      >
        {isMobileOpen
          ? <CrossIcon className='size-5'/>
          : <MenuIcon className='size-5'/>
        }
        
      </Button>

      <div
				className={`block md:hidden fixed left-0 right-0 bottom-0 top-20 md:top-22 z-40 bg-white transform transition-transform duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
			>
				<ul className='container flex flex-col items-start'>
          <NavList
            items={navItems}
            isMegaOpen={isMegaOpen}
            setIsMegaOpen={setIsMegaOpen}
          />
        </ul>
		  </div>

      {/* Desktop Navigation Menu */}
      <ul className='hidden md:flex items-center'>
        <NavList
          items={navItems}
          isMegaOpen={isMegaOpen}
          setIsMegaOpen={setIsMegaOpen}
        />
      </ul>
    </div>
  )
}

export default Header