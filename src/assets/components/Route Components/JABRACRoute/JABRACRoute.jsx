import React from 'react'
import Navbar from '../../Utilities/Common Utilities/NavbarUtilities/Navbar'
import JABRAC from '../../Utilities/JABRACUtilities/JABRAC'
import Footer from '../../Utilities/Common Utilities/Footer';

const JABRACRoute = () => {
  return (
    <div>
         <Navbar/>
         <JABRAC/>
         <Footer/>
    </div>
  )
}

export default JABRACRoute