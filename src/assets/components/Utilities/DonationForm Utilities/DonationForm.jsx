import React, { useEffect, useState } from "react";
import "../../../css/DonationFormCss/DonationForm.css";
import axios from "axios";
import KinchitLogo from "../../../../Image/kinchitLogo.png";
import { PulseLoader } from "react-spinners";

const DonationForm = ({ closeOpen }) => {
    const [loading, setLoading] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const [Form, setForm] = useState(true);

    const closingForm = () => {
        setPopUp(true); // Show the popup
        setTimeout(() => {
            setPopUp(false); // Hide the popup after 5 seconds
        }, 5000);
    };

    const [formInputs, setFormInput] = useState({
        fName: "",
        lName: "",
        Email: "",
        City: "",
        Amount: "",
        contact: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [razorpayOpened, setRazorpayOpened] = useState(false);

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setFormInput((prev) => {
            return { ...prev, [name]: value };
        });

        // Clear the error message when user starts typing
        if (name === "contact") {
            setErrorMessage("");
        }
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validate the contact number
        if (formInputs.contact.length !== 10) {
            setLoading(false);
            setErrorMessage("Mobile number must be exactly 10 digits");
            return; // Prevent form submission
        }
        if (!/^\d+$/.test(formInputs.contact)) {
            setLoading(false);
            setErrorMessage("Mobile number must contain only digits");
            return; // Prevent form submission
        }
        try {
            await paymentHandler(e);
        } catch (error) {
            console.log("Payment error", error);
        }
    };

    const amount = formInputs.Amount * 100;
    const currency = "INR";

    const DonationData = async () => {
        try {
            const response = await axios.post(
                "https://api.kinchitprayas.org/api/",
                {
                    FirstName: formInputs.fName,
                    LastName: formInputs.lName,
                    Email: formInputs.Email,
                    City: formInputs.City,
                    Amount: formInputs.Amount,
                    ContactNumber: formInputs.contact,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            localStorage.setItem(
                "Donation_detail",
                JSON.stringify(response.data)
            );
        } catch (error) {
            console.error("Error storing donation data:", error);
        }
    };

    const paymentHandler = async (event) => {
        if (event.preventDefault) {
            event.preventDefault();
        }

        try {
            const orderResponse = await axios.post(
                "https://api.kinchitprayas.org/api/",
                {
                    amount,
                    currency,
                }
            );

            const options = {
                amount,
                currency,
                name: "Kinchit Paryas Foundation",
                description: "Helping Everyone",
                image: KinchitLogo,
                order_id: orderResponse.data.id, // Assuming the order ID is returned in the response data
                handler: async function (response) {
                    const body = {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    };

                    try {
                        const validateResponse = await axios.post(
                            "https://api.kinchitprayas.org/api/",
                            body
                        );

                        // Call DonationData function after successful validation
                        await DonationData();

                        setRazorpayOpened(true); // Set Razorpay opened
                        closingForm();
                    } catch (error) {
                        console.error("Error validating payment:", error);
                    } finally {
                        setRazorpayOpened(false); // Close Razorpay
                    }
                },
                prefill: {
                    name: `${formInputs.fName} ${formInputs.lName}`,
                    email: formInputs.Email,
                    contact: `91${formInputs.contact}`,
                },
                notes: {
                    address: "Razorpay Corporate Office",
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.on("payment.failed", function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });

            rzp1.open();
            setLoading(false);
            setForm(false);
        } catch (error) {
            console.error("Error creating order:", error);
        }
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            <div
                className={
                    Form && closeOpen && !razorpayOpened ? "modal-wraper" : null
                }
                onClick={closeOpen}
            ></div>
            <div className="center">
                {!razorpayOpened && Form && (
                    <div
                        className={
                            closeOpen
                                ? "visible-Form-Container"
                                : "non-visible-Form-Container"
                        }
                    >
                        <div className="heading-container">
                            <h2>Donation Form</h2>
                            <p>Donating small amount can make someone happy</p>
                        </div>
                        <form
                            className="input-container"
                            action=""
                            onSubmit={handleOnSubmit}
                        >
                            <div className="input-item">
                                <p>First Name</p>
                                <input
                                    placeholder="Enter firstname"
                                    onChange={inputEvent}
                                    name="fName"
                                    required
                                />
                            </div>
                            <div className="input-item">
                                <p>Last Name</p>
                                <input
                                    placeholder="Enter Lastname"
                                    onChange={inputEvent}
                                    name="lName"
                                    required
                                />
                            </div>
                            <div className="input-item">
                                <p>Email Address</p>
                                <input
                                    placeholder="Enter email address"
                                    type="email"
                                    onChange={inputEvent}
                                    name="Email"
                                    required
                                />
                            </div>
                            <div className="input-item">
                                <p>City</p>
                                <input
                                    placeholder="City name"
                                    type="text"
                                    onChange={inputEvent}
                                    name="City"
                                    required
                                />
                            </div>
                            <div className="input-item">
                                <p>Mobile Number</p>
                                <input
                                    type="number"
                                    placeholder="+91"
                                    onChange={inputEvent}
                                    name="contact"
                                    required
                                />
                                {errorMessage && (
                                    <div className="error-message">
                                        {errorMessage}
                                    </div>
                                )}
                            </div>
                            <div className="input-item">
                                <p>Amount</p>
                                <input
                                    type="number"
                                    placeholder="INR"
                                    onChange={inputEvent}
                                    name="Amount"
                                    required
                                />
                            </div>
                            <div className="donate-btn">
                                <button type="submit">
                                    {!loading && <p>Donate</p>}
                                    <PulseLoader
                                        loading={loading}
                                        color="#fff"
                                    />
                                </button>
                            </div>
                            <p>
                                By donating, you agree to our{" "}
                                <span className="blue">terms of service</span>{" "}
                                and <span className="blue">privacy policy</span>
                            </p>
                        </form>
                    </div>
                )}
            </div>
            {popUp && (
                <div className="modal-wraper">
                    <div className="Thanku-messg">
                        <h1>Thank You For The Donation!</h1>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DonationForm;
