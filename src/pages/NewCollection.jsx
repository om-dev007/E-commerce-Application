import React from 'react'
import Cards from '../components/Cards'
import { collectionData } from '../store/data'

const NewCollection = () => {
  return (
    <div>
      <div>
        <h1 className='text-center font-bold text-4xl'>NEW COLLECTIONS</h1>
        <hr className='w-50 bg-gray-900  h-1 rounded-2xl flex justify-self-center font-extrabold' />
      </div>
      <div className='flex flex-wrap py-10 px-10 justify-center gap-7'>
        {
          collectionData.map((items) => {
            return <Cards data={items} key={items.id} />
          })
        }
      </div>
    </div>
  )
}

export default NewCollection