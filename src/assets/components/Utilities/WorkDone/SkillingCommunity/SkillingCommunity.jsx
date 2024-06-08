import React from "react";
import "../../../../css/WorkDoneCss/SkillingCommunity.css";
import SkillingCommunityImage1 from "../../../../../Image/skillingCommunity/skill1.jpg";
import SkillingCommunityImage2 from "../../../../../Image/skillingCommunity/skill2.jpg";
import SkillingCommunityImage3 from "../../../../../Image/skillingCommunity/skill6.jpg";
import SkillingCommunityImage4 from "../../../../../Image/skillingCommunity/skill3.jpg";
import SkillingCommunityImage11 from "../../../../../Image/skillingCommunity/skill4.jpg";
import SkillingCommunityImage5 from "../../../../../Image/skillingCommunity/skill7.jpg";
import SkillingCommunityImage6 from "../../../../../Image/skillingCommunity/skill8.jpg";
import SkillingCommunityImage7 from "../../../../../Image/skillingCommunity/skill9.jpg";
import SkillingCommunityImage8 from "../../../../../Image/skillingCommunity/skill10.jpg";
import SkillingCommunityImage9 from "../../../../../Image/skillingCommunity/skill11.jpg";
import SkillingCommunityImage10 from "../../../../../Image/skillingCommunity/skill12.jpg";

import Logo1 from "../../../../../Image/skillingCommunity/SkillingCommunityLogo/skillLogo1.png";
import Logo2 from "../../../../../Image/skillingCommunity/SkillingCommunityLogo/skillLogo2.png";
import Logo3 from "../../../../../Image/skillingCommunity/SkillingCommunityLogo/skillLogo3.png";

// import Affilation from "../WorkDoneCommonUtilities/Affilation";
// import Carsoules from "../../WorkDone/WorkDoneCommonUtilities/Carsoules";
// import Glimpse from "../WorkDoneCommonUtilities/Gallery";

const SkillingCommunity = () => {
    return (
        <div className="SkillingCommunity-PageMaster">
            <div className="SkillingCommunity-Heading">
                <h1>SKILLING COMMUNITY</h1>
            </div>

            <div className="content1 grid-section-column">
                <div className=" Content1-col1">
                    <div id="Content1-image1" className="Content1-image">
                        <img src={SkillingCommunityImage1} alt="not loaded" />
                    </div>
                    <div id="Content1-image2" className="Content1-image">
                        <img src={SkillingCommunityImage2} alt="not loaded" />
                    </div>
                    <div id="Content1-image3" className="Content1-image">
                        <img src={SkillingCommunityImage3} alt="not loaded" />
                    </div>
                </div>
                <div className="content1-description-section">
                    <h2>CAPACTIY BUILDING AND TRAINING</h2>
                    <p>
                        Recognizing the importance of empowering individuals,
                        the foundation conducts capacity building and training
                        programs. These initiatives focus on equipping community
                        members with skills related to water management,
                        sanitation practices, and sustainable development,
                        thereby fostering self-sufficiency and community-led
                        initiatives.
                    </p>
                </div>
            </div>
            <div className="content2 grid-section-column">
                <div className="content2-col1">
                    <h2>SKILL ENHANCEMENT AND QUALITY EDUCATION</h2>
                    <p>
                        Kinchit Prayas Foundation is dedicated to enhancing
                        skills and promoting quality education in the regions it
                        serves. The organization implements educational programs
                        that not only improve access to education but also
                        emphasize skill development, creating pathways for
                        individuals to secure better livelihoods.
                    </p>
                </div>
                <div className="content2-col2">
                    <img src={SkillingCommunityImage4} alt="not loaded" />
                </div>
            </div>
            <div className="content3">
                <h2>OUR AFFILIATIONS</h2>
                {/* <Carsoules
                    src={SkillingCommunityImage1}
                    src1={SkillingCommunityImage2}
                    src2={SkillingCommunityImage3}
                /> */}
            </div>
            <div className="Skilling-Community-Affilation">
                <div className="Skilling-Community-Affilation-grid-content SC-Aff_1">
                    <div className="SC-Aff-img-container">
                        <img src={Logo1} alt="Affiliation Logo" />
                    </div>
                </div>
                <div className="Skilling-Community-Affilation-grid-content SC-Aff_2">
                    <div className="SC-Aff-img-container">
                        <img src={Logo2} alt="Affiliation Logo" />
                    </div>
                </div>
                <div className="Skilling-Community-Affilation-grid-content SC-Aff_3">
                    <div className="SC-Aff-img-container">
                        <img src={Logo3} alt="Affiliation Logo" />
                    </div>
                </div>
            </div>
            <div className="collage-skilling-Community">
                {/* // src1={SkillingCommunityImage7}
                // src2={SkillingCommunityImage2}
                // src3={SkillingCommunityImage11}
                // src4={SkillingCommunityImage10}
                // src5={SkillingCommunityImage5}
                // src6={SkillingCommunityImage8}
                // src7={SkillingCommunityImage1}
                // src8={SkillingCommunityImage6}
                // src9={SkillingCommunityImage9} */}
                <div className="ws-Glimpse-Container">
                    <h1>GLIMPSE</h1>

                    <div className="ws-image-collage">
                        <div className="ws-image-collage-container">
                            <div
                                id="image-collage-image1"
                                className="image-container"
                            >
                                <img
                                    src={SkillingCommunityImage7}
                                    alt="not loaded"
                                />
                            </div>
                            <div className="ws-image-collage-container-inner">
                                <div
                                    id="image-collage-image2"
                                    className="image-container"
                                >
                                    <img
                                        src={SkillingCommunityImage2}
                                        alt="not loaded"
                                    />
                                </div>
                                <div
                                    id="image-collage-image3"
                                    className="image-container"
                                >
                                    <img
                                        src={SkillingCommunityImage11}
                                        alt="not loaded"
                                    />
                                </div>
                                <div
                                    id="image-collage-image4"
                                    className="image-container"
                                >
                                    <img
                                        src={SkillingCommunityImage10}
                                        alt="not loaded"
                                    />
                                </div>
                                <div
                                    id="image-collage-image5"
                                    className="image-container"
                                >
                                    <img
                                        src={SkillingCommunityImage5}
                                        alt="not loaded"
                                    />
                                </div>
                            </div>
                            <div className="ws-image-collage-container-inner">
                                <div
                                    id="image-collage-image6"
                                    className="image-container"
                                >
                                    <img
                                        src={SkillingCommunityImage8}
                                        alt="not loaded"
                                    />
                                </div>
                                <div
                                    id="image-collage-image7"
                                    className="image-container"
                                >
                                    <img
                                        src={SkillingCommunityImage1}
                                        alt="not loaded"
                                    />
                                </div>
                                <div
                                    id="image-collage-image8"
                                    className="image-container"
                                >
                                    <img
                                        src={SkillingCommunityImage6}
                                        alt="not loaded"
                                    />
                                </div>
                                <div
                                    id="image-collage-image9"
                                    className="image-container"
                                >
                                    <img
                                        src={SkillingCommunityImage9}
                                        alt="not loaded"
                                    />
                                </div>
                            </div>
                            <div
                                id="image-collage-image10"
                                className="image-container"
                            >
                                <img
                                    src={SkillingCommunityImage3}
                                    alt="not loaded"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillingCommunity;
