import React from "react";
import "../../../css/FlagshipEventCss/EqualityAwareness.css";
import "react-multi-carousel/lib/styles.css";
import BannerImage2 from "../../../../Image/Flagship/EqualityAwareness/Carousel1.jpg";
import BannerImage5 from "../../../../Image/Flagship/EqualityAwareness/Carousel2.jpg";
import BannerImage3 from "../../../../Image/Flagship/EqualityAwareness/Carousel3.jpg";
import BannerImage4 from "../../../../Image/Flagship/EqualityAwareness/Carousel4.jpg";
import BannerImage1 from "../../../../Image/Flagship/EqualityAwareness/Equality1.jpg";
import Section3Image from "../../../../Image/Flagship/EqualityAwareness/Section3.jpg";
import Section3Image1 from "../../../../Image/Flagship/EqualityAwareness/Section3.1.jpg";
import Section3Image2 from "../../../../Image/Flagship/EqualityAwareness/Section3.2.jpg";
import Section5Image from "../../../../Image/Flagship/EqualityAwareness/Section5.jpg";
import Section6Image1 from "../../../../Image/Flagship/EqualityAwareness/Section6.1.jpg";
import Section6Image2 from "../../../../Image/Flagship/EqualityAwareness/Section6.2.jpg";
import Section6Image3 from "../../../../Image/Flagship/EqualityAwareness/Section6.3.jpg";
import Section7Image1 from "../../../../Image/Flagship/EqualityAwareness/Section7.1.jpg";
import Section7Image2 from "../../../../Image/Flagship/EqualityAwareness/Section7.2.jpg";
import Section7Image3 from "../../../../Image/Flagship/EqualityAwareness/Section7.3.jpg";
import Section7Image4 from "../../../../Image/Flagship/EqualityAwareness/Section7.4.jpg";
import Section7Image5 from "../../../../Image/Flagship/EqualityAwareness/Section7.5.jpg";
import Section7Image6 from "../../../../Image/Flagship/EqualityAwareness/Section7.6.jpg";

import Carousel from "react-multi-carousel";
import AOS from "aos";

