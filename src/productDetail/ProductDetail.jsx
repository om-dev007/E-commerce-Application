import { useParams } from 'react-router-dom'
import { womenData } from '../store/data'
import { menData } from '../store/data'
import { kidsData } from '../store/data'
import { data } from '../store/data'
import { collectionData } from '../store/data'
import Navbar from '../components/Navbar'
import star from '../assets/star_icon.png'
import halfstar from '../assets/star_dull_icon.png'

const ProductDetail = () => {
  const { id } = useParams()
  const product = menData.find((item) => item.id == id) || womenData.find((item) => item.id == id) || kidsData.find((item) => item.id == id) || data.find((item) => item.id == id) || collectionData.find((item) => item.id == id)

  return (
    <>
      <Navbar />
      <hr className='bg-gray-600 border-0 h-1 rounded-4xl outline-0 font-bold' />
      <div className='py-4'>
        <div className='py-2 px-2'>
          <h1 className='font-medium text-gray-500 text-center'> Home <span>-</span> Shop <span>-</span> {product.category} <span>-</span> {product.title} </h1>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row md:flex-row gap-4 md:gap-2 px-4 md:px-15 py-5'>
        <div className='flex flex-row sm:flex-col order-2 md:order-1 sm:order-1 lg:order-1 md:flex-col gap-1 justify-center md:justify-start sm:justify-start '>
          <div>
            <img className='w-12 h-10 md:w-20 md:h-15 lg:w-25 lg:h-20  rounded' src={product.image} alt="" />
          </div>
          <div>
            <img className='w-12 h-10 md:w-20 md:h-15 lg:w-25 lg:h-20 rounded' src={product.image} alt="" />
          </div>
          <div>
            <img className='w-12 h-10 md:w-20 md:h-15 lg:w-25 lg:h-20  rounded' src={product.image} alt="" />
          </div>
        </div>
        <div className='rounded md:order-2 sm:order-2 lg:order-2 order-1 mx-auto md:mx-0'>
          <img className='h-80 md:h-113 w-80 md:w-150 rounded object-cover' src={product.image} alt="" />
        </div>
        <div className='flex order-3 sm:order-3 lg:order-3 md:order-3 flex-col gap-5 px-4 md:px-5 text-center md:text-left'>
          <div>
            <h1 className=' text-xl md:text-2xl  text-gray-900 font-semibold'> {product.title} </h1>
          </div>
          <div className='px-2 flex gap-3 justify-center md:justify-start'>
            <img className='w-4 md:w-5' src={star} alt="" />
            <img className='w-4 md:w-5' src={star} alt="" />
            <img className='w-4 md:w-5' src={star} alt="" />
            <img className='w-4 md:w-5' src={star} alt="" />
            <img className='w-4 md:w-5' src={halfstar} alt="" />
            <h3 className='font-semibold text-gray-700 text-sm md:text-base'> {product.rating} </h3>
          </div>
          <div className='flex gap-5 justify-center md:justify-start'>
            <h3 className='text-gray-700 text-xl md:text-2xl font-bold px-2'> <del>${product.discountPrice} </del> </h3>
            <h3 className='text-red-500 text-xl md:text-2xl font-bold px-2'> ${product.price} </h3>
          </div>
          <div>
            <h3 className='text-justify text-black font-semibold text-sm md:text-base'>
              {product.description}
            </h3>
          </div>
          <div>
            <h1 className='text-gray-700 font-bold text-sm md:text-base'> Select Size </h1>
          </div>
          <div className='flex gap-3 justify-center md:justify-start flex-wrap'>
            <button className='border border-gray-200 outline-0 cursor-pointer px-3 md:px-5 rounded py-2 text-sm md:text-base'>S</button>
            <button className='border border-gray-200 outline-0 cursor-pointer px-3 md:px-5 rounded py-2 text-sm md:text-base'>M</button>
            <button className='border border-gray-200 outline-0 cursor-pointer px-3 md:px-5 rounded py-2 text-sm md:text-base'>L</button>
            <button className='border border-gray-200 outline-0 cursor-pointer px-3 md:px-5 rounded py-2 text-sm md:text-base'>XL</button>
            <button className='border border-gray-200 outline-0 cursor-pointer px-3 md:px-5 rounded py-2 text-sm md:text-base'>XXL</button>
          </div>
          <div className='flex justify-center md:justify-start'>
            <button className='text-white bg-red-500 px-8 md:px-15 py-3 md:py-5 rounded cursor-pointer text-sm md:text-base'>ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail