import React from 'react'
import Navbar from "../../Utilities/Common Utilities/NavbarUtilities/Navbar";
import WashSector from '../../Utilities/WorkDone/WashSector/WashSector';
import Footer from '../../Utilities/Common Utilities/Footer';

const WashSectorRoute = () => {
  return (
    <div>
        <Navbar/>
         <WashSector/>
         <Footer/>
    </div>
  )
}

export default WashSectorRoute