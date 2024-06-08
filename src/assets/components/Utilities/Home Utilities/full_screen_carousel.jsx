import React from "react";
import Carousel from "react-multi-carousel";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "react-multi-carousel/lib/styles.css";
import "../../../css/HomeCss/full_screen_carousel.css";

/*
import image1 from "../../assets/images/IMG-20231227-WA0044.jpg";
import image2 from "../../assets/images/IMG_20220124_113939_1.jpg";
import image3 from "../../assets/images/IMG_20211006_170930.jpg";
import image4 from "../../assets/images/IMG_20211006_171009.jpg";
/**/

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};
const FullscreenCarousel = (props) => {
    const [typeEffect] = useTypewriter({
        words: ["SUSTAINABLE", "BIG", "GENERATIONAL", "UNCEASING"],
        loop: {},
        typeSpeed: 160,
        deleteSpeed: 90,
    });
    return (
        <div className="fs-carousel-section">
            <div className="fs-carousel-overlay">
                <h1>
                    SMALL STEPS,
                    <div className="fs-carousel-overlay-dynamic">
                        <span>{typeEffect}</span>
                        <Cursor />
                        <span> </span>
                        IMPACTS
                    </div>
                </h1>
            </div>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                // autoPlay={this.prop.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={5 * 1000}
                // customTransition="all .5"
                // transitionDuration={5000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["mobile"]}
                // deviceType={this.prop.deviceType}
                dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
            >
                <div className="fs-carousel-image">
                    <img src={props.image1} alt="Image_1 Loading..." />
                </div>
                <div className="fs-carousel-image">
                    <img src={props.image2} alt="Image_2 Loading..." />
                </div>
                <div className="fs-carousel-image">
                    <img src={props.image3} alt="Image_3 Loading..." />
                </div>
                <div className="fs-carousel-image">
                    <img src={props.image4} alt="Image_4 Loading..." />
                </div>
            </Carousel>
            ;
        </div>
    );
};

export default FullscreenCarousel;
