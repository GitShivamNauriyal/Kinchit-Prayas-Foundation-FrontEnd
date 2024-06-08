import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import "../../../../css/HomeCss/home.css";

// import required modules
import {  Autoplay,Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Carsoules = (props) => {
  return (
    <>
    <Swiper
        cssMode={true}
        navigation={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      
        modules={[Autoplay,Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-slide-col">
          <div className="swiper-slide-col1">
          <img src={props.src} alt="Not loaded" />
          </div>
          <div className="swiper-slide-col2">
           <h3>JABRAC</h3>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quisquam hic libero quidem adipisci labore veritatis ad alias placeat reiciendis, sed quasi, aspernatur dignissimos! Earum incidunt tenetur itaque beatae provident.
          </p>
          </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-col">
          <div className="swiper-slide-col1">
          <img src={props.src1} alt="Not loaded" /> 
          </div>
          <div className="swiper-slide-col2">
           <h3>RAC</h3>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quisquam hic libero quidem adipisci labore veritatis ad alias placeat reiciendis, sed quasi, aspernatur dignissimos! Earum incidunt tenetur itaque beatae provident.
          </p>
          </div>
       
          </div>
          </SwiperSlide>
         
        <SwiperSlide>
        <div className="swiper-slide-col">
          <div className="swiper-slide-col1">
          <img src={props.src2} alt="Not loaded" /> 
          </div>
          <div className="swiper-slide-col2">
           <h3>JBRAC</h3>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quisquam hic libero quidem adipisci labore veritatis ad alias placeat reiciendis, sed quasi, aspernatur dignissimos! Earum incidunt tenetur itaque beatae provident.
          </p>
          </div>
          </div></SwiperSlide>
        
       
      </Swiper>
    </>
  )
}

export default Carsoules;