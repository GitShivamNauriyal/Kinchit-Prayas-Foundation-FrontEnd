import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Slider from "../common_utilities/four_image_single_swipe_carousel";
import "../../../css/HomeCss/Intro.css";

import image1 from "../../../../Image/homepage/introImages/image1.jpg";
import image2 from "../../../../Image/homepage/introImages/image2.jpg";
import image3 from "../../../../Image/homepage/introImages/image3.jpg";

const Intro = () => {
	AOS.init({ duration: 1500 });
	return (
		<section className="intro-section">
			<div className="intro-base-grid">
				<div className="intro-text-content" data-aos="fade-right">
					<h1 className="intro-text-content-heading intro-heading-desktop">
						Kinchit Prayas Foundation
					</h1>
					<h1 className="intro-text-content-heading intro-heading-mobile">
						About us
					</h1>
					<p className="intro-text-content-para">
						Kinchit Prayas Foundation is registered under India
						Trust Act, 1882 and has been providing social services,
						skill development services, promotion of handicrafts in
						association with DC (Handicrafts), Ministry of Textiles,
						GoI capacity building programme, water sanitation,
						menstrual health and hygiene related awareness and IEC
						activities, making it one of the top 10 Non-Profit
						Foundations of Uttarakhand. Our organization is also
						registered under NITI Aayog Darpan Portal, 12A, CSR 1
						and 80G.
					</p>
					<p className="intro-text-content-para">
						We are working in the field of water sanitation and
						other vocational education training since 2017. We have
						been working with more than 10 government departments
						under various projects of welfare and development.
					</p>
				</div>
				<div className="intro-image-content" data-aos="fade-left">
					<div className="home-intro-images-container">
						<img
							src={image1}
							alt="about-image-1"
							className="home-about-img"
							id="about-image-1"
						/>
						<img
							src={image2}
							alt="about-image-2"
							className="home-about-img"
							id="about-image-2"
						/>
						<img
							src={image3}
							alt="about-image-3"
							className="home-about-img"
							id="about-image-3"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
