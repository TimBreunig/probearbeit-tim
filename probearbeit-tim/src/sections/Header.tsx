import logo from '../assets/images/brand/combination_mark_green.svg';
import menuIcon from '../assets/icons/menu-8 1.svg';
import NavItem from '../components/NavItem';


const navItems = [
  {
    text: 'Blog',
    link: '/blog',
  },
  {
    text: 'Products',
    link: '/products',
  },
    {
    text: 'About',
    link: '/about',
  },
]

function Header() {
  return (
    <>
      <div className='container sticky top-0 h-20 md:h-22 flex justify-between items-center border-b border-gray-70'>
        <a href='#'>
          <img src={logo} alt='Logoips logo' className='h-10'/>
        </a>

        <a className='block md:hidden rounded-full hover:bg-gray-70'>
          <img src={menuIcon} alt='Logoips logo' className='w-12 h-12 p-3.5'/>
        </a>

        <div className='hidden md:flex'>
          {navItems.map((navItem, index) => (
            <NavItem
              key={index}
              text={navItem.text}
              link={navItem.link}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Header