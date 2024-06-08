import React from "react";
import "../../../css/AffilationCss/Affilation.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo1 from "../../../../Image/Affilation/Logos/Affilation_Logo1.png";
import Logo2 from "../../../../Image/Affilation/Logos/Affilation_Logo2.png";
import Logo3 from "../../../../Image/Affilation/Logos/Affilation_Logo3.png";
import Logo4 from "../../../../Image/Affilation/Logos/Affilation_Logo4.png";
import Logo5 from "../../../../Image/Affilation/Logos/Affilation_Logo5.png";
import Logo6 from "../../../../Image/Affilation/Logos/Affilation_Logo6.png";
import Logo7 from "../../../../Image/Affilation/Logos/Affilation_Logo7.jpg";
import Logo8 from "../../../../Image/Affilation/Logos/Affilation_Logo8.png";
import Logo9 from "../../../../Image/Affilation/Logos/Affilation_Logo9.png";
import Logo10 from "../../../../Image/Affilation/Logos/Affilation_Logo10.png";
import Logo11 from "../../../../Image/Affilation/Logos/Affilation_Logo11.jpg";

import ParaImage1 from "../../../../Image/Affilation/Affiliation_content_image.jpg";

const Affliation = () => {
    AOS.init({ duration: 1500 });
    return (
        <div className="Affliliation-page-master">
            <div className="Affilation-Page-banner">
                <div
                    className="aff-image-overlay"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                >
                    {" "}
                    <h1> Collaborations and Partnerships</h1>
                </div>
            </div>
            <div className="content-description">
                <img src={ParaImage1} alt="not loaded" data-aos="fade-right" />
                <p className="para1" data-aos="fade-left">
                    The foundation has forged strong collaborations with
                    governmental departments and PSUs to leverage resources and
                    expertise. By aligning with Jal Jeevan Mission, Kinchit
                    Prayas Foundation ensures a synergistic approach towards
                    achieving its objectives in menstrual hygiene management and
                    water equality. Similarly the foundation has been providing
                    skill development services, promotion of handicrafts in
                    association with DC (Handicrafts), Ministry of Textiles, GoI
                    capacity building programme, water sanitation, menstrual
                    health and hygiene related awareness and IEC activities. Our
                    we are working in the field of water sanitation and other
                    vocational education training since 2017. We have been
                    working with more than 10 government departments under
                    various projects of welfare and development.
                </p>
            </div>
            <div className="Affilation-logo-banner">
                <h1 data-aos="fade-right">Our Collaboration</h1>
            </div>
            <div className="Affilation-grid">
                <div className="Affilation-grid-item" data-aos="fade-up">
                    <div className="logo-image">
                        <img src={Logo1} alt="not loaded" />
                    </div>
                    <p>Empanelled training partner</p>
                    <h3>Department of Panchayati Raj Uttarakhand</h3>
                </div>
                <div className="Affilation-grid-item" data-aos="fade-up">
                    <div className="logo-image">
                        <img src={Logo2} alt="not loaded" />
                    </div>
                    <p>Empanelled Training Partner</p>
                    <h3>Skill India</h3>
                </div>
                <div className="Affilation-grid-item" data-aos="fade-up">
                    <div className="logo-image" id="USDC-logo">
                        <img src={Logo3} alt="not loaded" />
                    </div>
                    <p>Empanelled Training Partner</p>
                    <h3>Uttarakhand Skill Development Corporation</h3>
                </div>
                <div className="Affilation-grid-item" data-aos="fade-up">
                    <div className="logo-image">
                        <img src={Logo4} alt="not loaded" />
                    </div>
                    <p>Empanelled Partner</p>
                    <h3>
                        {" "}
                        DC (Handicrafts), Ministry of Textiles, Government of
                        India
                    </h3>
                </div>
                <div className="Affilation-grid-item" data-aos="fade-up">
                    <div className="logo-image">
                        <img src={Logo5} alt="not loaded" />
                    </div>
                    <p></p>
                    <h3>National Council for Promotion of Urdu Language</h3>
                </div>
                <div className="Affilation-grid-item" data-aos="fade-up">
                    <div className="logo-image">
                        <img src={Logo6} alt="not loaded" />
                    </div>
                    <p>Implementation Support Agency</p>
                    <h3>
                        Uttarakhand Drinking Water Resource Development and
                        Construction
                    </h3>
                </div>
                <div className="Affilation-grid-item" data-aos="fade-up">
                    <div className="logo-image">
                        <img src={Logo7} alt="not loaded" />
                    </div>
                    <p>Associate Partner</p>
                    <h3>SEWA-THDC for CSR activities</h3>
                </div>
                <div className="Affilation-grid-item" data-aos="fade-up">
                    <div className="logo-image">
                        <img src={Logo8} alt="not loaded" />
                    </div>
                    <p>Empanelled Training Partner</p>
                    <h3>Uttar Pradesh Electronics Corporation Limited</h3>
                </div>
                <div
                    className="Affilation-grid-item last-grid-element-1"
                    data-aos="fade-up"
                >
                    <div className="logo-image">
                        <img src={Logo9} alt="not loaded" />
                    </div>
                    <p>Empanelled partner</p>
                    <h3> Uttarakhand Skill Development Society</h3>
                </div>
                <div
                    className="Affilation-grid-item last-grid-elements-2"
                    data-aos="fade-up"
                >
                    <div className="logo-image">
                        <img src={Logo10} alt="not loaded" />
                    </div>
                    <p>Implementation Support Agency</p>
                    <h3>Uttarakhand Pey Jal Nigam</h3>
                </div>
                <div
                    className="Affilation-grid-item last-grid-elements-3"
                    data-aos="fade-up"
                >
                    <div className="logo-image">
                        <img src={Logo11} alt="not loaded" />
                    </div>
                    <p>
                        Empanelled Partner for IGA promotion under CAT Plan
                        , Uttarakhand
                    </p>
                    <h3>Uttarakhand Forest Department</h3>
                </div>
            </div>
        </div>
    );
};

export default Affliation;
