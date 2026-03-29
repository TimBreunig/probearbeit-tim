import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'

import Header from './sections/Header'
import App from './App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
)
