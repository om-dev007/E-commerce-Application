import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import 'swiper/css'
import 'swiper/css/pagination'
import { CartProvider } from "./context/CartContext"
import { WishlistProvider } from './context/WishlistContext.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { PageLoaderProvider } from './context/PageLoaderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageLoaderProvider>
      <WishlistProvider>
        <HelmetProvider>
          <BrowserRouter>
            <CartProvider>
              <App />
            </CartProvider>
          </BrowserRouter>
        </HelmetProvider>
      </WishlistProvider>
    </PageLoaderProvider>
  </StrictMode>
)
