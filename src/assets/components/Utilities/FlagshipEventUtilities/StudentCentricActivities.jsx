import React from "react";
import Carousel from "react-multi-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import SlidingPicture from "../FlagshipEventUtilities/SlidingPicture";
import "react-multi-carousel/lib/styles.css";
import BannerImage1 from "../../../../Image/Flagship/StudentCentricActivities/CentricActivities1.jpg";
import BannerImage2 from "../../../../Image/Flagship/StudentCentricActivities/CentricActivities2.jpg";
import BannerImage3 from "../../../../Image/Flagship/StudentCentricActivities/CentricActivities3.jpg";
import NukkadNataak from "../../../../Image/Flagship/StudentCentricActivities/Nukkad_Nataak.jpg";
import NukkadNataakCarouselImage1 from "../../../../Image/Flagship/StudentCentricActivities/Nukkad_Nataak1.1.jpg";
import NukkadNataakCarouselImage2 from "../../../../Image/Flagship/StudentCentricActivities/Nukkad_Nataak1.2.jpg";
import NukkadNataakCarouselImage3 from "../../../../Image/Flagship/StudentCentricActivities/Nukkad_Nataak1.3.jpg";
import NukkadNataakCarouselImage4 from "../../../../Image/Flagship/StudentCentricActivities/NukkadNataakCarouselImage5.jpg";
import NukkadNataakCarousel2Image1 from "../../../../Image/Flagship/StudentCentricActivities/Nukkad_Nataak2.1.jpg";
import NukkadNataakCarousel2Image2 from "../../../../Image/Flagship/StudentCentricActivities/Nukkad_Nataak2.jpg";
import NukkadNataakCarousel2Image3 from "../../../../Image/Flagship/StudentCentricActivities/Nukkad_Nataak2.2.jpg";
import NukkadNataakCarousel2Image4 from "../../../../Image/Flagship/StudentCentricActivities/Nukkad_Nataak2.3.jpg";
import NukkadNataakCarousel2Image5 from "../../../../Image/Flagship/StudentCentricActivities/Nukkad_Nataak2.4.jpg";
import NukkadNataakCarousel2Image6 from "../../../../Image/Flagship/StudentCentricActivities/Nukkad_Nataak2.5.jpg";
import NukkadNataakCarousel2Image7 from "../../../../Image/Flagship/StudentCentricActivities/Nukkad_Nataak2.6.jpg";
import EssayImage1 from "../../../../Image/Flagship/StudentCentricActivities/Essay1.jpg";
import EssayImage2 from "../../../../Image/Flagship/StudentCentricActivities/Essay2.jpg";
import EssayImage3 from "../../../../Image/Flagship/StudentCentricActivities/Essay3.jpg";
import EssayImage4 from "../../../../Image/Flagship/StudentCentricActivities/Essay4.jpg";
import EssayImage5 from "../../../../Image/Flagship/StudentCentricActivities/Essay5.jpg";
import EssayImage6 from "../../../../Image/Flagship/StudentCentricActivities/Essay6.jpg";
import EssayImage7 from "../../../../Image/Flagship/StudentCentricActivities/Essay7.jpg";

import "../../../css/FlagshipEventCss/StudentCentricActivities.css";

