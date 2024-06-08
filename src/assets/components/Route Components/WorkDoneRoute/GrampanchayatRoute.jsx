import React from "react";
import Navbar from "../../Utilities/Common Utilities/NavbarUtilities/Navbar";
import Footer from "../../Utilities/Common Utilities/Footer";
import Grampanchayat from "../../Utilities/WorkDone/Grampanchayat/Grampanchayat";

const CSRRoute = () => {
    return (
        <div>
            <Navbar />
            <Grampanchayat />
            <Footer />
        </div>
    );
};

export default CSRRoute;
