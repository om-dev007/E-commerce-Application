import { useParams } from 'react-router-dom'
import { womenData } from '../store/data'
import { menData } from '../store/data'
import { kidsData } from '../store/data'
import Navbar from '../components/Navbar'
import star from '../assets/star_icon.png'
import halfstar from '../assets/star_dull_icon.png'

const ProductDetail = () => {
  const { id } = useParams()
  const product = menData.find((item) => item.id == id) || womenData.find((item) => item.id == id) || kidsData.find((item) => item.id == id)

  return (
    <>
      <Navbar />
      <hr className='bg-gray-600 border-0 h-1 rounded-4xl outline-0 font-bold' />
      <div className='py-4'>
        <div className='py-2 px-2'>
          <h1 className='font-medium text-gray-500 text-center'> Home <span>-</span> Shop <span>-</span> {product.category} <span>-</span> {product.title} </h1>
        </div>
      </div>
      <div className='flex gap-2 px-15 py-5'>
        <div className='flex flex-col gap-1'>
          <div>
            <img className='w-30 rounded' src={product.image} alt="" />
          </div>
          <div>
            <img className='w-30 rounded' src={product.image} alt="" />
          </div>
          <div>
            <img className='w-30 rounded' src={product.image} alt="" />
          </div>
        </div>
        <div className='rounded'>
          <img className='h-113 w-150 rounded' src={product.image} alt="" />
        </div>
        <div className='flex flex-col gap-5 px-5'>
          <div>
            <h1 className=' text-2xl  text-gray-900 font-semibold'> {product.title} </h1>
          </div>
          <div className='px-2 flex gap-3'>
            <img className='w-5' src={star} alt="" />
            <img className='w-5' src={star} alt="" />
            <img className='w-5' src={star} alt="" />
            <img className='w-5' src={star} alt="" />
            <img className='w-5' src={halfstar} alt="" />
            <h3 className='font-semibold text-gray-700'> {product.rating} </h3>
          </div>
          <div className='flex gap-5 '>
            <h3 className='text-gray-700 text-2xl font-bold px-2'> <del>$130</del> </h3>
            <h3 className='text-red-500 text-2xl font-bold px-2'> ${product.price} </h3>
          </div>
          <div>
            <h3 className='text-justify text-black font-semibold'>
              {product.description}
            </h3>
          </div>
          <div>
            <h1 className='text-gray-700 font-bold'> Select Size </h1>
          </div>
          <div className='flex gap-3'>
            <button className='border border-gray-200 outline-0 cursor-pointer px-5 rounded py-2 '>S</button>
            <button className='border border-gray-200 outline-0 cursor-pointer px-5 rounded py-2 '>M</button>
            <button className='border border-gray-200 outline-0 cursor-pointer px-5 rounded py-2 '>L</button>
            <button className='border border-gray-200 outline-0 cursor-pointer px-5 rounded py-2 '>XL</button>
            <button className='border border-gray-200 outline-0 cursor-pointer px-5 rounded py-2 '>XXL</button>
          </div>
          <div>
            <button className='text-white bg-red-500 px-15 py-5 rounded cursor-pointer'>ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail