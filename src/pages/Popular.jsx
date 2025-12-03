import React from 'react'
import Cards from '../components/Cards'
import data from '../store/data'

const Popular = () => {

  return (
    <div className='my-5'>
        <div>
            <h1 className='text-4xl text-center font-bold'>POPULAR IN WOMEN</h1>
        </div>
        <div>
            <hr className='w-60 bg-gray-900 h-1 rounded-2xl flex justify-self-center font-extrabold' />
        </div>
        <div>
            {data.map(() => {
                return (<Cards data={data} />)
            })}
        </div>
        
    </div>
  )
}

export default Popular