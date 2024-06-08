import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Chairman from "../../../../Image/OurTeam/Chairman.jpg";
import Director from "../../../../Image/OurTeam/Director.jpg";

import "../../../css/TeamCss/Team.css";

const BoardDirector = () => {
    AOS.init({ duration: 1500 });

    return (
        <div className="Founder-page-master">
            <div className="Founder-Page-banner">
                <h1 data-aos="fade-up" data-aos-duration="3000">
                    OUR FOUNDERS{" "}
                </h1>
            </div>
            <div className="founder1-content-1-wrapper">
                <div className="founder-image" data-aos="fade-right">
                    <img src={Chairman} alt="not loaded" />
                </div>
                <div className="Founder-description" data-aos="fade-left">
                    <p>
                        <span className="quote">"</span>
                        As Chairman of our esteemed, Kinchit Prayas Foundation,
                        I stand before you today with a profound sense of
                        commitment to our mission and vision. Our organization's
                        journey towards positive social change is one that I
                        undertake with unwavering dedication and resolve. I
                        pledge to lead by example, fostering a culture of
                        integrity, transparency, and accountability within our
                        team and beyond. My commitment extends to nurturing
                        strong partnerships with stakeholders, empowering our
                        team members to reach their full potential, and
                        advocating tirelessly for the causes we champion.
                        Together, let us forge ahead with courage and
                        determination, knowing that our collective efforts have
                        the power to transform lives and communities for the
                        better. Today and every day, I reaffirm my pledge to
                        serve with passion, purpose, and unwavering commitment
                        to our shared goals.
                        <span className="quote">"</span>
                    </p>
                    <div className="name-desg-Chairman name-desg">
                        <h4>Mr. PRINCE YADAV </h4>
                        <h3>CHAIRMAN</h3>
                    </div>
                </div>
            </div>
            <div className="Director-content2-wrapper">
                <div className="Director-description" data-aos="fade-right">
                    <p>
                        <span className="quote">"</span>
                        As Director of our dynamic NGO, I am deeply committed to
                        driving forward our mission of positive social impact
                        with unwavering determination and dedication. My
                        commitment to our cause is not just a professional
                        obligation but a personal passion that fuels my every
                        action. I pledge to lead our team with empathy,
                        resilience, and a relentless pursuit of excellence,
                        empowering each member to contribute their unique
                        talents and perspectives towards achieving our
                        collective goals. I am committed to fostering a culture
                        of collaboration, innovation, and inclusivity, where
                        every voice is heard, valued, and respected. Together,
                        let us embark on this journey with a shared sense of
                        purpose and resolve, knowing that our efforts today will
                        shape a brighter tomorrow for generations to come. I
                        pledge to stand by our mission, to advocate tirelessly
                        for those in need, and to lead with integrity and
                        compassion in all that I do.
                        <span className="quote">"</span>
                    </p>
                    <div className="name-desg-Director name-desg">
                        <h4>Mr. DEEPAK GAIROLA</h4>
                        <h3>DIRECTOR</h3>
                    </div>
                </div>
                <div className="Director-image" data-aos="fade-left">
                    <img src={Director} alt="not loaded" />
                </div>
            </div>
        </div>
    );
};

export default BoardDirector;
