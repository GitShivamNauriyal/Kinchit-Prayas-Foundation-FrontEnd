import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdExpandMore, MdMenu } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";
import KinchitLogo from "../../../../../assets/images/kinchitLogo.png";
import DonationForm from "../../DonationForm Utilities/DonationForm";
import "../../../../css/CommonUtilitiesCss/Nav.css";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [dropdowns, setDropdowns] = useState({
        flagshipEvents: false,
        ourWorks: false,
    });
    const [showForm, setShowForm] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1050);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1050);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMouseEnter = (dropdown) => {
        if (!isMobile) {
            setDropdowns((prevState) => ({
                ...prevState,
                [dropdown]: true,
            }));
        }
    };

    const handleMouseLeave = (dropdown) => {
        if (!isMobile) {
            setDropdowns((prevState) => ({
                ...prevState,
                [dropdown]: false,
            }));
        }
    };

    const handleDropdownClick = (dropdown, e) => {
        if (isMobile) {
            e.stopPropagation();
            setDropdowns((prevState) => {
                const newDropdowns = Object.keys(prevState).reduce(
                    (acc, key) => {
                        acc[key] = false;
                        return acc;
                    },
                    {}
                );
                return {
                    ...newDropdowns,
                    [dropdown]: !prevState[dropdown],
                };
            });
        }
    };

    const toggleFormVisibility = () => {
        setShowForm((prevState) => !prevState);
    };

    const toggleMobileMenu = () => {
        setShowMediaIcons((prevState) => !prevState);
    };

    const closeMobileMenu = () => {
        setShowMediaIcons(false);
        setDropdowns({
            flagshipEvents: false,
            ourWorks: false,
        });
    };

    return (
        <>
            <AnimatePresence>
                {showMediaIcons && (
                    <motion.div
                        className="overlay show"
                        onClick={toggleMobileMenu}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                )}
            </AnimatePresence>
            <nav className={`main-nav ${showMediaIcons ? "onhamClick" : ""}`}>
                <div className="logo-hamburger">
                    <div className="nav-logo">
                        <img loading="lazy" src={KinchitLogo} alt="Logo image" />
                    </div>
                    <div className="Navbar-heading">
                        <h2>KINCHIT PRAYAS FOUNDATION</h2>
                    </div>

                    <div className="hamburger-menu">
                        <a href="#" onClick={toggleMobileMenu}>
                            <MdMenu
                                style={{
                                    height: "2em",
                                    width: "3em",
                                    color: "grey",
                                }}
                            />
                        </a>
                    </div>
                </div>

                <AnimatePresence initial={false}>
                    {(!isMobile || showMediaIcons) && (
                        <motion.div
                            key="mobile-menu"
                            className={
                                showMediaIcons
                                    ? "menu-link mobile-menu-link"
                                    : "nav-link-container"
                            }
                            initial={isMobile ? { height: 0, opacity: 0 } : false}
                            animate={isMobile ? { height: "auto", opacity: 1 } : false}
                            exit={isMobile ? { height: 0, opacity: 0 } : false}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ overflow: isMobile ? "hidden" : "visible" }}
                        >
                            <ul className="nav-links" onClick={closeMobileMenu}>
                                <li className="nav-link-item">
                                    <Link to="/">Home</Link>
                                </li>

                                <li className="nav-link-item a-elements-navbar">
                                    <Link to="/Affilation">Affiliations</Link>
                                </li>
                                <li
                                    className="nav-link-item a-elements-navbar"
                                    onMouseEnter={() => handleMouseEnter("ourWorks")}
                                    onMouseLeave={() => handleMouseLeave("ourWorks")}
                                    onClick={(e) => handleDropdownClick("ourWorks", e)}
                                >
                                    <a style={{ cursor: 'pointer' }} onClick={(e) => e.preventDefault()}>
                                        Our Works
                                        <MdExpandMore
                                            className={`arrow-button-icon ${dropdowns.ourWorks ? "rotate-btn-icon" : ""
                                                }`}
                                        />
                                    </a>
                                    <AnimatePresence>
                                        {dropdowns.ourWorks && (
                                            <motion.ul
                                                className="dropdown"
                                                onClick={(e) => { e.stopPropagation(); closeMobileMenu(); }}
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                                style={{ overflow: "hidden" }}
                                            >
                                                <li className="element-dropdown">
                                                    <Link to="/workdone/skillingCommunity">
                                                        Skilling Community
                                                    </Link>
                                                </li>
                                                <li className="element-dropdown">
                                                    <Link to="/workdone/washSector">
                                                        Wash Sector
                                                    </Link>
                                                </li>
                                                <li className="element-dropdown">
                                                    <Link to="/work/CSR">
                                                        CSR Activities
                                                    </Link>
                                                </li>
                                                <li className="element-dropdown">
                                                    <Link to="/work/ConservationandCulture">
                                                        Conservation and Culture
                                                    </Link>
                                                </li>
                                                <li className="element-dropdown">
                                                    <Link to="/work/Grampanchayat">
                                                        SDGs Localisation
                                                    </Link>
                                                </li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li
                                    className="nav-link-item a-elements-navbar"
                                    onMouseEnter={() =>
                                        handleMouseEnter("flagshipEvents")
                                    }
                                    onMouseLeave={() =>
                                        handleMouseLeave("flagshipEvents")
                                    }
                                    onClick={(e) =>
                                        handleDropdownClick("flagshipEvents", e)
                                    }
                                >
                                    <a style={{ cursor: 'pointer' }} onClick={(e) => e.preventDefault()}>
                                        Flagship Events
                                        <MdExpandMore
                                            className={`arrow-button-icon ${dropdowns.flagshipEvents ? "rotate-btn-icon" : ""
                                                }`}
                                        />
                                    </a>
                                    <AnimatePresence>
                                        {dropdowns.flagshipEvents && (
                                            <motion.ul
                                                className="dropdown"
                                                onClick={(e) => { e.stopPropagation(); closeMobileMenu(); }}
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                                style={{ overflow: "hidden" }}
                                            >
                                                <li className="element-dropdown">
                                                    <Link to="/FlagShipEvents/UttarakhandMahotsav">
                                                        Uttarakhand Mahotsav
                                                    </Link>
                                                </li>
                                                <li className="element-dropdown">
                                                    <Link to="/FlagShipEvents/UttrakhandDevelopmentExibition">
                                                        Uttrakhand Development Exhibition
                                                    </Link>
                                                </li>
                                                <li className="element-dropdown">
                                                    <Link to="/FlagShipEvents/EqualityAwareness">
                                                        Seminars and Workshops
                                                    </Link>
                                                </li>
                                                <li className="element-dropdown">
                                                    <Link to="/FlagShipEvents/StudentCentricActivities">
                                                        Student Centric Activities
                                                    </Link>
                                                </li>
                                                <li className="element-dropdown">
                                                    <Link to="/FlagShipEvents/EarthDay">
                                                        Earth Day
                                                    </Link>
                                                </li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li className="nav-link-item">
                                    <Link to="/GetInvolved">Get Involved</Link>
                                </li>
                                <li className="nav-link-item">
                                    <Link to="/Team/OurFounder">Our Founder</Link>
                                </li>
                                <li className="nav-link-item a-elements-navbar">
                                    <Link to="/JABRAC">JBARC</Link>
                                </li>
                                <li className="nav-link-item a-elements-navbar">
                                    <Link to="/gallery">Gallery</Link>
                                </li>
                                <li className="nav-link-item a-elements-navbar ">
                                    <div className="mobile-support-button">
                                        <div
                                            className="supportbar"
                                            onClick={toggleFormVisibility}
                                        >
                                            <Link to="">Support Us</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="supportbar-container">
                    <div className="supportbar" onClick={toggleFormVisibility}>
                        <Link to="">Support Us</Link>
                    </div>
                </div>
            </nav>

            {showForm && <DonationForm closeOpen={toggleFormVisibility} />}
        </>
    );
};

export default Navbar;
