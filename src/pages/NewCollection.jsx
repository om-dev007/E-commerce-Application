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
      <div className='flex flex-wrap py-10 px-20 justify-center gap-4'>
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