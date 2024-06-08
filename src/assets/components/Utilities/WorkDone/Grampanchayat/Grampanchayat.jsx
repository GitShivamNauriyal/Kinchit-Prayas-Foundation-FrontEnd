import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../../css/WorkDoneCss/grampanchayat.css";

import gp_image1 from "../../../../../Image/grampanchayat/scroller_image_1.jpg";
import gp_image2 from "../../../../../Image/grampanchayat/scroller_image_2.jpg";
import gp_image3 from "../../../../../Image/grampanchayat/scroller_image_3.jpg";
import gp_image4 from "../../../../../Image/grampanchayat/scroller_image_4.jpg";
import gp_image5 from "../../../../../Image/grampanchayat/scroller_image_5.jpg";
import gp_image6 from "../../../../../Image/grampanchayat/scroller_image_6.jpg";
import gp_image7 from "../../../../../Image/grampanchayat/scroller_image_7.jpg";
import gp_image8 from "../../../../../Image/grampanchayat/scroller_image_8.jpg";
import gp_image9 from "../../../../../Image/grampanchayat/scroller_image_9.jpg";
import gp_image10 from "../../../../../Image/grampanchayat/scroller_image_10.jpg";
import gp_image11 from "../../../../../Image/grampanchayat/scroller_image_11.jpg";
import gp_image12 from "../../../../../Image/grampanchayat/scroller_image_12.jpg";

import gp_aff_image1 from "../../../../../Image/grampanchayat/aff_logo_1.jpg";
import gp_aff_image2 from "../../../../../Image/grampanchayat/aff_logo_2.jpg";

