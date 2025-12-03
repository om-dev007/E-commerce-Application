import { Link } from "react-router-dom"

const ProductCard = ({item}) => {
    return (
        <div className='border-2 border-gray-400 p-5  rounded-2xl '>
        <div className='py-2'>
            <img className='h-20 rounded' src={item.image} alt="" />
        </div>
        <div className='text-wrap py-1 text-center text-sm font-light'>
            $ {item.price}
        </div>
        <div>
            <Link className="bg-green-500 px-3 py-1 rounded-2xl cursor-pointer hover:scale-105 transition-all" to={`/product/${item.id}`}>View</Link>
        </div>
    </div>
    )
}

export default ProductCard