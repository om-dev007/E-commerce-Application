import { useRef } from "react";
import useScrollReveal from "../utils/useScrollReveal";

import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Popular from "./Popular";
import OfferPage from "./OfferPage";
import NewCollection from "./NewCollection";
import FooterGreets from "./FooterGreets";
import Footer from "../components/Footer";

const Home = () => {
  const popularRef = useRef(null);
  const offerRef = useRef(null);
  const collectionRef = useRef(null);
  const footerGreetRef = useRef(null)

  useScrollReveal(popularRef);
  useScrollReveal(offerRef);
  useScrollReveal(collectionRef);
  useScrollReveal(footerGreetRef)

  return (
    <>
      <Navbar />
      <Hero />

      <section ref={popularRef}>
        <Popular />
      </section>

      <section ref={offerRef}>
        <OfferPage />
      </section>

      <section ref={collectionRef}>
        <NewCollection />
      </section>

      <section ref={footerGreetRef}>
        <FooterGreets />
      </section>
        <Footer />
      
    </>
  );
};

export default Home;
