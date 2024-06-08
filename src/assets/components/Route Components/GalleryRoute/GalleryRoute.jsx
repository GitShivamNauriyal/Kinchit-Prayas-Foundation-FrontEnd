import React from 'react'
import Gallery from "../../Utilities/GalleryUtilities/Gallery";
import Navbar from "../../Utilities/Common Utilities/NavbarUtilities/Navbar";
import Footer from '../../Utilities/Common Utilities/Footer';

const GalleryRoute = () => {
  return (
    <div>
        <Navbar/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default GalleryRoute