const EqualityAwareness = () => {
    AOS.init({ duration: 1500 });

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div className="seminars-page-master">
            <div className="Seminar-Carousel-banner">
                <div
                    className="Seminar-Carousel-description Seminar-Carousel-overlay"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h1>Awareness and Equality</h1>
                    <p className="Banner-Line">
                        With a commitment to mature the Viksit Bharat @2047, we
                        prioritize initiatives aimed at shaping a future!
                    </p>
                </div>
                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    // ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3 * 1000}
                    customTransition="all .15"
                    // transitionDuration={2000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    // itemClass="carousel-item-padding-40-px"
                >
                    <div className="Seminars-banner">
                        <img src={BannerImage1} alt="not loaded" />
                    </div>
                    <div className="Seminars-banner">
                        <img src={BannerImage2} alt="not loaded" />
                    </div>
                    <div className="Seminars-banner">
                        <img src={BannerImage3} alt="not loaded" />
                    </div>
                    <div className="Seminars-banner">
                        <img src={BannerImage4} alt="not loaded" />
                    </div>
                    <div className="Seminars-banner">
                        <img src={BannerImage5} alt="not loaded" />
                    </div>
                </Carousel>
            </div>

            <div className="seminars-page-Equality-section2">
                <p data-aos="fade-right" data-aos-duration="2000">
                    Kinchit Prayas Foundation is a pioneering organization that
                    orchestrates a myriad of debates, symposiums, workshops, and
                    seminars. Our focus extends beyond mere discourse, delving
                    into the core issues concerning the development and
                    sustenance of our nation's core requirements. With a
                    steadfast commitment to nurturing Viksit Bharat @ 2047, we
                    prioritize initiatives aimed at shaping a future where
                    argumentative tradition is promoted and youth is aware about
                    the socio-economic issues around them and act as a
                    cornerstone of cultural identity and intellectual discourse.
                </p>
            </div>
            <div className="seminars-page-Equality-section5 seminars-page-Equality-section3">
                <div
                    className="seminars-page-section5-image"
                    data-aos="fade-left"
                >
                    <img src={Section5Image} alt="not loaded" />
                </div>
                <div
                    className="seminars-page-section-description"
                    data-aos="fade-right"
                >
                    <h2>Symposium to celebrate Women Equality Day </h2>
                    <div className="seminars-page-paragraph">
                        <p>
                            The symposium was organized to commemorate Women
                            Equality Day and honor the remarkable contributions
                            of women change-makers in Uttarakhand on 26th
                            August, 2023 by the Kinchit Prayas Foundation and
                            presided by Honorable Chairperson, Women Commission
                            of Uttarakhand at BFIT, Sudhowala, Dehradun.
                        </p>
                    </div>
                </div>
            </div>
            <div className="seminars-page-section seminars-page-Equality-section6">
                <div className="seminars-page-heading">
                    <h2 data-aos="fade-right">
                        The event was graced by the presence of eminent
                        personalities, including government officials,
                        activists, and community leaders.
                    </h2>
                </div>
                <div className="seminars-page-grid">
                    <div
                        className="seminars-page-grid-content"
                        data-aos="fade-right"
                    >
                        <img src={Section6Image1} alt="not loaded" />
                        <p>
                            Panel discussions and keynote speeches centered on
                            the theme of gender equality, highlighting the
                            challenges and successes in achieving women's
                            empowerment in Uttarakhand.
                        </p>
                    </div>
                    <div
                        className="seminars-page-grid-content"
                        data-aos="fade-up"
                    >
                        <img src={Section6Image2} alt="not loaded" />
                        <p>
                            Women change-makers shared their inspiring journeys
                            and experiences, underscoring the importance of
                            resilience and determination in effecting positive
                            change.
                        </p>
                    </div>
                    <div
                        className="seminars-page-grid-content"
                        data-aos="fade-left"
                    >
                        <img src={Section6Image3} alt="not loaded" />
                        <p>
                            Notable women leaders and activists were recognized
                            and appreciated for their significant contributions
                            to advancing the status of women in Uttarakhand.
                        </p>
                    </div>
                </div>
            </div>

            <div className="seminars-page-Equality-section4 seminars-page-Equality-section2">
                <p data-aos="fade-up">
                    The Women Equality Day symposium was a resounding success,
                    fostering dialogue, recognition, and commitment to advancing
                    the cause of women's equality and empowerment in
                    Uttarakhand. Through collective efforts and continued
                    advocacy, the vision of a more inclusive and equitable
                    society for all women remains within reach.
                </p>
            </div>
            <div className="seminars-page-Equality-section3">
                <div
                    className="seminars-page-section-description"
                    data-aos="fade-right"
                >
                    <h2>Seminar on Maulana Azad ka Taleemi Nazariya</h2>
                    <div className="seminars-page-paragraph">
                        <p>
                            Organized by Kinchit Prayas Foundation in
                            collaboration with the National Council for
                            Promotion of Urdu Language, the seminar on "Maulana
                            Azad ka Taleemi Nazariya" was a resounding success.
                            Held under the guidance of esteemed experts from
                            Uttarakhand on Urdu language, the event drew more
                            than 200 participants from diverse backgrounds.
                        </p>
                    </div>
                </div>
                <div
                    className="seminars-page-section3-image"
                    data-aos="fade-left"
                >
                    <img src={Section3Image} alt="not loaded" />
                </div>
                <div className="seminars-page-section-description">
                    <div
                        className="seminars-page-section3-image"
                        data-aos="fade-left"
                    >
                        <img src={Section3Image1} alt="not loaded" />
                    </div>
                </div>
                <div className="seminars-page-paragraph" data-aos="fade-right">
                    <p>
                        The seminar also served as a platform for attendees to
                        exchange ideas, share experiences, and forge meaningful
                        connections within the Urdu language community.
                        Participants expressed their appreciation for the
                        opportunity to deepen their understanding of Azad's
                        educational ideology and its implications for modern
                        educational practices.
                    </p>
                </div>

                <div className="seminars-page-paragraph" data-aos="fade-right">
                    <p>
                        Throughout the seminar, participants engaged in
                        insightful discussions, exploring Maulana Azad's
                        educational philosophy and its relevance in contemporary
                        society. The speakers provided valuable insights into
                        Azad's vision for education, emphasizing its holistic
                        and inclusive nature. They highlighted Azad's belief in
                        the power of education to foster social harmony,
                        intellectual growth, and national integration.
                    </p>
                </div>

                <div
                    className="seminars-page-Section3-LogoImage"
                    data-aos="fade-left"
                >
                    <img src={Section3Image2} alt="not loaded" />
                </div>
            </div>

            <div className="seminars-page-Equality-section4 seminars-page-Equality-section2">
                <p data-aos="fade-up">
                    Overall, the seminar on "Maulana Azad ka Taleemi Nazariya"
                    was instrumental in promoting dialogue, fostering
                    intellectual exchange, and advancing the cause of Urdu
                    language education. Kinchit Prayas Foundation extends its
                    gratitude to all participants, speakers, and collaborators
                    for their valuable contributions to this enriching event.
                </p>
            </div>

            <div className="seminars-page-Equality-lastSection">
                <div className="seminars-page-custom-shape-divider-top-1715535169">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M1200 0L0 0 598.97 114.72 1200 0z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
                <h2 data-aos="fade-left" data-aos-duration="2000">
                    A Quick Glance
                </h2>
                <div className="seminars-page-grid-gallery">
                    <img
                        src={Section7Image1}
                        alt="not loaded"
                        data-aos="fade-up"
                        data-aos-duration="2500"
                    />
                    <img
                        src={Section7Image2}
                        alt="not loaded"
                        data-aos="fade-up"
                        data-aos-duration="2500"
                    />
                    <img
                        src={Section7Image3}
                        alt="not loaded"
                        data-aos="fade-up"
                        data-aos-duration="2500"
                    />
                    <img
                        src={Section7Image4}
                        alt="not loaded"
                        data-aos="fade-up"
                        data-aos-duration="2500"
                    />
                    <img
                        src={Section7Image5}
                        alt="not loaded"
                        data-aos="fade-up"
                        data-aos-duration="2500"
                    />
                    <img
                        src={Section7Image6}
                        alt="not loaded"
                        data-aos="fade-up"
                        data-aos-duration="2500"
                    />
                </div>
            </div>
        </div>
    );
};

export default EqualityAwareness;
