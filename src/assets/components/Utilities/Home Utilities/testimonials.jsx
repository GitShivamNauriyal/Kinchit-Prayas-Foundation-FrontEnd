import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import covidCertificate from "../../../../Image/homepage/covid_images/covid_relief_certificate.jpg";
import "../../../css/HomeCss/testimonials.css";

// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 4.5,
//         slidesToSlide: 1, // optional, default to 1.
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 3,
//         slidesToSlide: 1, // optional, default to 1.
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 2,
//         slidesToSlide: 1, // optional, default to 1.
//     },
// };

const Testimonials = (props) => {
    AOS.init({ duration: 2000 });

    return (
        <div className="testimonial-section">
            <div className="testimonial-heading">
                <div
                    className="testimonial-heading-fade-up"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <h1>Our Testimonials</h1>
                </div>
            </div>
            <div className="testimonial-content" data-aos="fade-up">
                <div className="testimonial-carousel-section">
                    <img src={covidCertificate} alt="Covid Certificate" />
                    {/* <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        // ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1000}
                        // customTransition="all .5"
                        // transitionDuration={5000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={[
                            "desktop",
                            "tablet",
                            // "mobile",
                        ]}
                        // deviceType={this.prop.deviceType}
                        dotListClass="custom-dot-list-style"
                        // itemClass="carousel-item-padding-40-px"
                    >
                        <div className="testimonial-carousel-card">
                            <div className="testimonial-image">
                                <img
                                    className="test-front"
                                    src={props.image1}
                                    alt="Image_1 Loading..."
                                />
                                <div className="test-back">
                                    <h1>Back of Card</h1>
                                    <p>
                                        Additional info on the back of the card
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-carousel-card">
                            <div className="testimonial-image">
                                <img
                                    className="test-front"
                                    src={props.image2}
                                    alt="Image_2 Loading..."
                                />
                                <div className="test-back">
                                    <h1>Back of Card</h1>
                                    <p>
                                        Additional info on the back of the card
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-carousel-card">
                            <div className="testimonial-image">
                                <img
                                    className="test-front"
                                    src={props.image3}
                                    alt="Image_3 Loading..."
                                />
                                <div className="test-back">
                                    <h1>Back of Card</h1>
                                    <p>
                                        Additional info on the back of the card
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-carousel-card">
                            <div className="testimonial-image">
                                <img
                                    className="test-front"
                                    src={props.image4}
                                    alt="Image_4 Loading..."
                                />
                                <div className="test-back">
                                    <h1>Back of Card</h1>
                                    <p>
                                        Additional info on the back of the card
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-carousel-card">
                            <div className="testimonial-image">
                                <img
                                    className="test-front"
                                    src={props.image5}
                                    alt="Image_4 Loading..."
                                />
                                <div className="test-back">
                                    <h1>Back of Card</h1>
                                    <p>
                                        Additional info on the back of the card
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-carousel-card">
                            <div className="testimonial-image">
                                <img
                                    className="test-front"
                                    src={props.image6}
                                    alt="Image_4 Loading..."
                                />
                                <div className="test-back">
                                    <h1>Back of Card</h1>
                                    <p>
                                        Additional info on the back of the card
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Carousel> */}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
