import React, { useState } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

import SlidingLogos from "../FlagshipEventUtilities/SlidingLogos";

import ScrollTrigger from "react-scroll-trigger";

import Image1 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Development1.jpg";
import Image2 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Development2.jpg";
// import Image3 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Development3.jpg";
import Image4 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Development4.jpg";
import Image5 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Development5.jpg";
import Image6 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Development6.jpg";
import Image7 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Development7.jpg";
import Image8 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Development8.jpg";
import Image9 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Development9.jpg";
import Image10 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Development10.jpg";
import Image11 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Development11.jpg";
import Image12 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Development12.jpg";
import Image13 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Development13.jpg";
import Image14 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/banner.jpg";
import Image15 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Development14.jpg";

import "../../../css/FlagshipEventCss/UttrakhandDevelopmentExibition.css";

const UttrakhandDevelopmentExibition = () => {
    AOS.init({ duration: 1500 });

    const [CountState, setCountState] = useState(false);
    return (
        <div className="UK-Development-Exibition">
            <div className="Flagship-Page2-banner">
                <div className="image-overlay" data-aos="fade-up">
                    {" "}
                    <h1> Uttrakhand Development Exibition</h1>
                </div>
            </div>
            <div className="grid-section1">
                <div className="grid-section1-image" data-aos="fade-right">
                    <img src={Image1} alt="not loaded" />
                </div>

                <div className="grid-section1-description" data-aos="fade-left">
                    <p>
                        Kinchit Prayas Foundation, renowned for its dynamic
                        approach to organizing trade fairs and exhibitions,
                        proudly partnered with various organizations to
                        orchestrate the Uttarakhand Development Exhibition from
                        October 16th to 20th, 2023, at Doon University,
                        Dehradun.
                    </p>
                    <p>
                        Overall the event consisted of different themes for
                        different days. Smriti Vikas Sansthan in association
                        with Kinchit Prayas Foundation under the inspiration of
                        Self-reliant India campaign, organized various types of
                        public awareness programs to bring the feeling of
                        indigenousness and self-reliance in the society. A 5-day
                        Uttarakhand Development Exhibition (Indigenous
                        Exhibition) is being organized in this same series.
                    </p>
                    <p>
                        16th October 2023: Inauguration Day 17th October 2023:
                        Udyamita Vidyarthi Sammelan va Samman Samaroh 18th
                        October 2023: Udhyamita Kisaan Sammelan va Samman
                        Samaroh 19th October 2023: Udhyamita Mahila Sammelan va
                        Samman Samaroh 20th October 2023: Udhyamita Yuva
                        Sammelan va Samman Samaroh
                    </p>
                </div>
            </div>
            <div className="flex-section2">
                <div
                    className="ude-dates-container"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                >
                    <span className="date" id="date-num-1">
                        <h2>16TH</h2>
                    </span>
                    <span className="info">
                        <h2>Inaugration Day</h2>
                    </span>
                </div>
                <div
                    className="ude-dates-container"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <span className="date" id="date-num-2">
                        <h2>17TH</h2>
                    </span>
                    <span className="info">
                        <h2>UdyamitaVidyarthi Sammelan va Samman Samaroh</h2>
                    </span>
                </div>
                <div
                    className="ude-dates-container"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                >
                    <span className="date" id="date-num-3">
                        <h2>18TH</h2>
                    </span>
                    <span className="info">
                        <h2>Udyamita Kisaan Sammelan va Samman Samaroh</h2>
                    </span>
                </div>
                <div
                    className="ude-dates-container"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                >
                    <span className="date" id="date-num-4">
                        <h2>19TH</h2>
                    </span>
                    <span className="info">
                        <h2>Udyamita Mahila Sammelan va Samman Samaroh</h2>
                    </span>
                </div>
                <div
                    className="ude-dates-container"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                >
                    <span className="date" id="date-num-5">
                        <h2>20TH</h2>
                    </span>
                    <span className="info">
                        <h2>Udhyamita Yuva Sammelan va Samman Samaroh</h2>
                    </span>
                </div>
            </div>
            <div className="uk-development-grid-section2-content">
                <div className="grid-section2">
                    <div className="grid-section2-description">
                        <p data-aos="fade-right">
                            The exhibition boasted a wide array of stalls,
                            featuring everything from Himalayan spices to
                            traditional Pahadi handmade outfits, offering
                            visitors a glimpse into Uttarakhand's rich cultural
                            heritage. The presence of esteemed chief guests -
                            Shri Ganesh Joshi ji (Honorable Cabinet Minister,
                            Uttarakhand), Smt. Kusum Kandwal (Honorable
                            Chairman, Uttarakhand State Women Commission), Shri
                            K. N. Govindacharya ji (National thinker), Shri
                            Sanjay Vinayak Joshi -Former National General
                            Secretary (Organization), Dr. Durgesh Pant (Director
                            General, UCOST), Smt. Surekha Dangwal (Vice
                            Chancellor, Doon University) further elevated the
                            event, enriching the experience for all attendees.
                        </p>
                    </div>
                    <div className="grid-section2-image">
                        <img
                            src={Image2}
                            alt="not loaded"
                            data-aos="fade-left"
                        />
                    </div>
                </div>
            </div>
            <div className="countdown">
                <ScrollTrigger
                    onEnter={() => {
                        setCountState(true);
                    }}
                    onExit={() => {
                        setCountState(false);
                    }}
                >
                    <div className="parllex-banner">
                        <div className="parllex-overlay">
                            <div className="col1-description parllex-description">
                                <h2>
                                    {CountState && (
                                        <CountUp
                                            start={0}
                                            end={5}
                                            duration={3.75}
                                        />
                                    )}
                                </h2>
                                <p data-aos="fade-up" data-aos-duration="1000">
                                    Days
                                </p>
                            </div>
                            <div className="col2-description parllex-description">
                                <h2>
                                    {CountState && (
                                        <CountUp
                                            start={0}
                                            end={50}
                                            duration={2.75}
                                        />
                                    )}
                                    +
                                </h2>
                                <p data-aos="fade-up" data-aos-duration="1000">
                                    Cultural Events
                                </p>
                            </div>
                            <div className="col3-description parllex-description">
                                <h2>
                                    {CountState && (
                                        <CountUp
                                            start={0}
                                            end={100}
                                            duration={2.75}
                                        />
                                    )}
                                    +
                                </h2>
                                <p data-aos="fade-up" data-aos-duration="1000">
                                    Eductional Institute
                                </p>
                            </div>
                            <div className="col3-description parllex-description">
                                <h2>
                                    {CountState && (
                                        <CountUp
                                            start={0}
                                            end={50000}
                                            duration={1.75}
                                        />
                                    )}
                                    +
                                </h2>
                                <p data-aos="fade-up" data-aos-duration="1000">
                                    Visitors
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>

            <div className="grid-section-3">
                <div className="UDE-activities-heading">
                    <h2 data-aos="fade-right" data-aos-offset="100">
                        Activities
                    </h2>
                </div>
                <div className="UDE-grid-3col">
                    <div className="grid-content" data-aos="fade-right">
                        <img src={Image15} alt="not loaded" />
                        <p>
                            Commencement of the 5-Day event marking the everyday
                            increasing self reliance of India. Students from
                            various schools represented Uttarakhand's culture
                            through music and dance performances.
                        </p>
                    </div>
                    <div className="grid-content" data-aos="fade-up">
                        <img src={Image4} alt="not loaded" />
                        <p>
                            In collaboration with the Department of Social Work,
                            Doon University, KPF curated diverse stalls
                            showcasing products crafted from waste materials,
                            reflecting a commitment to sustainability and
                            innovation.
                        </p>
                    </div>
                    <div className="grid-content" data-aos="fade-left">
                        <img src={Image5} alt="not loaded" />
                        <p>
                            A highlight of the exhibition was the Cultural
                            Night, where students dazzled audiences with their
                            talents in dancing, singing, and playing musical
                            instruments, adding a vibrant touch to the
                            festivities.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid-section1">
                <div
                    className="grid-section3-image grid-section1-image"
                    data-aos="fade-right"
                    data-aos-offset="100"
                >
                    <img src={Image6} alt="not loaded" />
                </div>
                <div
                    className=" grid-section3-description grid-section1-description"
                    data-aos="fade-left"
                >
                    <p data-aos-offset="100">
                        With a lineup of events including the Inauguration Day
                        and conferences focusing on students, farmers, women,
                        and youth, the Uttarakhand Development Exhibition series
                        served as a platform for empowerment, innovation, and
                        community engagement. Overall, the exhibition series
                        exemplified a commitment to promoting local talent,
                        entrepreneurship, and sustainable development, leaving a
                        lasting impact on Uttarakhand's social and economic
                        landscape.
                    </p>
                </div>
            </div>
            <SlidingLogos />
            <div className="UDE-glance">
                <h2 data-aos="fade-right" data-aos-offset="100">
                    GLIMPSE
                </h2>
                <div className="grid-glance">
                    <img src={Image7} alt="not loaded" data-aos="fade-left" />
                    <img src={Image8} alt="not loaded" data-aos="fade-left" />
                    <img src={Image9} alt="not loaded" data-aos="fade-left" />
                    <img
                        src={Image10}
                        alt="not loaded"
                        data-aos="fade-right"
                        data-aos-offset="100"
                    />
                    <img
                        src={Image11}
                        alt="not loaded"
                        data-aos="fade-right"
                        data-aos-offset="100"
                    />
                    <img
                        src={Image12}
                        alt="not loaded"
                        data-aos="fade-right"
                        data-aos-offset="100"
                    />
                    <img src={Image13} alt="not loaded" data-aos="fade-left" />
                    <img src={Image14} alt="not loaded" data-aos="fade-left" />
                    <img src={Image5} alt="not loaded" data-aos="fade-left" />
                </div>
            </div>
        </div>
    );
};

export default UttrakhandDevelopmentExibition;
