import Home from "./pages/Home"
import Product from './pages/Product'
import { Route, Routes } from "react-router-dom"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"

const App = () => {
 
  return (
    <div className='bg-white min-h-screen text-black'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App