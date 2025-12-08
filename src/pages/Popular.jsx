import React from 'react'
import Cards from '../components/Cards'
import { data } from '../store/data'
import { Link } from 'react-router-dom'

const Popular = () => {

    return (
        <div className='my-5'>
            <div>
                <h1 className='text-4xl text-center font-bold'>POPULAR IN TRENDING</h1>
            </div>
            <div>
                <hr className='w-50 bg-gray-900  h-1 rounded-2xl flex justify-self-center font-extrabold' />
            </div>
            <div className='flex flex-wrap gap-4 py-10 justify-center px-20 '>
                {data.map((item) => {
                    return <Link to={`/product/${item.id}`}>
                        <Cards key={item.id} data={item} />
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Popular