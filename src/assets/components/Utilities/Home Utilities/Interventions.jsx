import React from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../../../css/HomeCss/interventions.css";
/**/
import soi_image1 from "../../../../Image/homepage/interventions/interventions_image_1.jpg";
import soi_image2 from "../../../../Image/homepage/interventions/interventions_image_2.jpg";
import soi_image3 from "../../../../Image/homepage/interventions/interventions_image_3.jpg";
import soi_image4 from "../../../../Image/homepage/interventions/interventions_image_4.jpg";
import soi_image5 from "../../../../Image/homepage/interventions/interventions_image_5.jpg";
import soi_image6 from "../../../../Image/homepage/interventions/interventions_image_6.jpg";
/**/
const Interventions = () => {
    AOS.init({ duration: 1500 });

    return (
        <div>
            <div className="interventions-section">
                <hr className="interventions-line-break" data-aos="fade-left" />
                <div className="interventions-heading" data-aos="fade-right">
                    <h1>Sectors of Intervention</h1>
                </div>
                <hr className="interventions-line-break" data-aos="fade-left" />
                <div className="interventions-grid">
                    <div
                        className="interventions-grid-item"
                        data-aos="fade-right"
                    >
                        <Link to="/workdone/washSector">
                            <img
                                className="interventions-image"
                                src={soi_image1}
                                alt="Interventions Image"
                            />
                        </Link>
                        <h3>WASH SECTOR </h3>
                        <p>
                            Growing up in a clean and safe environment is every
                            child's right. Access to clean water, basic toilets,
                            and good hygiene practices not only keeps children
                            thriving, but also gives them a healthier start in
                            life and we at Kinchit Prayas are committed towards
                            working for it.
                        </p>
                        <div className="interventions-know-more-container">
                            <div className="interventions-know-more">
                                <h4>Know More</h4>
                            </div>
                        </div>
                    </div>
                    <div
                        className="interventions-grid-item"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <Link to="/FlagShipEvents/UttrakhandDevelopmentExibition">
                            <img
                                className="interventions-image"
                                src={soi_image2}
                                alt="Interventions Image"
                            />
                        </Link>
                        <h3>LIVELIHOOD </h3>
                        <p>
                            Kinchit Prayas foundation aims to create robust
                            livelihood opportunities to enable households to
                            earn more and lead a healthier life.
                        </p>
                        <div className="interventions-know-more-container">
                            <Link to="/FlagShipEvents/UttrakhandDevelopmentExibition">
                                <div className="interventions-know-more">
                                    <h4>Know More</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="interventions-grid-item"
                        data-aos="fade-left"
                    >
                        <Link to="/FlagShipEvents/EqualityAwareness">
                            <img
                                className="interventions-image"
                                src={soi_image3}
                                alt="Interventions Image"
                            />
                        </Link>
                        <h3>EDUCATION </h3>
                        <p>
                            An educated individual can benifit his /her personal
                            growth as well as the society's too. We are working
                            to bring interventions in this sector, as
                            much as possible.
                        </p>
                        <div className="interventions-know-more-container">
                            <Link to="/FlagShipEvents/EqualityAwareness">
                                <div className="interventions-know-more">
                                    <h4>Know More</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="interventions-grid-item"
                        data-aos="fade-right"
                    >
                        <Link to="/work/Grampanchayat">
                            <img
                                className="interventions-image"
                                src={soi_image4}
                                alt="Interventions Image"
                            />
                        </Link>
                        <h3>EMPOWERING GRASSROOTS </h3>
                        <p>
                            Our team is actively dedicated towards empowerment
                            of people at grassroot level. By empowering the
                            marginalized communities, driving sustainable
                            development, fostering social innovation, promoting
                            civic engagement, amplifying local voices, enhancing
                            social capital and strengthening local governance,
                            grassroots initiatives contribute to the overall
                            development and well-being of the nation.
                        </p>
                        <div className="interventions-know-more-container">
                            <Link to="/work/Grampanchayat">
                                <div className="interventions-know-more">
                                    <h4>Know More</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="interventions-grid-item"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <Link to="/work/ConservationandCulture">
                            <img
                                className="interventions-image"
                                src={soi_image5}
                                alt="Interventions Image"
                            />
                        </Link>
                        <h3>PRESERVING TRADITION </h3>
                        <p>
                            Preserving tradition is vital for representing our
                            collective knowledge, tradition and customs. Our
                            team actively works for preserving as well promoting
                            our culture as well as tradition through various
                            activities.
                        </p>
                        <div className="interventions-know-more-container">
                            <Link to="/work/ConservationandCulture">
                                <div className="interventions-know-more">
                                    <h4>Know More</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="interventions-grid-item"
                        data-aos="fade-left"
                    >
                        <Link to="/workdone/skillingCommunity">
                            <img
                                className="interventions-image"
                                src={soi_image6}
                                alt="Interventions Image"
                            />
                        </Link>
                        <h3>SKILLING PEOPLE </h3>
                        <p>
                            India's large and youthful population holds immense
                            potential to transform the country into a global
                            powerhouse and skill hub. At Kinchit Prayas, we
                            associate with various govt. institutions and work
                            towards implementation of their schemes to benifit
                            people.
                        </p>
                        <div className="interventions-know-more-container">
                            <Link to="/workdone/skillingCommunity">
                                <div className="interventions-know-more">
                                    <h4>Know More</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interventions;
