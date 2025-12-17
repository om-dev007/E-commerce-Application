import React from 'react'
import Cards from '../components/Cards'
import { collectionData } from '../store/data'
import { Link } from 'react-router-dom'

const NewCollection = () => {
  return (
    <div className='pt-10'>
      <div>
        <h1 className='text-center font-bold text-4xl'>NEW COLLECTIONS</h1>
        <hr className='w-50 bg-gray-900  h-1 rounded-2xl flex justify-self-center font-extrabold' />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-5 py-10 px-8 sm:px-10 md:px-16 lg:px-20'>
        {
          collectionData.map((items) => {
            return <Link to={`/product/${items.id}`}> <Cards data={items} key={items.id} /> </Link>
          })
        }
      </div>
    </div>
  )
}

export default NewCollection