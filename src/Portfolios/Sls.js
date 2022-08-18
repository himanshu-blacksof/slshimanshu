import React from 'react';
import PortfolioHeading from '../Components/PortfolioHeading';
import Logo from '../assets/slsAssets/sls_logo.svg';
import Computer from '../assets/slsAssets/viasights.svg';
import Sun from '../assets/slsAssets/sunsight.svg';
import Yalgaar from '../assets/slsAssets/yalgaar.svg';
import Loc from '../assets/slsAssets/loc.svg';
import Varde from '../assets/slsAssets/verde.svg';
import Images from '../Components/Atoms/Images';
import Man from '../assets/slsAssets/backpic.png';
import Our from '../assets/slsAssets/ourattitude.png';
import Flow from '../assets/slsAssets/flow.svg';
import Container from '../assets/slsAssets/container.png';
import Cards from '../assets/slsAssets/cards.png';
import Collage from '../assets/slsAssets/collage.svg';
import Gridback from '../assets/slsAssets/gridbackground.png';
// import Blue from '../assets/slsAssets/background_blue.png';
// import Gridbottom from '../assets/slsAssets/gridbottom.png';
import Solar from '../assets/slsAssets/solar.png';
// import Solarwind from '../assets/slsAssets/solarandwind.png';
import Tablet from '../assets/slsAssets/tablet.png';
import Slsimg from '../assets/slsAssets/systemlevelsolution.png';
import Testing from '../assets/slsAssets/testing.png';
import TestingCalibration from '../assets/slsAssets/testing_and_calibration.png';
import Multiple from '../assets/slsAssets/multiplepics.png';
import System from '../assets/slsAssets/systemlevel.png';
// import Grid from '../assets/slsAssets/grid.svg';
import Thanks from '../assets/slsAssets/thanks.png';
import Screens from '../assets/slsAssets/40screens.png';
import About from '../assets/slsAssets/aboutus.png';
import Responsive from '../assets/slsAssets/responsive.png';
import Loccarto from '../assets/slsAssets/loccarto.png';
import AI from '../assets/slsAssets/ai.png';
import ESM from '../assets/slsAssets/ems.png';
import Pcb from '../assets/slsAssets/pcb_design.png';
import Softwaredev from '../assets/slsAssets/software_development.png';
import Rectangle from '../assets/slsAssets/rectangle.svg';

const Sls = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="SLS"
          subHeading="UI/UX"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."
        />
        <div className="MyStyle ">
          <div className="MyImg ">
            <img className="image" src={Logo} alt="" />
          </div>
          <div className="Logos_wrapper">
            <img className="image" src={Computer} alt="logo" />
            <img className="image" src={Sun} alt="sun" />
            <img className="image" src={Yalgaar} alt="yal" />
            <img className="image" src={Loc} alt="loc" />
            <img className="image" src={Varde} alt="Var" />
          </div>
        </div>
        <div className="subpara_wrapper  ">
          <div className="textStyle ">
            <h3>Lorem ipsum dolor sit amet</h3>
          </div>
          <div className="textStyleP ">
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
      <section className="black_container">
        <div className="subpara_wrapper">
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
      </section>
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
      <Images image={Container} fullwidth alt="container" />
      <Images image={Cards} fullwidth alt="cards" />
      <div className="art-container">
        <div className="first_grid">
          <div className="text-para">
            <h4 className="color_sls">
              All icons are drawn on a pixel-based grid
            </h4>
          </div>
          <p className="para-art">
            Universal icon set is drawn on a pixel-based grid of 24px X 24px and
            scaled-up linearly to different sizes. The grid contains 2px padding
            for the surrounding live area.
          </p>
          <div className="grid">
            <p>
              <b>24 X 24 px</b> <b className="gap">2 px Safe</b>
            </p>
            <p>
              Grid <em className="gap_second">padding</em>
            </p>
          </div>
        </div>
        <div className="second_grid">
          <img className=" rectangle_grid" src={Rectangle} alt="flow" />
        </div>
      </div>
      <div className="collage">
        <Images image={Collage} alt="collage" />
      </div>
      <div className="gridbackground">
        <div>
          <img className="gridback" src={Gridback} alt="grid" />
        </div>
        <div className="grid_text">
          <h2>Grid System</h2>
          <br></br>
          <p>
            Donsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua
          </p>
        </div>
      </div>
      <div className="subpara_wrapper">
        <div className="textStyle">
          <h3>Home</h3>
        </div>
        <div className="textStyleP">
          <p>
            CFDonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi
          </p>
        </div>
      </div>
      <Images image={Slsimg} fullwidth alt="Sls" />
      <div className="subpara_wrapper">
        <div className="textStyle">
          <h3>Industries</h3>
        </div>
        <div className="textStyleP">
          <p>
            CFDonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi
          </p>
        </div>
      </div>
      <Images image={Solar} fullwidth alt="Solar" />
      <div className="subpara_wrapper">
        <div className="textStyle">
          <h3>Services</h3>
        </div>
        <div className="textStyleP">
          <p>
            CFDonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi
          </p>
        </div>
      </div>
      <div className="testing_container">
        <Images image={Testing} fullwidth alt="testing" />
      </div>
      <img
        className="tesingCalibration"
        src={TestingCalibration}
        alt="tesingCalibration"
      />
      <div className="grey_container">
        <img className="services_container1" src={AI} alt="ai" />
        <img className="services_container2" src={ESM} alt="esm" />
        <img className="services_container3" src={Pcb} alt="pcb" />
        <img
          className="services_container4"
          src={Softwaredev}
          alt="software_deveploment"
        />
      </div>
      <Images image={Multiple} fullwidth alt="multiple" />
      <div className="multiple_container">
        <p className="multiple_para">
          CFDonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore.
        </p>
      </div>
      <section>
        <Images image={About} fullwidth alt="About us" />
        <Images image={Responsive} fullwidth alt="Responsive" />
        <Images image={Loccarto} fullwidth alt="loccatro" />
        <Images image={Screens} fullwidth alt="sytemlevel" />
        <Images image={System} alt="sytemlevel" />
        <Images image={Thanks} fullwidth alt="thank you" />
      </section>
    </>
  );
};
export default Sls;
