import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./assets/components/Utilities/Error";
import Home from "./assets/components/Route Components/HomeRoute/HomeRoute";
import StudentRegistrationForm from "./assets/components/Utilities/Form/Internshipform";
import WashSector from "./assets/components/Route Components/WorkDoneRoute/WashSectorRoute";
import SkillingCommunity from "./assets/components/Route Components/WorkDoneRoute/SkillingCommunity";
import ScrollToTop from "./assets/components/Utilities/ScrollToTop";
import Affliation from "./assets/components/Route Components/AffilationRoute/AffilationRoute";
import Gallery from "./assets/components/Route Components/GalleryRoute/GalleryRoute";
import GetInvolved from "./assets/components/Route Components/GetInvolvedRoute/GetInvolvedRoute";
import CSRRoute from "./assets/components/Route Components/WorkDoneRoute/CSRRoute";
import CultureRoute from "./assets/components/Route Components/WorkDoneRoute/CultureRoute";
import GrampanchayatRoute from "./assets/components/Route Components/WorkDoneRoute/GrampanchayatRoute";
import UttarakhandMahotsavRoute from "./assets/components/Route Components/FlagshipRoute/UttarakhandMahotsavRoute";
import StudentCentricActivitiesRoute from "./assets/components/Route Components/FlagshipRoute/StudentCentricActivitiesRoute";
import UttrakhandDevelopmentExibition from "./assets/components/Route Components/FlagshipRoute/UttrakhandDevelopmentExibitionRoute";
import EarthDayRoute from "./assets/components/Route Components/FlagshipRoute/EarthDayRoute";
import BoardDirector from "./assets/components/Route Components/TeamRoute/BoardDirectorRoute";
import EqualityAwareness from "./assets/components/Route Components/FlagshipRoute/EqualityAwarenessRoute";
import JABRAC from "./assets/components/Route Components/JABRACRoute/JABRACRoute";

const App = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/GetInvolved" element={<GetInvolved />} />
                <Route path="/workdone/washSector" element={<WashSector />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route
                    path="/workdone/skillingCommunity"
                    element={<SkillingCommunity />}
                />
                <Route path="/Team/OurFounder" element={<BoardDirector />} />
                <Route path="/Affilation" element={<Affliation />} />
                <Route path="/work/CSR" element={<CSRRoute />} />
                <Route
                    path="/work/ConservationandCulture"
                    element={<CultureRoute />}
                />
                <Route
                    path="/work/Grampanchayat"
                    element={<GrampanchayatRoute />}
                />
                <Route path="/JABRAC" element={<JABRAC />} />
                <Route path="*" element={<Error />} />
                <Route
                    path="/FlagShipEvents/UttarakhandMahotsav"
                    element={<UttarakhandMahotsavRoute />}
                />
                <Route
                    path="/FlagShipEvents/StudentCentricActivities"
                    element={<StudentCentricActivitiesRoute />}
                />
                <Route
                    path="/FlagShipEvents/UttrakhandDevelopmentExibition"
                    element={<UttrakhandDevelopmentExibition />}
                />
                <Route
                    path="/FlagShipEvents/EarthDay"
                    element={<EarthDayRoute />}
                />
                <Route
                    path="/FlagShipEvents/EqualityAwareness"
                    element={<EqualityAwareness />}
                />
                <Route
                    path="/GetInvolved/Internship"
                    element={<StudentRegistrationForm />}
                />
            </Routes>
        </>
    );
};

export default App;
