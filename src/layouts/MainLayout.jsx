import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../assets/components/Utilities/Common Utilities/NavbarUtilities/Navbar";
import Footer from "../assets/components/Utilities/Common Utilities/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MainLayout = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Kinchit Prayas Foundation - NGO in Dehradun, Uttarakhand</title>
                <meta name="description" content="Grassroot NGO in Uttarakhand, India focusing on rural governance, sustainable community development, livelihood enhancement, and water conservation. Supporting the Sustainable Development Goals." />
                <meta name="keywords" content="NGO in Dehradun, NGO in Uttarakhand, NGO in India, grassroot NGO, rural governance, sustainable community development, livelihood enhancement, water conservation, Sustainable Development Goals, Non Government Organisation, Charity, Development" />
            </Helmet>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </HelmetProvider>
    );
};

export default MainLayout;
