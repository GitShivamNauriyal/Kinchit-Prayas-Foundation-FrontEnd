import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../../css/FlagshipEventCss/SlidingPicture.css";

const SlidingPicture = (props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={false}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
                partialVisible={true}
            >
                <div className="SlidingCard-container-wrapper">
                    <div className="Sliding-Card">
                        <img src={props.src1} alt="not loaded" />
                    </div>
                </div>
                <div className="SlidingCard-container-wrapper">
                    <div className="Sliding-Card">
                        <img src={props.src2} alt="not loaded" />
                    </div>
                </div>
                <div className="SlidingCard-container-wrapper">
                    <div className="Sliding-Card">
                        <img src={props.src3} alt="not loaded" />
                    </div>
                </div>
                {props.src4 && (
                    <div className="SlidingCard-container-wrapper">
                        <div className="Sliding-Card">
                            <img src={props.src4} alt="not loaded" />
                        </div>
                    </div>
                )}
                {props.src5 && (
                    <div className="SlidingCard-container-wrapper">
                        <div className="Sliding-Card">
                            <img src={props.src5} alt="not loaded" />
                        </div>
                    </div>
                )}
                {props.src6 && (
                    <div className="SlidingCard-container-wrapper">
                        <div className="Sliding-Card">
                            <img src={props.src6} alt="not loaded" />
                        </div>
                    </div>
                )}
                {props.src7 && (
                    <div className="SlidingCard-container-wrapper">
                        <div className="Sliding-Card">
                            <img src={props.src7} alt="not loaded" />
                        </div>
                    </div>
                )}
            </Carousel>
        </>
    );
};

export default SlidingPicture;
