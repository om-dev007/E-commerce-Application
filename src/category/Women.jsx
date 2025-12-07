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
                <div className='flex justify-center py-2 px-10'>
                    <img className='w-[85%] h-100 rounded ' src={creative} alt="" />
                </div>
                <div className='flex flex-wrap gap-5 px-15 justify-center py-10'>
                    {womenData.map((items) => {
                        return <Link to={`/womens/${items.id}`}>
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