import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import type { LinkProps } from '../components/Link'


function NavItem({ text, link }: LinkProps) {
  const location = useLocation()
  const isActive = location.pathname.startsWith(link)

  return (
    <Link
      to={link}
      className={`
          block button relative px-3 py-8

          text-gray-900
          transition-colors duration-300 ease-out

          ${isActive ? 'text-main-green' : ''}
          hover:text-main-green-light
          
          /* Underline pseudo-element */
          after:absolute
          after:left-0 after:bottom-0
          after:w-full after:h-1
          after:rounded-t-sm
          after:origin-bottom-left
          after:scale-x-0
          after:transition-transform after:duration-300 after:ease-out

          /* Hover overrides */
          hover:after:scale-x-100
          hover:after:bg-main-green-light

          /* Active overrides */
          ${isActive ? 'after:scale-x-100 after:bg-main-green' : ''}
        `}
    >
        {text}
    </Link>
  )
}

export default NavItem