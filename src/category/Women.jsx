import React from 'react'
import Navbar from '../components/Navbar'
import creative from '../assets/summer-fashion-sale-banner-design-template-62077c541db2b288dbccd6d9d1c9af3d_screen.jpg'
import {womenData} from '../store/data'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Women = () => {
    return (
        <>
            <Navbar />
            <div>
                <div className='bg-[#FAF8F5] flex justify-center py-2 px-4 md:px-10'>
                    <img className='w-full sm:w-[85%] rounded-2xl h-[30vh] sm:h-[70vh] shadow-sm' src={creative} alt="" />
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-5 py-10 px-8 sm:px-10 md:px-16 lg:px-20'>
                    {womenData.map((items) => {
                        return <Link to={`/product/${items.id}`}>
                            <Cards data={items} key={items.id} />
                        </Link>
                    })}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Women