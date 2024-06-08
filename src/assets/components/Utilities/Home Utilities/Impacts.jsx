import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
// import "../../../css/HomeCss/Impacts.css";
import classes from "../../../css/HomeCss/Impacts.module.css";

import map from "../../../../Image/homepage/map/Impact_map.png";

const Impacts = () => {
    AOS.init({ duration: 1500 });
    const [CountState, setCountState] = useState(false);
    return (
        <section className={classes.impactsSection}>
            <div className={classes.impactsGrid}>
                <div className={classes.impactsContent}>
                    <div data-aos="fade-right">
                        <h1 className={classes.impactsContentHeading}>
                            Our Impacts
                        </h1>
                    </div>
                    <ScrollTrigger
                        onEnter={() => {
                            setCountState(true);
                        }}
                        onExit={() => {
                            setCountState(false);
                        }}
                    >
                        <ul className={classes.impactList}>
                            <li className={classes.impactItem}>
                                <div data-aos="fade-right">
                                    CITIES AND TOWNS:{" "}
                                </div>
                                <div
                                    className={classes.impactNumber}
                                    data-aos="fade-left"
                                    data-aos-duration="2000"
                                >
                                    <p>
                                        {" "}
                                        {CountState && (
                                            <CountUp
                                                start={0}
                                                end={40}
                                                duration={3.55}
                                            />
                                        )}
                                        +
                                    </p>
                                </div>
                            </li>
                            <li className={classes.impactItem}>
                                <div data-aos="fade-right">BENEFICIARIES: </div>
                                <div
                                    className={classes.impactNumber}
                                    data-aos="fade-left"
                                    data-aos-duration="2000"
                                >
                                    <p>
                                        {CountState && (
                                            <CountUp
                                                start={0}
                                                end={40000}
                                                duration={2.8}
                                            />
                                        )}
                                        +
                                    </p>
                                </div>
                            </li>
                            <li className={classes.impactItem}>
                                <div data-aos="fade-right">DISTRICTS: </div>
                                <div
                                    className={classes.impactNumber}
                                    data-aos="fade-left"
                                    data-aos-duration="2000"
                                >
                                    <p>
                                        {CountState && (
                                            <CountUp
                                                start={0}
                                                end={20}
                                                duration={4.5}
                                            />
                                        )}
                                        +
                                    </p>
                                </div>
                            </li>
                            <li className={classes.impactItem}>
                                <div data-aos="fade-right">
                                    SHG MARKET LINKED:{" "}
                                </div>
                                <div
                                    className={classes.impactNumber}
                                    data-aos="fade-left"
                                    data-aos-duration="2000"
                                >
                                    <p>
                                        {CountState && (
                                            <CountUp
                                                start={0}
                                                end={175}
                                                duration={3.5}
                                            />
                                        )}
                                        +
                                    </p>
                                </div>
                            </li>
                            <li className={classes.impactItem}>
                                <div data-aos="fade-right">
                                    SECTOR ENABLERS TRAINED:{" "}
                                </div>
                                <div
                                    className={classes.impactNumber}
                                    data-aos="fade-left"
                                    data-aos-duration="2000"
                                >
                                    <p>
                                        {CountState && (
                                            <CountUp
                                                start={0}
                                                end={1000}
                                                duration={2.8}
                                            />
                                        )}
                                        +
                                    </p>
                                </div>
                            </li>
                            <li className={classes.impactItem}>
                                <div data-aos="fade-right">
                                    EXHIBITIONS/FAIRS:{" "}
                                </div>
                                <div
                                    className={classes.impactNumber}
                                    data-aos="fade-left"
                                    data-aos-duration="2000"
                                >
                                    <p>
                                        {CountState && (
                                            <CountUp
                                                start={0}
                                                end={10}
                                                duration={4.5}
                                            />
                                        )}
                                        +
                                    </p>
                                </div>
                            </li>
                            <li className={classes.impactItem}>
                                <div data-aos="fade-right">
                                    ARTISANS BENIFITTED:{" "}
                                </div>
                                <div
                                    className={classes.impactNumber}
                                    data-aos="fade-left"
                                    data-aos-duration="2000"
                                >
                                    <p>
                                        {CountState && (
                                            <CountUp
                                                start={0}
                                                end={600}
                                                duration={3.5}
                                            />
                                        )}
                                        +
                                    </p>
                                </div>
                            </li>
                            <li className={classes.impactItem}>
                                <div data-aos="fade-right">
                                    PARTNERS AND ASSOCIATIONS:{" "}
                                </div>
                                <div
                                    className={classes.impactNumber}
                                    data-aos="fade-left"
                                    data-aos-duration="2000"
                                >
                                    <p>
                                        {CountState && (
                                            <CountUp
                                                start={0}
                                                end={10}
                                                duration={4.5}
                                            />
                                        )}
                                        +
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </ScrollTrigger>
                </div>
                <div className={classes.mapContainer} data-aos="fade-left">
                    {/* <div className="map">
                        <script
                            type="text/javascript"
                            defer
                            src="https://datawrapper.dwcdn.net/ruD1G/embed.js?v=3"
                            // charset="utf-8"
                        ></script>
                        <noscript>
                            <img
                                src="https://datawrapper.dwcdn.net/ruD1G/full.png"
                                alt=""
                            />
                        </noscript>
                    </div> */}
                    <div className={classes.map}>
                        <img src={map} alt="map not loaded" />
                    </div>
                </div>
            </div>
            <div className={classes.customshapedividerbottom1715599793}>
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                        className={classes.shapeFill}
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default Impacts;
