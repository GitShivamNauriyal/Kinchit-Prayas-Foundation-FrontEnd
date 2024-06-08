import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../css/HomeCss/ouraffiliations.css";
import aff_image1 from "../../../../Image/homepage/affiliations/Har_ghar_jal_logo_tansparent.jpg";
import aff_image2 from "../../../../Image/homepage/affiliations/Indian_handicraft_logo_transparent.jpg";
import aff_image3 from "../../../../Image/homepage/affiliations/NCPUL_logo_transparent.png";
import aff_image4 from "../../../../Image/homepage/affiliations/NSDC_logo_transparent.png";
import aff_image5 from "../../../../Image/homepage/affiliations/sashakt_panchayat_logo_transparent.png";
import aff_image6 from "../../../../Image/homepage/affiliations/SEWA_THDC_logo_tansparent.jpg";
import aff_image7 from "../../../../Image/homepage/affiliations/Skill_india_logo_transparent.jpg";
import aff_image8 from "../../../../Image/homepage/affiliations/UK_parijal_logo_tansparent.jpg";
import aff_image9 from "../../../../Image/homepage/affiliations/UP_logo_transparent.jpg";
import aff_image10 from "../../../../Image/homepage/affiliations/USDS_logo_transparent.jpg";

const Ouraffiliations = () => {
    AOS.init({ duration: 1500 });

    useEffect(() => {

        const scrollerInner = document.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // Clone each item and append it to the end to create an infinite loop effect
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    }, []);
    /*
        const scrollers = document.querySelectorAll(".scroller");

        // Check if the user has opted for reduced motion
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);

                const scrollerInner =
                    scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

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
        <div className="affiliations-section">
            <div className="affiliations-heading" data-aos="fade-right">
                Our Affiliations
            </div>
            <div className="scroller" data-animated="true" data-aos="fade-up">
                <div className="home-page-tag-list scroller__inner">
                    <li>
                        <div className="affiliations-grid-item">
                            <img src={aff_image1} alt="failed to load" />
                        </div>
                    </li>
                    <li>
                        <div className="affiliations-grid-item">
                            <img src={aff_image2} alt="failed to load" />
                        </div>
                    </li>
                    <li>
                        <div className="affiliations-grid-item">
                            <img src={aff_image3} alt="failed to load" />
                        </div>
                    </li>
                    <li>
                        <div className="affiliations-grid-item">
                            <img src={aff_image4} alt="failed to load" />
                        </div>
                    </li>
                    <li>
                        <div className="affiliations-grid-item">
                            <img src={aff_image5} alt="failed to load" />
                        </div>
                    </li>
                    <li>
                        <div className="affiliations-grid-item">
                            <img src={aff_image6} alt="failed to load" />
                        </div>
                    </li>
                    <li>
                        <div className="affiliations-grid-item">
                            <img src={aff_image7} alt="failed to load" />
                        </div>
                    </li>
                    <li>
                        <div className="affiliations-grid-item">
                            <img src={aff_image8} alt="failed to load" />
                        </div>
                    </li>
                    <li>
                        <div className="affiliations-grid-item">
                            <img src={aff_image9} alt="failed to load" />
                        </div>
                    </li>
                    <li>
                        <div className="affiliations-grid-item">
                            <img src={aff_image10} alt="failed to load" />
                        </div>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Ouraffiliations;
