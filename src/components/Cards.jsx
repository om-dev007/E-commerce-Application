import React from 'react'


const Cards = ({data}) => {
    console.log(data);
    
    return (
        <div className='cards rounded-2xl w-50 h-100'>
            <div className=''>
                <img className='w-50 object-contain rounded-2xl' src={salvar} alt="" />
            </div>
            <div>

            </div>
        </div>
    )
}

export default Cards