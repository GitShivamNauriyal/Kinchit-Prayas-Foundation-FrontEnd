import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import covidImage from "../../../../Image/homepage/covid_images/Covid_Image.jpg";
// /images/covid_relief_certificate.jpg";
import "../../../css/HomeCss/covid_19_relief.css";

const CovidRelief = () => {
    AOS.init({ duration: 1500 });

    return (
        <div className="covid-relief-section">
            <div className="custom-shape-divider-top-1715593959">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>
            <div className="covid-relief-heading" data-aos="fade-up">
                <h1>COVID-19 RELIEF WORKS</h1>
            </div>
            <div className="covid-relief-content">
                <div className="covid-relief-certificate">
                    <img
                        src={covidImage}
                        alt="Covid Relief Certificate"
                    />
                </div>
                <div className="covid-relief-text-content">
                    <p>
                        Virus and this pandemic stopped almost everything but
                        not the act of kindness or humanity. We provided relief
                        support to various frontline workers and marginalised
                        section. Our relief works ranged from providing oxygen
                        cylinders to distribution of mask and sanitizers and
                        gloves to common men and frontline workers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CovidRelief;
