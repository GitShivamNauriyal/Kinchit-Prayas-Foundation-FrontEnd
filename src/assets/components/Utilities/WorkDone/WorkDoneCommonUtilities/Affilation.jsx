import React from "react";
import "../../../../css/WorkDoneCss/Affilation.css";
import Logo1 from "../../../../../Image/skillingCommunity/SkillingCommunityLogo/skillLogo1.png";
import Logo2 from "../../../../../Image/skillingCommunity/SkillingCommunityLogo/skillLogo2.png";
import Logo3 from "../../../../../Image/skillingCommunity/SkillingCommunityLogo/skillLogo3.png";

const Affilation = () => {
    return (
        <>
            <div className="Affilation">
                <div className="Affilation-Logo">
                    <div className="Affilation-Logo-Container">
                        <div className="Affilation-logo1 logo-container">
                            <div className="inner-container innerLogo1">
                                <img src={Logo1} alt="not loaded" />
                            </div>
                        </div>
                        <div className="Logo-description">
                            <div className="pointed-shape"></div>
                            {/* <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                atque unde velit corporis blanditiis commodi deleniti, tempora
                modi dolorem. Impedit distinctio eaque molestias ex assumenda
                consequuntur corrupti laborum dolore voluptates.
              </p> */}
                        </div>
                    </div>
                    <div className="Affilation-Logo-Container">
                        <div className="Affilation-logo2  logo-container">
                            <div className="inner-container innerLogo2">
                                <img src={Logo2} alt="not loaded" />
                            </div>
                        </div>
                        <div className="Logo-description">
                            <div className="pointed-shape"></div>
                            {/* <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                atque unde velit corporis blanditiis commodi deleniti, tempora
                modi dolorem. Impedit distinctio eaque molestias ex assumenda
                consequuntur corrupti laborum dolore voluptates.
              </p> */}
                        </div>
                    </div>
                    <div className="Affilation-Logo-Container">
                        <div className="Affilation-logo3  logo-container">
                            <div className="inner-container innerLogo3">
                                <img src={Logo3} alt="not loaded" />
                            </div>
                        </div>
                        <div className="Logo-description">
                            {/* <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                atque unde velit corporis blanditiis commodi deleniti, tempora
                modi dolorem. Impedit distinctio eaque molestias ex assumenda
                consequuntur corrupti laborum dolore voluptates.
              </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Affilation;
