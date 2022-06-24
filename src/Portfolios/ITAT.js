import React from "react";

//components
import PortfolioHeading from "../Components/PortfolioHeading";
import Footer from "../Components/Footer";
import PrevAndNextWork from "../Components/PrevAndNextWork";

//images
import infoPress from "../assets/images/IP.jpg";
import encompass from "../assets/images/encompass.jpg";

import itat01 from "../assets/itat assets/Square Card Mockup 001.png";
import itat02 from "../assets/itat assets/Group 701.png";
import itat03 from "../assets/itat assets/Group 702.png";
import itat04 from "../assets/itat assets/Checkers-01.png";
import itat05 from "../assets/itat assets/Mask Group 26.png";
import itat06 from "../assets/itat assets/Scene.png";
import itat07 from "../assets/itat assets/21-top-packaging-scene.png";
import itat08 from "../assets/itat assets/VINYL SHOP MOCKUP.png";
import itat09 from "../assets/itat assets/press_wall_banner_mockup_02.png";
import itat10 from "../assets/itat assets/NoPath - Copy (13).png";
import itat11 from "../assets/itat assets/Group 712.png";
import itat12 from "../assets/itat assets/6.png";
import itat13 from "../assets/itat assets/Group 703.png";

const ITAT = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="ITAT"
          subHeading="Visual Identity | Branding"
          info="Event Branding for a 50 years old Income Tax Tribunal
            The Tax Bar At Tribunal, Indore is a 50 years old body of Income Tax judges and practicing members that regulates the Income Tax Code of India. On the occasion marking 50 years of judicial excellence, TBAT took the first-of-its-kind initiative to celebrate its glorious journey with judges from across India and set a vision for the years to come. The event was more than just a celebration; it was a ride of nostalgia for the luminaries in black cape who revisited cases. "
        />

        <div className="alignment__container2">
          <div className="img__max__width">
            <img src={itat01} alt="itat" />
          </div>

          <div className="text__block">
            <p>
              The event was the first-of-its-kind in the history of Income Tax
              Tribunals. Since there were no precedents, we started with
              outlining the end-to-end event flow and studying the attendees’
              journey. The study helped us chalk out various touch points and
              map collaterals to create brand engagement. The TBAT organizing
              committee wanted us to be very peculiar about each aspect of
              design and keep everything in sync with values long rooted in the
              Indian Judiciary. To match this expectation we used shades of
              white, and black to reflect the spirit of justice and gold to
              showcase the legacy of the body.
            </p>
          </div>

          <div className="img__max__width bottom__margin">
            <img src={itat02} alt="itat" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={itat03} alt="itat" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={itat04} alt="itat" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={itat05} alt="itat" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={itat06} alt="itat" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={itat07} alt="itat" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={itat08} alt="itat" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={itat09} alt="itat" />
          </div>

          <div className="img__max__width bottom__margin2">
            <img src={itat10} alt="itat" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={itat11} alt="itat" />
          </div>

          <div className="img__max__width ">
            <img src={itat12} alt="itat" />
          </div>

          <div className="text__block">
            <p>
              Another requirement was to ensure a seamless execution of all
              branding material as per predefined deadlines. To manage the
              end-to-end output, we took the onus of all operational tasks and
              accessed our network of third-party vendors to control various
              factors like printing cost, execution time, material delivery, and
              installation.
            </p>
          </div>
          <div className="img__max__width bottom__margin2">
            <img src={itat13} alt="itat" />
          </div>
        </div>
      </div>
      <PrevAndNextWork
          prev="/work/informatic-press"
          next="/work/encompass"
          image1={infoPress}
          image2={encompass}
        />
      <Footer/>
    </>
  );
};

export default ITAT;
