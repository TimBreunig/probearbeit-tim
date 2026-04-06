import NavItem from './NavItem'
import type { LinkProps } from './Link'
import { AnimatePresence, motion } from 'framer-motion'


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
              <AnimatePresence>
                {isMegaOpen && (
                  <motion.div
                    className='absolute left-0 top-full w-full -z-10'
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Component />
                  </motion.div>
                )}
              </AnimatePresence>
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