import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../../css/WorkDoneCss/ConservationandCulture.css";
import cimage1 from "../../../../../Image/culture/culture1.jpg";
import cimage2 from "../../../../../Image/culture/culture2.jpg";
import cimage3 from "../../../../../Image/culture/culture3.jpg";
import cimage4 from "../../../../../Image/culture/culture4.jpg";
import cimage5 from "../../../../../Image/culture/culture5.jpg";
import cimage6 from "../../../../../Image/culture/culture6.jpg";
import cimage7 from "../../../../../Image/culture/culture7.jpg";
import clogo from "../../../../../Image/culture/logo.jpg";

const ConservationandCulture = () => {
    AOS.init({ duration: 2000 });
    return (
        <div className="culture-page-master">
            <section className="culture-environment-protection">
                <div className="culture-background-image">
                    <div className="culture-overlay">
                        <h1 data-aos="fade-up">SMALL STEPS, BIG IMPACTS</h1>
                    </div>
                </div>
                <div className="culture-content-wrapper">
                    <div
                        className="culture-content-image"
                        data-aos="fade-right"
                    >
                        <img
                            src={cimage1}
                            alt="Environmental Conservation"
                        />
                    </div>
                    <div
                        className="culture-content-description"
                        data-aos="fade-left"
                    >
                        <p>
                            Kinchit Prayas Foundation is a beacon of hope in the
                            realm of environmental conservation, pioneering
                            impactful initiatives to preserve and restore our
                            planet's delicate ecosystems. Through our tireless
                            dedication and unwavering commitment, we lead the
                            charge in fostering a sustainable future for
                            generations to come.
                        </p>
                        <p>
                            At the heart of our efforts lies our tree plantation
                            drives, where we actively engage communities in
                            planting and nurturing trees to combat deforestation
                            and mitigate the effects of climate change. These
                            drives serve as a powerful symbol of our collective
                            responsibility to protect and replenish our natural
                            environment.
                        </p>
                    </div>
                </div>
                <div className="culture-content-wrapper">
                    <div
                        className="culture-content-description"
                        data-aos="fade-right"
                    >
                        <p>
                            Central to our mission is community awareness and
                            empowerment. Through educational programs,
                            workshops, and outreach initiatives, we equip
                            individuals with the knowledge and tools they need
                            to become environmental stewards in their own right.
                            By fostering a deep sense of connection and
                            responsibility towards nature, we inspire a
                            grassroots movement of change-makers dedicated to
                            safeguarding our precious Earth.
                        </p>
                        <p>
                            Together, through tree plantation drives,
                            sustainable practices, and community engagement, we
                            are forging a path towards a greener, more
                            sustainable future.
                        </p>
                    </div>
                    <div className="culture-content-image" data-aos="fade-left">
                        <img src={cimage2} alt="Community Engagement" />
                    </div>
                </div>
            </section>
            <section className="culture-preserving-tradition">
                <div className="culture-content-wrapper">
                    <div className="culture-content-image" data-aos="fade-up">
                        <img src={cimage3}alt="Traditional Handicrafts" />
                    </div>
                    <div
                        className="culture-content-description"
                        data-aos="fade-left"
                    >
                        <h2>Preserving Tradition</h2>
                        <p>
                            Kinchit Prayas Foundation is deeply committed to the
                            preservation of tradition and culture, recognizing
                            them as essential pillars of our collective identity
                            and heritage. Through our meticulously organized
                            mega exhibitions, we showcase the rich tapestry of
                            local handicrafts, allowing artisans to display
                            their remarkable skills and creations to a wider
                            audience. These exhibitions serve as dynamic
                            platforms for artisans to not only exhibit their
                            craft but also share the stories and cultural
                            significance behind each piece.
                        </p>
                        <div className="culture-aim" data-aos="fade-left">
                            <h3>Our Aim</h3>
                            <p>
                                By promoting these events, we aim to foster a
                                renewed appreciation for traditional art forms
                                and techniques while providing invaluable
                                support to local artisans and craftspeople.
                                Visitors are invited to immerse themselves in
                                the vibrant colors, intricate designs, and
                                timeless beauty of our cultural heritage,
                                gaining a deeper understanding of the customs
                                and traditions that have been passed down
                                through generations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="culture-content-wrapper">
                    <div
                        className="culture-content-description"
                        data-aos="fade-right"
                    >
                        <h2>About DC Handicrafts</h2>
                        <p>
                            It is an agency under the Ministry of Textiles in
                            India. It is responsible for the promotion,
                            development, and regulation of the handicrafts
                            sector in the country. The Ministry of Textiles
                            oversees various aspects of textile and handicraft
                            industries, including policy formulation,
                            implementation of schemes, and support for artisans
                            and craftsmen. The Development Commissioner for
                            Handicrafts plays a crucial role in providing
                            support and assistance to artisans, organizing
                            exhibitions, facilitating training programs, and
                            promoting Indian handicrafts both domestically and
                            internationally.
                        </p>
                    </div>
                    <div className="culture-content-image" data-aos="fade-left">
                        <img src={clogo} alt="DC Handicrafts Logo" />
                    </div>
                </div>
                <div className="culture-content-wrapper  culture-description-section">
                    <div
                        className="culture-exhibition-grid"
                        data-aos="fade-right"
                    >
                        <img
                            src={cimage4}
                            alt="Exhibition in Uttarakhand"
                        />
                        <img
                            src={cimage5}
                            alt="Exhibition in Uttarakhand"
                        />
                        <img
                            src={cimage6}
                            alt="Exhibition in Uttarakhand"
                        />
                        <img
                            src={cimage7}
                            alt="Exhibition in Uttarakhand"
                        />
                    </div>
                    <div
                        className="culture-content-description"
                        data-aos="fade-left"
                    >
                        <p>
                            Through these exhibitions, we bridge the gap between
                            past and present, ensuring that our cultural legacy
                            remains alive and thriving for years to come. By
                            preserving and promoting tradition and culture,
                            Kinchit Prayas Foundation strives to celebrate
                            diversity, promote inclusivity, and inspire a
                            renewed sense of pride in our shared heritage. Join
                            us as we work tirelessly to safeguard the traditions
                            that define who we are as a people.
                        </p>
                        <p>
                            As an empanelled partner with DC Handicrafts,
                            Ministry of Textiles, Kinchit Prayas Foundation
                            extends its reach and impact in the preservation and
                            promotion of traditional crafts and artisans. This
                            prestigious partnership underscores our commitment
                            to supporting and uplifting the handicrafts sector,
                            which serves as a vital source of livelihood for
                            countless artisans across the country.
                        </p>
                        <p>
                            Through this collaboration, we leverage our
                            expertise and resources to facilitate greater access
                            to markets, training, and opportunities for
                            artisans, empowering them to thrive in today's
                            competitive landscape. By aligning our efforts with
                            the vision and initiatives of the Ministry of
                            Textiles, we contribute to the broader goals of
                            promoting cultural heritage, preserving traditional
                            crafts, and fostering economic growth in rural
                            communities.
                        </p>
                        <p>
                            As an empanelled partner, Kinchit Prayas Foundation
                            remains steadfast in its dedication to advancing the
                            interests of artisans and promoting the cultural
                            richness of our nation. Together with the Ministry
                            of Textiles, we strive to create a more inclusive
                            and sustainable future for the handicrafts sector,
                            ensuring that traditional crafts continue to
                            flourish for generations to come.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConservationandCulture;
