import React from 'react'
import StudentCentricActivities from '../../Utilities/FlagshipEventUtilities/StudentCentricActivities'
import Navbar from '../../Utilities/Common Utilities/NavbarUtilities/Navbar'
import Footer from '../../Utilities/Common Utilities/Footer';

const StudentCentricActivitiesRoute = () => {
  return (
    <div>
      <Navbar/>
      <StudentCentricActivities/>
      <Footer/>
      </div>
  )
}

export default StudentCentricActivitiesRoute