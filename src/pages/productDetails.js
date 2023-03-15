import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import NavBar from '../components/Nav-bar/Nav-Bar';
import Footer from '../components/Footer/Footer';
import ServicesDetails from '../components/ServicesDetails/ServicesDetails';
import HardWare from '../components/HardWare/HardWare';
import ProductDetailsSection from '../components/ProductDetails/ProductDetailsSection';

export default function ProductDetails(props) {
    const location = useLocation();
    const path = location.pathname
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <div>
        <NavBar />
        <ProductDetailsSection props={props} />
        <Footer />
    </div>
  )
}
