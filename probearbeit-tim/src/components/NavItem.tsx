import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import type { LinkProps } from '../components/Link'


function NavItem({ text, link }: LinkProps) {
  const location = useLocation()
  const isActive = location.pathname === link

  return (
    <Link
      to={link}
      className='relative group px-3 py-8'
    >
      <span className={`
          button
          text-gray-900
          group-hover:text-main-green-light
          ${isActive ? 'text-main-green' : ''}
          transition-colors duration-300 ease-out

          /* Underline pseudo-element */
          after:absolute
          after:left-0 after:bottom-0
          after:w-full after:h-1
          after:rounded-t-sm
          after:bg-main-green
          after:scale-x-0
          after:origin-bottom-left
          after:transition-transform after:duration-300 after:ease-out
          
          /* Hover & Active states */
          group-hover:after:scale-x-100
          ${isActive ? 'after:scale-x-100' : ''}
        `}>
        {text}
      </span>
    </Link>
  )
}

export default NavItem