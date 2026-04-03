import Blog from '../sections/Blog'
import Hero from '../sections/Hero'
import Highlight from '../sections/Highlight'
import Products from '../sections/Products'


function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Blog />
      <Highlight />
    </>
  )
}

export default Home