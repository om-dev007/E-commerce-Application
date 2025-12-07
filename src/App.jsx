import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import ProductDetail from "./productDetail/ProductDetail"
import NotFound from './pages/NotFound'
import Men from "./category/Men"
import Women from "./category/Women"
import Kids from "./category/Kids"
import About from './pages/About'
import Help from "./pages/Help"
import Offices from "./pages/Offices"

const App = () => {
 
  return (
    <div className='bg-white min-h-screen text-black'>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/mens" element={<Men/>} />
        <Route path="/mens/:id" element={<ProductDetail/>} />
        <Route path="/womens" element={<Women/>} />
        <Route path="/womens/:id" element={<ProductDetail/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/kids/:id" element={<ProductDetail/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/offices" element={<Offices/>} />
      </Routes>
    </div>
  )
}

export default App