import NavItem from '../components/NavItem'
import type { LinkProps } from '../components/Link'


type NavListProps = {
  items: LinkProps[]
  isMegaOpen: boolean
  setIsMegaOpen: (value: boolean) => void
}


function NavList({ items, isMegaOpen, setIsMegaOpen }: NavListProps) {
  return (
    <>
      {items.map((item, i) => {
        const Component = item.component

        if (Component) {
          return (
            <li
              key={i}
              onMouseEnter={() => setIsMegaOpen(true)}
              onMouseLeave={() => setIsMegaOpen(false)}
            >
              <NavItem text={item.text} link={item.link} />
              {isMegaOpen && <Component />}
            </li>
          )
        }

        return (
          <li key={i}>
            <NavItem {...item} />
          </li>
        )
      })}
    </>
  )
}

export default NavList