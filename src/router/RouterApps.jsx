import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage.jsx";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Account from "../pages/Account/Account.jsx";
import Login from "../pages/Login/Login.jsx";
import TestPage from "../pages/TestPage/TestPage.jsx";
import FaqPage from "../pages/FaqPage/FaqPage.jsx";
import Register from "../pages/Register/Register.jsx";
import RecoverAccount from "../pages/RecoverAccount/RecoverAccount.jsx"
import TestDoing from "../pages/TestDoing/TestDoing.jsx";
import Terms from "../pages/TermsOfService/Terms.jsx";
import TestResults from "../pages/TestResults/TestResults.jsx";

const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recover-account" element={<RecoverAccount />} />
            <Route path="/tests" element={<TestPage />} />
            <Route path="/FAQ" element={<FaqPage />} />
            <Route path="/test-doing" element={<TestDoing />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/test-results" element={<TestResults />} />
        </Routes>

    );

};

export default AppRoutes;
