import React from "react";
import "../../../../css/WorkDoneCss/WashSector.css";
import Image1 from "../../../../../Image/WashSector/WashImage1.jpg";
import Image2 from "../../../../../Image/WashSector/WashImage2.jpg";
import Image3 from "../../../../../Image/WashSector/WashImage3.jpg";
import Image4 from "../../../../../Image/WashSector/WashImage4.jpg";
import Image5 from "../../../../../Image/WashSector/WashImage5.jpg";
import Image6 from "../../../../../Image/WashSector/WashImage6.jpg";
import Image7 from "../../../../../Image/WashSector/WashImage7.jpg";
import map from "../../../../../Image/WashSector/map.png";
import Logo1 from "../../../../../Image/WashSector/AffilationLOGO1.png";
import Logo2 from "../../../../../Image/WashSector/AffilationLOGO2.png";
import Logo3 from "../../../../../Image/WashSector/AffilationLOGO3.png";

const WashSector = () => {
	return (
		<div className="WashSector-Section">
			<div className="WashSector-Heading">
				<h1>INTERVENTONS IN WASH SECTOR</h1>
			</div>
			<div className="Content-Page">
				<div className="Content-Image-Container">
					<div id="Content-image1" className="Content-image">
						<img src={Image2} alt="not loaded" />
					</div>
					<div id="Content-image2" className="Content-image">
						<img src={Image3} alt="not loaded" />
					</div>
					<div id="Content-image3" className="Content-image">
						<img src={Image5} alt="not loaded" />
					</div>
				</div>
				<div className="content-Description">
					<h1>Water Equality and Accessibility</h1>
					<p>
						Kinchit Prayas Foundation is committed to bridge the gap
						in water accessibility and promoting equality in water
						distribution. The organization being an implementation
						support agency under the government led scheme of JAL
						JEEVAN MISSION, has been working to improve water
						infrastructure, facilitate access to clean water sources
						and implement sustainable water management practices in
						collaboration with local communities and governmental
						bodies.
					</p>
				</div>
			</div>
			{/* <div className="Impact-Heading">
        <h1>IMPACTS </h1>
      </div> */}
			<div className="WashSector-impacts">
				<div className="impact-Map">
					<img src={map} alt="not loaded" />
				</div>
				<div className="impact-Map-description">
					<h2>Impacted 10+ districts of Uttarakhand</h2>
				</div>
			</div>

			{/* <div className="WashSector-Affilation">
        <h1>AFFILIATIONS AND COLLABORATIONS</h1>
        <div className="Affilation-Logo">
          <div className="Affilation-Logo-Container">
          <div className="Affilation-logo1 logo-container">
            <div className="inner-container innerLogo1">
              <img src={Logo1} alt="not loaded" />
            </div>
          </div>
          <div className="Logo-description"><div className="pointed-shape">
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At atque unde velit corporis blanditiis commodi deleniti, tempora modi dolorem. Impedit distinctio eaque molestias ex assumenda consequuntur corrupti laborum dolore voluptates.
            </p>
            
          </div>
          </div>
          <div className="Affilation-Logo-Container">

          <div className="Affilation-logo2  logo-container">
            <div className="inner-container innerLogo2">
              <img src={Logo2} alt="not loaded" />
            </div>
          </div>
          <div className="Logo-description"><div className="pointed-shape">
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At atque unde velit corporis blanditiis commodi deleniti, tempora modi dolorem. Impedit distinctio eaque molestias ex assumenda consequuntur corrupti laborum dolore voluptates.
            </p>
            
          </div>
          </div>
          <div className="Affilation-Logo-Container">
          <div className="Affilation-logo3  logo-container">
            
            <div className="inner-container innerLogo3">
              <img src={Logo3} alt="not loaded" />
            </div>
          </div>
          <div className="Logo-description"><div className="pointed-shape">
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At atque unde velit corporis blanditiis commodi deleniti, tempora modi dolorem. Impedit distinctio eaque molestias ex assumenda consequuntur corrupti laborum dolore voluptates.
            </p>
            
          </div>
          </div>
        </div>
      </div> */}

			<div className="ws-Glimpse-Container">
				<h1>GLIMPSE</h1>

				<div className="ws-image-collage">
					<div className="ws-image-collage-container">
						<div
							id="image-collage-image1"
							className="image-container"
						>
							<img src={Image1} alt="not loaded" />
						</div>
						<div className="ws-image-collage-container-inner">
							<div
								id="image-collage-image2"
								className="image-container"
							>
								<img src={Image2} alt="not loaded" />
							</div>
							<div
								id="image-collage-image3"
								className="image-container"
							>
								<img src={Image3} alt="not loaded" />
							</div>
							<div
								id="image-collage-image4"
								className="image-container"
							>
								<img src={Image4} alt="not loaded" />
							</div>
							<div
								id="image-collage-image5"
								className="image-container"
							>
								<img src={Image5} alt="not loaded" />
							</div>
						</div>
						<div
							id="image-collage-image6"
							className="image-container"
						>
							<img src={Image6} alt="not loaded" />
						</div>
						<div
							id="image-collage-image7"
							className="image-container"
						>
							<img src={Image7} alt="not loaded" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WashSector;