const StudentCentricActivities = () => {
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
        <div className="student-centric-page-master">
            <div className="Carousel-banner">
                <div
                    className="Carousel-overlay"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                >
                    <h1>Strengthening Our Future Leaders</h1>
                    <p>
                        Being the executive institution for conducting various
                        student centric activities, Kinchit Prayas Foundation
                        has always been dedicated towards our future leaders.
                    </p>
                </div>
                <div className="Sliding-images">
                    <Carousel
                        responsive={responsive}
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        ssr={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1500}
                        customTransition="all .15"
                        transitionDuration={2000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={[
                            "desktop",
                            "tablet",
                            "mobile",
                        ]}
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div className="StudentCentirc-banner">
                            <img src={BannerImage1} alt="not loaded" />
                        </div>
                        <div className="StudentCentirc-banner">
                            <img src={BannerImage2} alt="not loaded" />
                        </div>
                        <div className="StudentCentirc-banner">
                            <img src={BannerImage3} alt="not loaded" />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="Nukkad-Naatak">
                <div
                    className="Nukkad-Nataak-description"
                    data-aos="fade-right"
                >
                    <h2>Awareness Through Nukkad Natak</h2>
                    <p>
                        Nukkad Natak, or street theater, is a powerful tool for
                        social change and community engagement. Its
                        accessibility and ability to reach diverse audiences
                        make it an invaluable medium for addressing social
                        issues and advocating for positive change. Through
                        vibrant performances in public spaces, Nukkad Natak
                        captures the attention of passersby, sparking dialogue
                        and raising awareness about pressing social issues such
                        as gender inequality, environmental conservation, and
                        health awareness.
                    </p>
                    <p>
                        Moreover, Nukkad Natak has the unique ability to
                        resonate with audiences on an emotional level,
                        effectively conveying messages and inspiring action. Its
                        interactive nature encourages audience participation,
                        fostering a sense of ownership and empowerment within
                        communities. By addressing social issues in a relatable
                        and engaging manner, Nukkad Natak promotes empathy,
                        understanding, and social cohesion, laying the
                        foundation for collective action and community-driven
                        solutions.
                    </p>
                    <p>
                        Furthermore, Nukkad Natak can serve as a catalyst for
                        social works by mobilizing resources, volunteers, and
                        support for grassroots initiatives. It provides a
                        platform for marginalized voices to be heard, amplifying
                        their stories and advocating for their rights.
                        Ultimately, Nukkad Natak plays a vital role in shaping
                        public discourse, challenging societal norms, and
                        fostering positive social change.
                    </p>
                </div>
                <div className="Nukkad-Nataak-Image" data-aos="fade-left">
                    <img src={NukkadNataak} alt="not loaded" />
                </div>
            </div>
            <div className="Nukkad-Naatak-Section2">
                <div
                    className="Nukkad-Natak-Section-heading"
                    data-aos="fade-right"
                >
                    <h2>
                        Nukkad Naatak By Team Saarthi, Doon University (20
                        October 2023) On Drug Abuse and Awareness
                    </h2>
                </div>
                <div data-aos="fade-up">
                    <SlidingPicture
                        src1={BannerImage1}
                        src2={NukkadNataakCarouselImage1}
                        src3={NukkadNataakCarouselImage2}
                        src4={NukkadNataakCarouselImage3}
                        src5={NukkadNataakCarouselImage4}
                    />
                </div>
            </div>
            <div className="Nukkad-Naatak-Section3">
                <div
                    className="Nukkad-Natak-Section-heading"
                    data-aos="fade-right"
                >
                    <h2>
                        Nukkad Naatak by SEWA-THDC (6th October 2021, at
                        Rishikesh)
                    </h2>
                </div>
                <div data-aos="fade-up">
                    <SlidingPicture
                        src1={NukkadNataakCarousel2Image1}
                        src2={NukkadNataakCarousel2Image2}
                        src3={NukkadNataakCarousel2Image3}
                        src4={NukkadNataakCarousel2Image4}
                        src5={NukkadNataakCarousel2Image5}
                        src6={NukkadNataakCarousel2Image6}
                        src7={NukkadNataakCarousel2Image7}
                    />
                </div>
            </div>
            <div className="EssayWritting-Section">
                <div className="custom-shape-divider-top-1715275843">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
                <div className="Essay-grid">
                    <div className="content-image image" data-aos="fade-right">
                        <img src={EssayImage3} alt="not loaded" />
                    </div>

                    <div className="Essay-description" data-aos="fade-left">
                        <h1>Essay Writing and Speech Contest</h1>
                        <p>
                            The collaboration between Kinchit Prayas Foundation
                            and the vibrant student community of Doon University
                            manifested in a captivating display of intellectual
                            vigor and visionary ideation through the Bilingual
                            Essay Writing and Speech Contest, held on the 18th
                            and 19th of October 2023, respectively. These events
                            epitomized the foundation's unwavering dedication to
                            nurturing holistic development and fostering
                            critical engagement among students.
                        </p>
                        <p>
                            The Essay Writing segment, centered around the theme
                            "आत्मनिर्भर भारत - अवसर और चुनौतियां" (Self-reliant
                            India: Challenges and Opportunities), provided
                            participants with an expansive canvas to articulate
                            their insights into India's quest for
                            self-sufficiency. Entrants meticulously dissected
                            the socio-economic fabric, grappling with the
                            multifaceted nuances of achieving self-reliance in
                            an increasingly interconnected world. From analyzing
                            policy frameworks to spotlighting grassroots
                            innovations, participants offered a rich tapestry of
                            perspectives and actionable solutions. The
                            competition not only honed participants' research
                            and writing acumen but also instilled a profound
                            sense of agency and responsibility towards shaping
                            India's future.
                        </p>
                        <p>
                            Concurrently, the Speech Contest, themed "सशक्त
                            उत्तराखंड@2025: आगामी मार्ग और चुनौतियां" ('Sashakt
                            Uttarakhand @2025': Challenges and Way ahead),
                            provided a dynamic platform for impassioned orators
                            to delineate a trajectory for the future of
                            Uttarakhand. Participants engaged in impassioned
                            discourse, envisioning sustainable development
                            paradigms and proffering pragmatic strategies to
                            surmount pressing environmental and socio-economic
                            challenges. The competition not only showcased
                            participants' oratory prowess but also catalyzed
                            meaningful dialogues about the region's
                            socio-economic trajectory and collective
                            aspirations.
                        </p>
                    </div>

                    <div className="Essay-description" data-aos="fade-right">
                        <p>
                            Kinchit Prayas Foundation's commitment to conducting
                            such student-centric activities was exemplified by
                            its meticulous planning and inclusive approach. By
                            selecting themes that resonated with students'
                            academic interests and societal concerns, the
                            foundation ensured that participants were driven to
                            delve deep into the heart of the topics at hand.
                            Moreover, the foundation actively involved students
                            in the planning and execution of the events,
                            providing them with invaluable leadership and
                            organizational skills.
                        </p>
                        <p>
                            Furthermore, the foundation leveraged its extensive
                            network of partners to enrich the contests with
                            mentorship opportunities and expert insights.
                            Through strategic collaborations with academic
                            institutions, industry leaders, and non-profit
                            organizations, participants gained access to diverse
                            perspectives and resources, thereby enhancing the
                            depth and impact of their contributions.
                        </p>
                        <p>
                            In essence, Kinchit Prayas Foundation's
                            student-centric approach is rooted in its belief in
                            the transformative power of education,
                            collaboration, and empowerment. By nurturing the
                            talents, passions, and aspirations of students, the
                            foundation endeavors to cultivate a generation of
                            thoughtful leaders, innovators, and changemakers who
                            are equipped to address the challenges of today and
                            shape a brighter tomorrow for themselves and their
                            communities.
                        </p>
                    </div>
                    <div className="content-image2 image" data-aos="fade-left">
                        <img src={EssayImage2} alt="not loaded" />
                    </div>
                </div>
            </div>
            <div className="Flagship-page1-gallery">
                <h2 data-aos="fade-right">Our future leaders</h2>
                <div className="grid-col3-row2">
                    <img
                        src={EssayImage1}
                        alt="not loaded"
                        data-aos="fade-left"
                        data-aos-offset="100"
                    />
                    <img
                        src={BannerImage2}
                        alt="not loaded"
                        data-aos="fade-left"
                        data-aos-offset="100"
                    />
                    <img
                        src={EssayImage4}
                        alt="not loaded"
                        data-aos="fade-left"
                        data-aos-offset="100"
                    />
                    <img
                        src={EssayImage5}
                        alt="not loaded"
                        data-aos="fade-right"
                        data-aos-offset="100"
                    />
                    <img
                        src={EssayImage6}
                        alt="not loaded"
                        data-aos="fade-right"
                        data-aos-offset="100"
                    />
                    <img
                        src={EssayImage7}
                        alt="not loaded"
                        data-aos="fade-right"
                        data-aos-offset="100"
                    />
                </div>
            </div>
        </div>
    );
};

export default StudentCentricActivities;
