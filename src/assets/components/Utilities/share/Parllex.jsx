import React, { useState } from 'react'
import "../../../css/sharecss/Parllex.css"
import CountUp from "react-countup"
import ScrollTrigger from 'react-scroll-trigger'
const Parllex = () => {
    const [CountState,setCountState]= useState(true);
  return (
    <>
    <ScrollTrigger onEnter={()=>{setCountState(true)}} onExit={()=>{setCountState(false)}}>
    <div className="parllex-banner">
    <div className="parllex-overlay">
      <div className="col1-description parllex-description"><h2>{CountState &&<CountUp start={0} end={105} duration={2.75}/>}</h2><p>Goals</p></div>
      <div className="col2-description parllex-description"><h2>{CountState &&<CountUp start={0} end={105} duration={2.75}/>}</h2><p>Goals</p></div>
      <div className="col3-description parllex-description"><h2>{CountState &&<CountUp start={0} end={105} duration={2.75}/>}</h2><p>Goals</p></div>
    </div>
   </div>
    </ScrollTrigger>
    
    </>
  )
}

export default Parllex