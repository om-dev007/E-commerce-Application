import React from 'react'
import { Helmet } from "react-helmet-async";
import kidsSale from '../assets/kidsSale.jpg'
import Navbar from '../components/Navbar'
import { kidsData } from '../store/data'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Kids = () => {
  return (
    <>

      <Helmet>
        <title>Kids Clothing Collection | Buy Kids Wear Online | Velnixa</title>

        <meta
          name="description"
          content="Shop trendy and comfortable kids clothing at Velnixa. Premium quality kids wear, best prices & fast delivery across India."
        />

        <link
          rel="canonical"
          href="https://velnixa.vercel.app/kids"
        />

        <meta property="og:title" content="Kids Wear Collection | Velnixa" />
        <meta
          property="og:description"
          content="Explore premium kids clothing at Velnixa. Stylish, comfortable & affordable."
        />
        <meta property="og:url" content="https://velnixa.vercel.app/kids" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <div>
        <div className='flex px-4 md:px-10 justify-center py-2'>
          <img
            className='w-full sm:w-[85%] rounded-2xl h-[30vh] sm:h-[70vh] shadow-sm object-cover'
            src={kidsSale}
            alt="Kids fashion sale banner - Velnixa"
            loading="lazy"
          />
          <h1 className="sr-only">Kids Clothing Collection at Velnixa</h1>

        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-5 py-10 px-8 sm:px-10 md:px-16 lg:px-20'>
          {kidsData.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              aria-label={`View ${item.title} at Velnixa`}
            >
              <Cards data={item} />
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Kids
