import React, { useEffect } from "react";
import "../../../css/FlagshipEventCss/slidingLogos.css";
import Image1 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Logo/logo1.png";
// import Image2 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Logo/logo2.png";
import Image3 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Logo/logo3.png";
import Image4 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Logo/logo4.jpg";
import Image5 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Logo/logo5.jpg";
import Image6 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Logo/logo6.jpg";
import Image7 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Logo/logo7.jpg";
import Image8 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Logo/logo8.png";
import Image9 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Logo/logo9.jpg";
import Image10 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Logo/logo10.png";
import Image11 from "../../../../Image/Flagship/UttrakhandDevelopmentExibition/Logo/logo11.png";

const SlidingLogos = () => {

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
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        // Check if the user has opted for reduced motion
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            // Loop through each scroller element
            scrollers.forEach((scroller) => {
                // Set data-animated attribute to true
                scroller.setAttribute("data-animated", true);

                // Get the inner content of the scroller
                const scrollerInner =
                    scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                // Clone each item and append it to the end
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    console.log(duplicatedItem);
                    duplicatedItem.setAttribute("aria-hidden", true); // Add aria-hidden attribute
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []); // Empty dependency array ensures useEffect runs only once after initial render
*/

    return (
        <div className="affiliations-section">
            <div className="affiliations-heading">Organised By</div>
            <div className="scroller" data-animated="true">
                <div className="tag-list scroller__inner">
                    <div className="affiliations-grid-item">
                        <img src={Image1} alt="failed to load" />
                    </div>
                    {/* <div className="affiliations-grid-item">
                        <img src={Image2} alt="failed to load" />
                    </div> */}
                    <div className="affiliations-grid-item">
                        <img src={Image3} alt="failed to load" />
                    </div>
                    <div className="affiliations-grid-item">
                        <img src={Image4} alt="failed to load" />
                    </div>
                    <div className="affiliations-grid-item">
                        <img src={Image5} alt="failed to load" />
                    </div>
                    <div className="affiliations-grid-item">
                        <img src={Image6} alt="failed to load" />
                    </div>
                    <div className="affiliations-grid-item">
                        <img src={Image7} alt="failed to load" />
                    </div>
                    <div className="affiliations-grid-item">
                        <img src={Image8} alt="failed to load" />
                    </div>
                    {/* <div className="affiliations-grid-item">
                        <img src={Image9} alt="failed to load" />
                    </div> */}
                    <div className="affiliations-grid-item">
                        <img src={Image10} alt="failed to load" />
                    </div>
                    <div className="affiliations-grid-item">
                        <img src={Image11} alt="failed to load" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlidingLogos;
