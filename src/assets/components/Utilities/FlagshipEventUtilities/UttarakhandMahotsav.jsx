import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../css/FlagshipEventCss/UttarakhandMahotsav.css";
import ContentImage1 from "../../../../Image/Flagship/UttarakhandMahotsav/UttrakhandMahotsav_2.jpg";
import ContentImage2 from "../../../../Image/Flagship/UttarakhandMahotsav/UttrakhandMahotsav_3.jpg";
import ContentImage3 from "../../../../Image/Flagship/UttarakhandMahotsav/UttrakhandMahotsav_5.jpg";
import ContentImage4 from "../../../../Image/Flagship/UttarakhandMahotsav/UttrakhandMahotsav_6.jpg";
import ContentImage5 from "../../../../Image/Flagship/UttarakhandMahotsav/UttrakhandMahotsav_Banner.jpg";
import ContentImage6 from "../../../../Image/Flagship/UttarakhandMahotsav/UttarakhandMahotsav_5.jpg";
import ContentImage7 from "../../../../Image/Flagship/UttarakhandMahotsav/UttrakhandMahotsav_7.jpg";
import ContentImage8 from "../../../../Image/Flagship/UttarakhandMahotsav/UttrakhandMahotsav_8.jpg";
import SlidingPicture from "./SlidingPicture";

const UttarakhandMahotsav = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="UK-mahotsav-master">
            <div className="Flagship-Page1-banner">
                <div className="image-overlay" data-aos="fade-up">
                    {" "}
                    <h1> Uttarakhand Mahotsav</h1>
                </div>
            </div>
            <div className="content-grid">
                <div
                    className="grid-col1-image Flagship-grid-element"
                    data-aos="fade-right"
                >
                    <img src={ContentImage1} alt="not loaded" />
                    <img src={ContentImage2} alt="not loaded" />
                </div>
                <div
                    className="grid-col2-paragraph1 Flagship-grid-para-element"
                    data-aos="fade-left"
                >
                    {" "}
                    <p>
                        Welcome to the grand exhibition of 'Uttarakhand
                        Mahotsav', a celebration of the vibrant culture, rich
                        heritage, and promising aspirations of the land of the
                        gods, Uttarakhand. Since its inception in 2022,
                        'Uttarakhand Mahotsav' has been a beacon of tradition
                        and innovation, held annually in the picturesque city of
                        Dehradun.
                    </p>
                    <p>
                        {" "}
                        At 'Uttarakhand Mahotsav', we take pride in showcasing
                        the dynamic spirit of Uttarakhand's youth, their
                        creative endeavors,and their relentless pursuit of
                        excellence. Through a plethora of engaging activities,
                        performances, and interactive sessions,we provide a
                        platform for the youth to express themselves, share
                        their dreams, and inspire others.
                    </p>
                    <p>
                        Moreover, 'Uttarakhand Mahotsav' serves as a nexus for
                        economic empowerment, fostering market linkages for
                        various Self Help Groups (SHGs) and stalls representing
                        departments such as the Forest Department, State Rural
                        Livelihood Mission, and more. This initiative not only
                        supports local artisans, entrepreneurs, and craftsmen
                        but also promotes sustainable livelihoods and community
                        development.
                    </p>
                </div>
                <div
                    className="grid-col2-paragraph2 paragraph Flagship-grid-para-element"
                    data-aos="fade-right"
                >
                    <p>
                        One of the highlights of 'Uttarakhand Mahotsav' is its
                        dedication to preserving and promoting the rich cultural
                        tapestry of Uttarakhand. Visitors are treated to a
                        mesmerizing array of traditional performances, folk
                        dances, music concerts, and art exhibitions that offer a
                        glimpse into the soul of Uttarakhand.
                    </p>
                    <p>
                        Additionally, no celebration of Uttarakhand is complete
                        without indulging in its delectable cuisine. From
                        mouthwatering delicacies like Garhwali cuisine to the
                        aromatic flavors of Kumaoni dishes, 'Uttarakhand
                        Mahotsav' is a culinary delight for food enthusiasts,
                        offering a tantalizing journey through the flavors of
                        the region.
                    </p>
                    <p>
                        Do Join us as we come together to honor the essence of
                        Uttarakhand its people, its culture, and its natural
                        beauty at 'Uttarakhand Mahotsav', where tradition meets
                        modernity, and aspirations soar high.
                    </p>
                </div>
                <div
                    className="grid-col2-image Flagship-grid-element"
                    data-aos="fade-left"
                >
                    <img src={ContentImage3} alt="not loaded" />
                    <img src={ContentImage4} alt="not loaded" />
                </div>
            </div>
            <div className="Carsouel-heading" data-aos="fade-right">
                <h2>Glimpse</h2>
            </div>
            <div className="carsouel-wrapper" data-aos="fade-up">
                <SlidingPicture
                    src1={ContentImage1}
                    src2={ContentImage2}
                    src3={ContentImage3}
                    src4={ContentImage4}
                    src5={ContentImage5}
                    src6={ContentImage6}
                    src7={ContentImage7}
                    src8={ContentImage8}
                />
            </div>
        </div>
    );
};

export default UttarakhandMahotsav;
