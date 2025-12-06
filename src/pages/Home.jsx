import React from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Product from './Product'
import Popular from './Popular'
import OfferPage from './OfferPage'
import NewCollection from './NewCollection'
import Hero from './Hero'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Popular/>
      <OfferPage/>
      <NewCollection/>
    </>
  )
}

export default Home