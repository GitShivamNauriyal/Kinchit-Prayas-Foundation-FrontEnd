import React from "react";
import "../../../../css/WorkDoneCss/CSR.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../../../../../Image/Affilation/Logos/Affilation_Logo7.jpg";
import Image from "../../../../../Image/CSR/CSR_banner.jpg";
import Image1 from "../../../../../Image/CSR/CSR_Image.jpg";
import Image3 from "../../../../../Image/CSR/CRS_Image2.jpg";
import Image4 from "../../../../../Image/CSR/CRS_Image3.jpg";
import Image5 from "../../../../../Image/CSR/CRS_Image4.jpg";

const CSR = () => {
    AOS.init({ duration: 1500 });
    return (
        <div className="CSR-page-master">
            <div className="CSR-Page-banner">
                <div
                    className="image-overlay"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    {" "}
                    <h1> Corporate Social Responsibility</h1>
                </div>
            </div>

            <div className="CRS-content-1-wrapper">
                <div className="CRS-image" data-aos="fade-right">
                    <img src={Image1} alt="not loaded" />
                </div>
                <div className="description" data-aos="fade-left">
                    <h2>CSR ACTIVITIES</h2>
                    <p>
                        CSR activities are voluntary efforts taken by companies
                        to improve the lives of people and communities and to
                        promote sustainable development. This can include
                        initiatives such as reducing the carbon footprint of
                        operations, supporting local communities, and promoting
                        gender equality.Corporate Social Responsibility (CSR),
                        in transition from being merely compliance-driven to
                        being impact-informed and strategic, now requires firms
                        to care about the nature and quality of their social
                        impact. Some firms have the bandwidth- personnel and
                        financial- to meet compliance requirements and ensure
                        the nature and quality of their social change efforts.
                    </p>
                </div>
            </div>

            <div className="grid-Image-wrapper">
                <img
                    src={Image5}
                    alt="not loaded"
                    className="grid-element-image"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                />
                <img
                    src={Image}
                    alt="not loaded"
                    className="grid-element-image"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    data-aos-offset="200"
                />
                <img
                    src={Image3}
                    alt="not loaded"
                    className="grid-element-image"
                    data-aos="fade-down"
                    data-aos-duration="2500"
                    data-aos-offset="220"
                />
                <img
                    src={Image4}
                    alt="not loaded"
                    className="grid-element-image"
                    data-aos="fade-down"
                    data-aos-duration="3000"
                    data-aos-offset="250"
                />
            </div>

            <div className="SEWA-wrapper">
                <div className="SEWA-Logo" data-aos="fade-right">
                    <img src={Logo} alt="Not loaded" />
                    <h2>SEWA-THDC</h2>
                </div>
                <div className="SEWA-description" data-aos="fade-up">
                    <p className="para1">
                        SEWA-THDC, an initiative supported by Tehri Hydro
                        Development Corporation (THDC), is a beacon of technical
                        education in the picturesque region of Uttarakhand,
                        India. Our institution is dedicated to empowering young
                        minds with specialized technical skills and
                        knowledge.Through our comprehensive curriculum and
                        state-of-the-art facilities, we strive to nurture the
                        next generation of innovators and problem solvers.
                    </p>
                    <p className="para2">
                        {" "}
                        Along with Sewa THDC, we believe in equipping students
                        with the tools they need to succeed in a rapidly
                        evolving world, while instilling values of integrity,
                        compassion, and service to society.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CSR;
