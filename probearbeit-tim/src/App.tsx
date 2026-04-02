import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './pages/about.tsx'
import Blog from './pages/blog.tsx'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Home from './pages/home.tsx'
import Products from './pages/products.tsx'



function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App