const Grampanchayat = () => {
    AOS.init({ duration: 2000 });

    /**/
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller_1");

        // Check if the user has opted for reduced motion
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            // Loop through each scroller element
            scrollers.forEach((scroller_1) => {
                // Set data-animated attribute to true
                scroller_1.setAttribute("data-animated", true);

                // Get the inner content of the scroller
                const scrollerInner =
                    scroller_1.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                // Clone each item and append it to the end
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true); // Add aria-hidden attribute
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []); // Empty dependency array ensures useEffect runs only once after initial render
    /**/
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller_2");

        // Check if the user has opted for reduced motion
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            // Loop through each scroller element
            scrollers.forEach((scroller_2) => {
                // Set data-animated attribute to true
                scroller_2.setAttribute("data-animated", true);

                // Get the inner content of the scroller
                const scrollerInner =
                    scroller_2.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                // Clone each item and append it to the end
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true); // Add aria-hidden attribute
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []); // Empty dependency array ensures useEffect runs only once after initial render
    /**/
    return (
        <div className="grampanchayat-page-master">
            <div
                className="gp-heading"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
            >
                <div className="image-overlay">
                    <h1>Gram Panchayat Development Plan and SDGs</h1>
                </div>
            </div>
            <div className="gp-content">
                <div className="gp-description-container">
                    <div
                        className="scroller_1"
                        data-animated="true"
                        data-aos="fade-right"
                    >
                        <div className="gp-tag-list scroller__inner">
                            <li>
                                <div className="gp-scroller-item">
                                    <img src={gp_image1} alt="failed to load" />
                                </div>
                            </li>
                            <li>
                                {" "}
                                <div className="gp-scroller-item">
                                    <img src={gp_image2} alt="failed to load" />
                                </div>
                            </li>
                            <li>
                                <div className="gp-scroller-item">
                                    <img src={gp_image3} alt="failed to load" />
                                </div>
                            </li>
                            <li>
                                <div className="gp-scroller-item">
                                    <img src={gp_image4} alt="failed to load" />
                                </div>
                            </li>
                            <li>
                                <div className="gp-scroller-item">
                                    <img src={gp_image5} alt="failed to load" />
                                </div>
                            </li>
                            <li>
                                <div className="gp-scroller-item">
                                    <img src={gp_image6} alt="failed to load" />
                                </div>
                            </li>
                        </div>
                    </div>
                    <div className="gp-description" data-aos="fade-left">
                        <p>
                            The focus of Revamped scheme is on re-imagining
                            Panchayati Raj Institutions as vibrant center's of
                            local self-governance and economic growth with
                            special focus on localization of Sustainable
                            Development Goals (SDGs) at grassroot level adopting
                            thematic approach through concerted and
                            collaborative efforts of Central Ministries and
                            State line departments with 'whole of Government'
                            approach at all levels.
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="scroller_2"
                data-animated="true"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
            >
                <div className="gp-tag-list scroller__inner">
                    <li>
                        <div className="gp-scroller-item">
                            <img src={gp_image7} alt="failed to load" />
                        </div>
                    </li>
                    <li>
                        {" "}
                        <div className="gp-scroller-item">
                            <img src={gp_image8} alt="failed to load" />
                        </div>
                    </li>
                    <li>
                        <div className="gp-scroller-item">
                            <img src={gp_image9} alt="failed to load" />
                        </div>
                    </li>
                    <li>
                        <div className="gp-scroller-item">
                            <img src={gp_image10} alt="failed to load" />
                        </div>
                    </li>
                    <li>
                        <div className="gp-scroller-item">
                            <img src={gp_image11} alt="failed to load" />
                        </div>
                    </li>
                    <li>
                        <div className="gp-scroller-item">
                            <img src={gp_image12} alt="failed to load" />
                        </div>
                    </li>
                </div>
            </div>
            <div className="gp-what-we-do">
                <div className="custom-shape-divider-top-1715780653">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
                <div
                    className="gp-what-we-do-text-container"
                    data-aos="fade-up"
                >
                    <h1>What do we do?</h1>
                    <div className="gp-what-we-do-para-content">
                        <p>
                            Kinchit Prayas Foundation was assigned as the
                            implementation and training partner under RGSA by
                            Department of Panchayati Raj, Uttarakhand for
                            capacity building and handholding support to
                            Panchayati Raj Institutions and Frontline Workers of
                            Dehradun District, Uttarakhand, India.
                        </p>
                        <p>
                            The Master Trainers associated with Kinchit Prayas
                            Foundation provided training for SDG based planning,
                            localization and disaster management plan to 800
                            Panchayati Raj Representatives, local communities,
                            frontline workers and line department officials of
                            Dehradun, Uttarakhand, India.
                        </p>
                    </div>
                </div>
            </div>
            <div className="gp-assists">
                <div className="gp-assists-heading">
                    <h1>We assist in:</h1>
                </div>
                <div className="gp-assists-content">
                    <div className="gp-assists-sections section-1">
                        <div
                            className="gp-assists-para"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <p>
                                Providing the handholding support and micro
                                planning for three Gram Panchayats of Dehradun
                                District under RGSA.
                            </p>
                        </div>
                    </div>
                    <div className="gp-assists-sections section-2">
                        <div
                            className="gp-assists-para"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <p>
                                Implementation of GPDP planning with the basic
                                understanding of 17 Sustainable development
                                Goals and 9 themes.
                            </p>
                        </div>
                    </div>
                    <div className="gp-assists-sections section-3">
                        <div
                            className="gp-assists-para"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <p>
                                Environment building and Mobilization
                                activities.
                            </p>
                        </div>
                    </div>
                    <div className="gp-assists-sections section-4">
                        <div
                            className="gp-assists-para"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <p>
                                Documentation and reporting of project related
                                activities and uploading of GPDP on e-GramSwaraj
                                portal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gp-impact-section">
                <h2 id="gp-impact-heading" data-aos="fade-up">
                    Impacts and Interventions
                </h2>
                <ul data-aos="fade-left">
                    <li>
                        Kinchit Prayas Foundation provided training for
                        SDG-based planning, localization, and disaster
                        management plans to 1000+ Panchayati Raj
                        Representatives, local communities, frontline workers,
                        and line department officials of Dehradun, Uttarakhand.
                    </li>
                    <li>10 Gram Panchayats</li>
                    <ul data-aos="fade-left">
                        <li>
                            Handholding support and micro planning for Gram
                            Panchayats of Dehradun District under RGSA
                        </li>
                        <li>Promotion of 17 SDGs and 9 themes</li>
                        <li>
                            Convergence of Flagship schemes of 17 line
                            department streamlining SDG based thematic planning
                        </li>
                    </ul>
                </ul>

                <h2 data-aos="fade-left">To Ensure:</h2>
                <ul data-aos="fade-left">
                    <li>
                        Basic orientation training for the Elected
                        Representatives (ERs) of Panchayats, within 6 months of
                        their election.
                    </li>
                    <li>Refresher trainings to be ensured within 2 years.</li>
                    <li>
                        Capacity Building of ERs with Priority to Aspirational
                        Districts and Mission Antyodaya clusters.
                    </li>
                    <li>Strengthening of the Panchayat - SHG partnership</li>
                </ul>

                <h2 data-aos="fade-left">To Bridge Gaps In:</h2>
                <ul data-aos="fade-left">
                    <li>Capacity Building and Training (CB&T)</li>
                    <li>Gram Panchayat infrastructure</li>
                    <li>
                        Use of IT for distance learning & for e-Enablement of
                        Panchayats
                    </li>
                    <li>Institutional support for innovations</li>
                    <li>
                        Gap filling support of economic development & income
                        enhancement.
                    </li>
                    <li>
                        Technical support including Human Resource (HR) based on
                        identified gaps.
                    </li>
                    <li>
                        To provide handholding support by Academic Institutions/
                        Institutions of excellence to GPs for Gram Panchayat
                        Development Plan (GPDP) formulation.
                    </li>
                    <li>
                        To promote provision of adequate manpower at GP level &
                        to provide support for technical manpower.
                    </li>
                    <li>
                        To support greater e-enablement of Panchayats for
                        e-governance to enhance efficiency and transparency with
                        thrust on Panchayat Enterprise Suite (PES) Applications
                        developed by the Ministry.
                    </li>
                    <li>
                        To facilitate Electronic Fund Transfer (EFT), Public
                        Finance Management System (PFMS), use and Geotagging of
                        assets in Gram Panchayats.
                    </li>
                </ul>
            </div>
            <div className="gp-affiliations">
                <div className="gp-affiliations-heading" data-aos="fade-up">
                    <h1>AFFILIATIONS AND COLLABORATIONS</h1>
                </div>
                <div className="gp-affiliations-logos-container">
                    <div
                        className="gp-affiliations-logo"
                        data-aos="fade-up"
                        data-aos-duration="2500"
                    >
                        <img
                            src={gp_aff_image1}
                            alt="Affiliation Logo Loading..."
                        />
                    </div>
                    <div
                        className="gp-affiliations-logo"
                        data-aos="fade-up"
                        data-aos-duration="2500"
                    >
                        <img
                            src={gp_aff_image2}
                            alt="Affiliation Logo Loading..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grampanchayat;
