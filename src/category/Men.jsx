import React from 'react'
import { Helmet } from "react-helmet-async";
import Navbar from '../components/Navbar'
import menHero from '../assets/menHero.jpg'
import { menData } from '../store/data'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Men = () => {
  return (
    <>

      <Helmet>
        <title>Men Clothing Collection | Oversized T-Shirts for Men | Velnixa</title>

        <meta
          name="description"
          content="Shop premium men clothing at Velnixa. Explore oversized t-shirts, trendy fits & high-quality fabric with fast delivery across India."
        />

        <link
          rel="canonical"
          href="https://velnixa.vercel.app/mens"
        />

        <meta property="og:title" content="Men Clothing Collection | Velnixa" />
        <meta
          property="og:description"
          content="Discover premium oversized t-shirts and men fashion at Velnixa."
        />
        <meta property="og:url" content="https://velnixa.vercel.app/mens" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <div className="bg-[#FAF8F5] py-2 flex justify-center px-4 md:px-10">
        <img
          className="w-full sm:w-[85%] rounded-2xl h-[30vh] sm:h-[70vh] shadow-sm object-cover"
          src={menHero}
          alt="Men fashion collection - oversized t-shirts at Velnixa"
          loading="lazy"
        />
      </div>

      <div className="bg-[#FAF8F5] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                      gap-x-5 gap-y-6 py-10 px-6 sm:px-10 md:px-16 lg:px-20">

        <h1 className="sr-only">Men Clothing Collection at Velnixa</h1>

        {menData.map((items) => (
          <Link
            to={`/product/${items.id}`}
            key={items.id}
            aria-label={`View ${items.title} - Men clothing at Velnixa`}
          >
            <Cards data={items} />
          </Link>
        ))}
      </div>

      <Footer />
    </>
  )
}

export default Men
