import React from 'react'

const Cards = ({data}) => {
    console.log(data);

    return (
        <div className='cards rounded-2xl border-2 border-gray-400 shadow-gray-400 w-50 h-auto py-2'>
            <div className='object-contain'>
                <img className='w-50 h-50 object-contain ' src={data.image} alt={data.title} />
            </div>
            <div className='text-center py-1'>
                <h3 className='py-1'>{data.title}</h3>
                <p>Rating: {data.rating}</p>
            </div>
        </div>
    )
}

export default Cards