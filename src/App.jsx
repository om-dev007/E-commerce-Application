import Home from "./pages/Home"
import Product from './pages/Product'
import { Route, Routes } from "react-router-dom"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import NotFound from './pages/NotFound'
import Men from "./pages/categories/Men"
import Women from "./pages/categories/Women"
import Kids from "./pages/categories/Kids"
import About from './pages/About'

const App = () => {
 
  return (
    <div className='bg-white min-h-screen text-black'>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/mens" element={<Men/>} />
        <Route path="/womens" element={<Women/>} />
        <Route path="/kids" element={<Kids/>} />
      </Routes>
    </div>
  )
}

export default App