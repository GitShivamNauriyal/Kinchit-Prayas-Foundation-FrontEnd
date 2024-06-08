import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import KinchitLogo from "../../../../../Image/kinchitLogo.png";
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
    };

    return (
        <>
            <div
                className={`overlay ${showMediaIcons ? "show" : ""}`}
                onClick={toggleMobileMenu}
            ></div>
            <nav className={showMediaIcons ? "onhamClick" : "main-nav"}>
                <div className="logo-hamburger">
                    <div className="nav-logo">
                        <img src={KinchitLogo} alt="Logo image" />
                    </div>
                    <div className="Navbar-heading">
                        <h2>KINCHIT PRAYAS FOUNDATION</h2>
                    </div>

                    <div className="hamburger-menu">
                        <a href="#" onClick={toggleMobileMenu}>
                            <MenuIcon
                                style={{
                                    height: "2em",
                                    width: "3em",
                                    color: "grey",
                                }}
                            />
                        </a>
                    </div>
                </div>

                <div
                    className={
                        showMediaIcons
                            ? "menu-link mobile-menu-link"
                            : "nav-link-container"
                    }
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
                            <Link to="">
                                Our Works
                                <ExpandMoreIcon
                                    className={
                                        dropdowns.ourWorks
                                            ? "rotate-btn-icon"
                                            : "arrow-button-icon"
                                    }
                                />
                            </Link>
                            {dropdowns.ourWorks && (
                                <ul className="dropdown">
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
                                </ul>
                            )}
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
                            <Link to="">
                                Flagship Events
                                <ExpandMoreIcon
                                    className={
                                        dropdowns.flagshipEvents
                                            ? "rotate-btn-icon"
                                            : "arrow-button-icon"
                                    }
                                />
                            </Link>
                            {dropdowns.flagshipEvents && (
                                <ul className="dropdown">
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
                                </ul>
                            )}
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
                </div>
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
