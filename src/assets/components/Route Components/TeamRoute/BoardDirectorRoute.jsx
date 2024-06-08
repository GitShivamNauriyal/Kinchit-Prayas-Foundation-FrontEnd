import Navbar from "../../Utilities/Common Utilities/NavbarUtilities/Navbar";
import BoardDirector from "../../Utilities/TeamUtilities/BoardDirector";
import Footer from "../../Utilities/Common Utilities/Footer";

import React from "react";

const BoardDirectorRoute = () => {
    return (
        <div>
            <Navbar />
            <BoardDirector />
            <Footer />
        </div>
    );
};

export default BoardDirectorRoute;
