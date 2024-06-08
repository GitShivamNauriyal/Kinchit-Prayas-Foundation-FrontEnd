import React from "react";
import Navbar from "../../Utilities/Common Utilities/NavbarUtilities/Navbar";
import Footer from "../../Utilities/Common Utilities/Footer";
import ConservationandCulture from "../../Utilities/WorkDone/ConservationandCulture/ConservationandCulture";

const CSRRoute = () => {
    return (
        <div>
            <Navbar />
            <ConservationandCulture />
            <Footer />
        </div>
    );
};

export default CSRRoute;
