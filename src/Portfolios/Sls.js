import React from "react";
import PortfolioHeading from "../Components/PortfolioHeading";
import Computer from "../assets/slsAssets/viasights.svg";
import Logo from "../assets/slsAssets/sls_logo.svg";
import Sun from "../assets/slsAssets/sunsight.svg";
import Yalgaar from "../assets/slsAssets/yalgaar.svg";
import Loc from "../assets/slsAssets/loc.svg";
import Varde from "../assets/slsAssets/verde.svg";
import Images from "../Components/Atoms/Images";
import Man from "../assets/slsAssets/backpic.png";
import Our from "../assets/slsAssets/ourattitude.png";
import Flow from "../assets/slsAssets/flow.svg";
import Container from "../assets/slsAssets/container.png";
const Sls = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="SLS"
          subHeading="UI/UX"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."
        />

        <div className="MyStyle">
          <div className="MyImg ">
            <Images image={Logo} fullwidth />
          </div>
          <div className="" style={{ display: "flex", alignItems: "center" }}>
            <Images className="images" image={Computer} alt="logo" />
            <Images className="images" image={Sun} alt="sun" />
            <Images className="images" image={Yalgaar} alt="yal" />
            <Images className="images" image={Loc} alt="loc" />
            <Images className="images" image={Varde} alt="Var" />
          </div>
        </div>

        {/* subparagraph */}
        <div className="subpara_wrapper ">
          <div className="textStyle">
            <h3>
              Lorem ipsum<br></br> dolor sit amet
            </h3>
          </div>
          <div className="textStyleP">
            <p>
              CFDonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div>
          <Images image={Man} fullwidth alt="background" />
        </div>
        <div className="background_container">
          <div className="style_container">
            <h4>WHAT WE CAN HANDLE</h4>
            <br></br>
            <br></br>
            <p>
              Donsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <br></br>
            <p>
              Donsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className="para_container">
            <p>E-commerce shipments</p>
            <br></br>
            <p>Door to door services with import & export</p>
            <br></br>
            <p>Custom clearance</p>
            <br></br>
            <p className="element_container">Website redesign</p>
            <br></br>
            <p>Trucking</p>
            <br></br>
            <p>Labeling & bar coding</p>
            <br></br>
            <p>Distribution</p>
            <br></br>
            <p>Special packing</p>
            <br></br>
          </div>
        </div>
      </div>
      <div className="our_container">
        <Images image={Our} alt="our" />
      </div>
      <div className="background_container">
        <div className="backgroundblack ">
          <div className="circle"></div>
          <h3 className="wordh3">
            For 30 years, We set ourselves apart through our experts' expertise
            and experience.
          </h3>
        </div>
        <div className="backgroundblue">
          <p className="wordp">
            Each of our advisors has a long track record that attests to the
            experience and expertise that they bring to SMEs with growth and
            performance objectives.
          </p>
        </div>
      </div>
      <div className="black_container">
        <div className="subpara_wrapper ">
          <div className="textStyle">
            <h3 className="font">User Flow</h3>
          </div>
          <div className="textStyleP">
            <p className="font">
              CFDonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <Images className="flow" image={Flow} alt="flow" />
      </div>
      <div className="subpara_wrapper">
        <div className="textStyle">
          <h3>Styleguide</h3>
        </div>
        <div className="textStyleP">
          <p>
            CFDonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <Images image={Container} fullwidth alt="container" />,{" "}
      <section>
        <div className="backdown_container">
          <div className="all">
            
            <h2 className="textcolor">Colour</h2>
            <p className="textp">
              Donsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Sls;
