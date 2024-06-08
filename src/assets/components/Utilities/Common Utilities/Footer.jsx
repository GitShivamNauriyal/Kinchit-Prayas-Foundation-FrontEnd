import React from "react";
import { Link } from "react-router-dom";
import instagramLogo from "../../../../Image/facebook.jpg";
import facebookLogo from "../../../../Image/instagram.jpg";
import youtubeLogo from "../../../../Image/youtube.png";
import twitterLogo from "../../../../Image/twitter.png";
import linkedInLogo from "../../../../Image/linkedIn.jpg";
import KinchitLogo from "../../../../Image/kinchitLogo.png";
import termsAndConditions from "../../../pdfs/Term&ConditionsKPF.pdf";
import privacyPolicy from "../../../pdfs/PRIVACYPOLICYKPFWebsite.pdf";
import "../../../css/CommonUtilitiesCss/Footer.css";

export default function Footer() {
    return (
        <div className="footer-master-div">
            <div className="footer-container">
                <div className="footer-margin">
                    <div className="footer-div-grid div1">
                        <div className="heading-center-more heading-footer">
                            Reports
                        </div>
                        <li className="li-items-footer">
                            <Link className="anchor-tag-items-footer" to="/">
                                Organisation Policies
                            </Link>
                        </li>
                        <li className="li-items-footer">
                            <Link className="anchor-tag-items-footer" to="/">
                                Annual Reports
                            </Link>
                        </li>
                        <li className="li-items-footer">
                            <Link className="anchor-tag-items-footer" to="/">
                                Organisation Profile
                            </Link>
                        </li>
                        <li className="li-items-footer">
                            <Link className="anchor-tag-items-footer" to="/">
                                Compliances
                            </Link>
                        </li>
                        <li className="li-items-footer">
                            <Link className="anchor-tag-items-footer" to="/">
                                Address
                            </Link>
                        </li>
                    </div>
                    <div className="footer-div-grid div2">
                        <div className="heading-center-more heading-footer">
                            More
                        </div>
                        <li className=" li-items-footer">
                            <Link
                                className="anchor-tag-items-footer"
                                to="/workdone/skillingCommunity"
                            >
                                Our Works
                            </Link>
                        </li>
                        <li className=" li-items-footer">
                            <Link
                                className="anchor-tag-items-footer"
                                to="/GetInvolved"
                            >
                                Careers
                            </Link>
                        </li>
                        <li className=" li-items-footer">
                            <Link className="anchor-tag-items-footer" to="">
                                Products
                            </Link>
                        </li>
                        <li className=" li-items-footer">
                            <a
                                className="anchor-tag-items-footer"
                                target="blank"
                                href="#contact-us-id"
                            >
                                Reach us
                            </a>
                        </li>
                        <li className=" li-items-footer">
                            <a
                                className="anchor-tag-items-footer"
                                target="blank"
                                href={termsAndConditions}
                            >
                                Terms & Conditions
                            </a>
                        </li>
                        <li className=" li-items-footer">
                            <a
                                className="anchor-tag-items-footer"
                                target="blank"
                                href={privacyPolicy}
                            >
                                Privacy Policy
                            </a>
                        </li>
                    </div>
                    <div className="footer-div-grid div3">
                        <p className="heading-footer">Connect With Us</p>
                        <div className="icons-footer">
                            <a
                                className="socialMediaFooterYoutube"
                                target="blank"
                                href="https://youtube.com/@kinchitprayasfoundation?si=oFR9JfJCMkouqVS_"
                            >
                                <img
                                    src={youtubeLogo}
                                    className="youtube-link link-social-media-footer"
                                    alt="..."
                                />
                            </a>
                            <a
                                className="socialMediaFooterInstagram"
                                target="blank"
                                href="https://www.facebook.com/profile.php?id=61555709288622&mibextid=ZbWKwL"
                            >
                                <img
                                    src={instagramLogo}
                                    className="instagram-link link-social-media-footer"
                                    alt="..."
                                />
                            </a>
                            <a
                                className="socialMediaFooterFacebook"
                                target="blank"
                                href="https://www.instagram.com/kinchitprayasfoundation?igsh=MmoybG14bGVmNmZk"
                            >
                                <img
                                    src={facebookLogo}
                                    className="facebook-link link-social-media-footer"
                                    alt="..."
                                />
                            </a>
                            <a
                                className="socialMediaFooterTwitter"
                                target="blank"
                                href="https://x.com/KinchitPrayas"
                            >
                                <img
                                    src={twitterLogo}
                                    className="twitter-link link-social-media-footer"
                                    alt="..."
                                />
                            </a>
                            <a
                                className="socialMediaFooterTwitter"
                                target="blank"
                                href="https://www.linkedin.com/in/kinchit-prayas-foundation-b063472b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            >
                                <img
                                    src={linkedInLogo}
                                    className="linkedin-link link-social-media-footer"
                                    alt="..."
                                />
                            </a>
                        </div>
                        <p className="footer-address footer-address-dehradun">
                            Dehradun, India
                        </p>
                        <p className="footer-address">
                            Email: kinchitprayas@gmail.com,
                        </p>
                        <p className="footer-address">
                            info.foundation@gmail.com
                        </p>
                        <p className="footer-address">
                            Service Hours: 24/7, 365 days
                        </p>
                    </div>
                    <hr className="line-break-footer" />
                    <div className="footer-div-grid div4 footer-div4">
                        <img
                            className="footer-kinchit-image"
                            alt="kinchit logo"
                            src={KinchitLogo}
                        />
                        <p className="footer-copyright-text">
                            &#169; 2024 Kinchit Prayas Foundation. All rights
                            reserved. Privacy Policy Terms of Use
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
