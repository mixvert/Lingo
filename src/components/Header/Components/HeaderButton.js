import {Grid} from "@mui/material";
import AnimatedElement from "../../AnimatedElementOnce";
import React from "react";
import { useLocation } from "react-router-dom";
import AboutUsButton from "./Buttons/LandingPage/AboutUsButton";
import HowItWorksButton from "./Buttons/LandingPage/HowItWorksButton";
import PricingButton from "./Buttons/LandingPage/PricingButton";
import FAQsButton from "./Buttons/LandingPage/FAQsButton";

function HeaderButton() {
    const location = useLocation();

    return (
        <div className="HeaderButton">
            <Grid container spacing={2} style={{ marginLeft: 0, width: 'auto' }}>
                {location.pathname === "/" ? (
                    <>
                        <Grid item style={{ paddingLeft: 0 }}>
                            <AnimatedElement className="animated-element-header animated-element-header-delay-200ms">
                                <AboutUsButton/>
                            </AnimatedElement>
                        </Grid>
                        <Grid item style={{ paddingLeft: 0 }}>
                            <AnimatedElement className="animated-element-header animated-element-header-delay-300ms">
                                <HowItWorksButton/>
                            </AnimatedElement>
                        </Grid>
                        <Grid item style={{ paddingLeft: 0 }}>
                            <AnimatedElement className="animated-element-header animated-element-header-delay-400ms">
                                <PricingButton/>
                            </AnimatedElement>
                        </Grid>
                        <Grid item style={{ paddingLeft: 0 }}>
                            <AnimatedElement className="animated-element-header animated-element-header-delay-500ms">
                                <FAQsButton/>
                            </AnimatedElement>
                        </Grid>
                    </>
                ) : (
                    <></>
                )}
            </Grid>
        </div>
    )
}

export default HeaderButton;