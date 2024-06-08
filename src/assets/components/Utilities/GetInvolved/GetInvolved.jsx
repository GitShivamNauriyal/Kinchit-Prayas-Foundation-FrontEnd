import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../css/GetInvolvedCss/GetInvolved.css";
import { Link } from "react-router-dom";
const GetInvolved = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        Context: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const contactDetails = async () => {
        try {
            const response = await axios.post(
                "https://api.kinchitprayas.org/api/",
                {
                    Name: formData.Name,
                    Email: formData.Email,
                    Context: formData.Context,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            localStorage.setItem(
                "Contact_detail",
                JSON.stringify(response.data)
            );
        } catch (error) {
            console.error("Error storing Contact data:", error);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        contactDetails();
        alert(
            "Thanks for contacting Us We have got your Message We will contact you soon!"
        );
        navigate("/");
    };

    return (
        <div className="get-involved-page-master">
            <div className="get-involved-page">
                <h1 className="get-involved-page-title">
                    Join Our Team: Internship and Volunteering Opportunities
                    with Kinchit Prayas Foundation
                </h1>

                <section className="get-involved-page-section">
                    <h2 className="get-involved-page-section-title">
                        Introduction:
                    </h2>
                    <p className="get-involved-page-section-content">
                        Welcome to the Kinchit Prayas Foundation's internship
                        and volunteering program! We are dedicated to nurturing
                        talent, providing enriching experiences, and fostering
                        positive change within our community. Whether you are a
                        student eager to gain hands-on experience or an
                        individual passionate about making a difference, we
                        offer opportunities that align with your aspirations and
                        values.
                    </p>
                </section>

                <section className="get-involved-page-section">
                    <h2 className="get-involved-page-section-title">
                        Why Join Us:
                    </h2>
                    <ul
                        className="get-involved-page-list"
                        style={{ listStyleType: "disc" }}
                    >
                        <li className="get-involved-page-list-item">
                            Gain valuable experience and skills in your area of
                            interest.
                        </li>
                        <li className="get-involved-page-list-item">
                            Make a tangible impact in your community and beyond.
                        </li>
                        <li className="get-involved-page-list-item">
                            Build connections and forge relationships with
                            professionals in your field.
                        </li>
                        <li className="get-involved-page-list-item">
                            Contribute to projects that resonate with your
                            passions and values.
                        </li>
                        <li className="get-involved-page-list-item">
                            Receive recognition and appreciation for your
                            dedication and efforts.
                        </li>
                    </ul>
                </section>

                <section className="get-involved-page-section">
                    <h2 className="get-involved-page-section-title">
                        Internship Opportunities:
                    </h2>
                    <p className="get-involved-page-section-content">
                        At Kinchit Prayas Foundation, our internship program
                        offers students the chance to gain practical experience
                        in their chosen field while collaborating with
                        experienced professionals. From on-ground experience to
                        research and development, we provide a diverse range of
                        opportunities for growth and learning. Interns can
                        expect mentorship, meaningful projects, and a supportive
                        environment to flourish and develop their skills.
                    </p>
                </section>

                <div className="get-involved-internship-button-container">
                    <Link to="/GetInvolved/Internship">
                        <div className="get-involved-internship-button">
                            <h2>Internship Form</h2>
                        </div>
                    </Link>
                </div>

                <section className="get-involved-page-section">
                    <h2 className="get-involved-page-section-title">
                        Volunteering Opportunities:
                    </h2>
                    <p className="get-involved-page-section-content">
                        Joining our volunteering program allows individuals to
                        contribute their time and energy towards meaningful
                        initiatives that positively impact our community.
                        Whether it involves participating in environmental
                        projects, organizing events, or supporting social
                        causes, volunteers play a vital role in realizing our
                        mission. We welcome individuals from all backgrounds and
                        skill sets to join us in creating positive change.
                    </p>
                </section>

                <div className="get-involved-internship-button-container">
                    <Link to="/GetInvolved/Internship">
                        <div className="get-involved-internship-button">
                            <h2>Volunter Form</h2>
                        </div>
                    </Link>
                </div>

                <section className="get-involved-page-section">
                    <h2 className="get-involved-page-section-title">
                        How to Apply:
                    </h2>
                    <p className="get-involved-page-section-content">
                        To apply for an internship or volunteering opportunity
                        with Kinchit Prayas Foundation, please fill out our
                        online application form. Ensure that you include your
                        resume, cover letter, and any relevant portfolio or work
                        samples. Our team will carefully review your application
                        and contact you to schedule an interview if you are
                        selected for further consideration.
                    </p>
                </section>

                <section className="get-involved-page-section">
                    <p className="get-involved-page-section-content">
                        Join us in our mission to create positive change and
                        empower future leaders. Together, let's make a
                        difference and inspire others to do the same.
                    </p>
                </section>

                <section className="get-involved-page-section">
                    <h1 className="get-involved-page-section-title">
                        Share Your Ideas with Us
                    </h1>
                    <p className="get-involved-page-section-content">
                        You can share your ideas , In which area we can work to
                        make the devlopment! Fill the form to share your idea
                    </p>
                </section>
                <div className="contact-form-container">
                    <h2 id="contact-us-id">Contact Us</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                placeholder="Enter your name"
                                type="text"
                                id="name"
                                name="Name"
                                value={formData.Name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                placeholder="Enter your email address"
                                type="email"
                                id="email"
                                name="Email"
                                value={formData.Email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="context">Message:</label>
                            <textarea
                                placeholder="Your kind words here..."
                                id="context"
                                name="Context"
                                value={formData.Context}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="contactUsSubmitButton">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetInvolved;
