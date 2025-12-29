import React from 'react'
import { Helmet } from "react-helmet-async";
import Navbar from '../components/Navbar'
import creative from '../assets/summer-fashion-sale-banner-design-template-62077c541db2b288dbccd6d9d1c9af3d_screen.jpg'
import { womenData } from '../store/data'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Women = () => {
  return (
    <>
      <Helmet>
        <title>Women Clothing Collection | Trendy Women Wear | Velnixa</title>

        <meta
          name="description"
          content="Shop trendy and premium women clothing at Velnixa. Stylish fits, comfortable fabric & fast delivery across India."
        />

        <link
          rel="canonical"
          href="https://velnixa.vercel.app/womens"
        />

        <meta property="og:title" content="Women Clothing Collection | Velnixa" />
        <meta
          property="og:description"
          content="Explore premium women fashion at Velnixa."
        />
        <meta property="og:url" content="https://velnixa.vercel.app/womens" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <div className='bg-[#FAF8F5] flex justify-center py-2 px-4 md:px-10'>
        <img
          className='w-full sm:w-[85%] rounded-2xl h-[30vh] sm:h-[70vh] shadow-sm object-cover'
          src={creative}
          alt="Women fashion collection banner - Velnixa"
          loading="lazy"
        />
      </div>

      <h1 className="sr-only">Women Clothing Collection at Velnixa</h1>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                      gap-x-5 gap-y-5 py-10 px-8 sm:px-10 md:px-16 lg:px-20'>
        {womenData.map((items) => (
          <Link
            to={`/product/${items.id}`}
            key={items.id}
            aria-label={`View ${items.title} - Women clothing at Velnixa`}
          >
            <Cards data={items} />
          </Link>
        ))}
      </div>

      <Footer />
    </>
  )
}

export default Women
