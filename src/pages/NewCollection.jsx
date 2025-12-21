import React from 'react'
import Cards from '../components/Cards'
import { collectionData } from '../store/data'
import { Link } from 'react-router-dom'

const NewCollection = () => {
  return (
    <div className='pt-10'>
      <div className='text-center'>
        <h1 className='text-3xl text-gray-800'>NEW OFFERS</h1>
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