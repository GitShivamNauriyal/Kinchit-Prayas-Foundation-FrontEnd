import React from "react";
import "../../../css/FlagshipEventCss/EarthDay.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image4 from "../../../../Image/Flagship/EarthDay/earth3.jpg";
import Image5 from "../../../../Image/Flagship/EarthDay/earth1.jpg";
import Image7 from "../../../../Image/Flagship/EarthDay/earth8.jpg";
import Image8 from "../../../../Image/Flagship/EarthDay/earth5.jpg";
import Image9 from "../../../../Image/Flagship/EarthDay/earth9.jpg";
import Image10 from "../../../../Image/Flagship/EarthDay/earth4.jpg";
import Image11 from "../../../../Image/Flagship/EarthDay/earth6.jpg";
import Image13 from "../../../../Image/Flagship/EarthDay/earth13.jpg";
import Image14 from "../../../../Image/Flagship/EarthDay/earth14.jpg";
import Image15 from "../../../../Image/Flagship/EarthDay/earth15.jpg";
import Image16 from "../../../../Image/Flagship/EarthDay/earth16.jpg";
import Image17 from "../../../../Image/Flagship/EarthDay/earth17.jpg";
import Image18 from "../../../../Image/Flagship/EarthDay/earth18.jpg";

const EarthDay = () => {
    AOS.init({ duration: 1500 });
    return (
        <div className="earth-day-page-master">
            <div className="Flagship-Page4-banner">
                <div
                    className="Page4-image-overlay"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                >
                    <h1>Every Day Is Earth Day!!</h1>
                    <p>
                        Come on fast! We must protect our mother Earth.At
                        Kinchit Prayas, we are dedicated towards{" "}
                    </p>
                    <p>
                        working to protect our environment through sustainable
                        practices.
                    </p>
                </div>
            </div>

            <div className="Flagship-page4-section1" data-aos="fade-right">
                <div className="description">
                    <p>
                        Kinchit Prayas Foundation, committed to fostering
                        environmental stewardship, organizes Earth Day
                        celebrations across various educational institutions,
                        including child reform centers and universities every
                        year. The aim is to instill a sense of responsibility
                        towards environmental conservation among students and
                        children.
                    </p>
                    <p>
                        In the past we have collaborated with local
                        environmental organizations to leverage expertise and
                        resources, maximizing the impact of the Earth Day
                        celebrations. Faculty members and student volunteers
                        from participating institutions played crucial roles in
                        organizing and facilitating the activities and we also
                        look forward to make a sustainable impact in this field.
                    </p>
                </div>
                <div className="Flagship-page4-section1-image">
                    <img src={Image13} alt="not loaded" data-aos="fade-left" />
                </div>
            </div>
            <div className="Flagship-page4-section2">
                <h2>Child Reform Centre / Naari Niketan </h2>
                <div
                    className="grid-3col"
                    // data-aos="fade-up"
                    // data-aos-duration="3000"
                >
                    <div className="grid-content">
                        <img src={Image14} alt="not loaded" />
                        <div className="grid-description">
                            <h3>Tree Planting</h3>
                            <p>
                                Engaging children in planting saplings to
                                nurture a connection with nature.
                            </p>
                        </div>
                    </div>
                    <div className="grid-content">
                        <img src={Image5} alt="not loaded" />
                        <div className="grid-description">
                            <h3>Environmental Education Sessions</h3>
                            <p>
                                Conducting interactive sessions to educate
                                children on the importance of recycling, energy
                                conservation, and waste reduction
                            </p>
                        </div>
                    </div>
                    <div className="grid-content">
                        <img src={Image8} alt="not loaded" />
                        <div className="grid-description">
                            <h3>Art And Craft Workshops</h3>
                            <p>
                                Encourage creativity by crafting eco-friendly
                                artworks using recyclable materials.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Flagship-page4-section3">
                <h2 data-aos="fade-left" data-aos-duration="2000">
                    Universities
                </h2>
                <div
                    className="grid-3col"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                >
                    <div className="grid-content">
                        <img src={Image9} alt="not loaded" />
                        <div className="grid-description">
                            <h3>Panel Discussions</h3>
                            <p>
                                Inviting experts and environmentalists to
                                discuss pressing environmental issues and
                                potential solutions, fostering critical thinking
                                and awareness.
                            </p>
                        </div>
                    </div>
                    <div className="grid-content">
                        <img src={Image15} alt="not loaded" />
                        <div className="grid-description">
                            <h3>Tree Plantation Drives</h3>
                            <p>
                                Organizes tree planting activities on campus
                                premises, promoting green spaces and carbon
                                sequestration.
                            </p>
                        </div>
                    </div>
                    <div className=" grid-content ">
                        <img src={Image4} alt="not loaded" />
                        <div className="grid-description">
                            <h3>Workshops on Sustainable Living</h3>
                            <p>
                                Educate students about practical sustainability
                                practices such as composting, water
                                conservation, and renewable energy adoption.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Flagship-page4-lastSection">
                <div className="custom-shape-divider-top-1715535169">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M1200 0L0 0 598.97 114.72 1200 0z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
                <h2 data-aos="fade-left" data-aos-duration="2000">
                    A Quick Glance
                </h2>
                <div
                    className="grid-glance grid-gallery "
                    data-aos="fade-up"
                    data-aos-duration="2500"
                >
                    <img src={Image16} alt="not loaded" />
                    <img src={Image17} alt="not loaded" />
                    <img src={Image18} alt="not loaded" />
                    <img src={Image11} alt="not loaded" />
                    <img src={Image7} alt="not loaded" />
                    <img src={Image10} alt="not loaded" />
                </div>
            </div>
        </div>
    );
};

export default EarthDay;
