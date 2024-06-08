import React from "react";

/*Home Utilities*/
import FullscreenCarousel from "./full_screen_carousel";
import Intro from "./Intro";
import Impacts from "./Impacts";
import Interventions from "./Interventions";
import Sustainability from "./sustainability";
import Ouraffiliations from "./ouraffiliations";
import CovidRelief from "./Covid_19_relief";
import Testimonials from "./testimonials";
// import Horizontal_scroller from "../common_utilities/horizontal_scroller";

/*Main Carousel Images*/
import Carousel_image1 from "../../../../Image/homepage/image_carousel/image1.jpg";
import Carousel_image2 from "../../../../Image/homepage/image_carousel/image2.jpg";
import Carousel_image3 from "../../../../Image/homepage/image_carousel/image3.jpg";
import Carousel_image4 from "../../../../Image/homepage/image_carousel/image4.jpg";
/*Testimonials Images*/

const home = () => {
    return (
        <div className="home">
            <FullscreenCarousel
                image1={Carousel_image1}
                image2={Carousel_image2}
                image3={Carousel_image3}
                image4={Carousel_image4}
            />
            <Intro />
            <Impacts />
            <Interventions />
            <Sustainability />
            <Ouraffiliations />
            <CovidRelief />
            <Testimonials
                image1={""}
                image2={""}
                image3={""}
                image4={""}
                image5={""}
                image6={""}
            />
        </div>
    );
};

export default home;
