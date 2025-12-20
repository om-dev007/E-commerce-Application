import React from 'react'
import Navbar from '../components/Navbar'
import Popular from './Popular'
import OfferPage from './OfferPage'
import NewCollection from './NewCollection'
import Hero from './Hero'
import FooterGreets from './FooterGreets'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Popular/>
      <OfferPage/>
      <NewCollection/>
      <FooterGreets/>
      <Footer/>
    </>
  )
}

export default Home