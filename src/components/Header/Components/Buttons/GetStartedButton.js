import {useLocation} from "react-router-dom";
import {Link} from "react-scroll";
import React from "react";
import GetStartedButtonLandingPage from "./LandingPage/GetStartedButtonLandingPage";
import GetStartedButtonBlog from "./Blog/GetStartedButtonBlog";

function GetStartedButton() {
    const location = useLocation();

    return (
        <Link
            className="stylebutton"
            activeClass="active"
            to="pricing"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
        >
            {location.pathname === "/" ? (
                <GetStartedButtonLandingPage/>
            ) : (
                <GetStartedButtonBlog/>
            )}
        </Link>
    )
}

export default GetStartedButton;