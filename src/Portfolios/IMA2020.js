import React from "react";

//componets
import PortfolioHeading from "../Components/PortfolioHeading";

//images
import ima from "../assets/images/Ima.jpg";
import sleek from "../assets/images/sleek_new.jpg";



import logo from "../assets/Ima 2020 assests/Group 2515.png";
import vedio from "../assets/Ima 2020 assests/Group 2518.png";
import icon from "../assets/Ima 2020 assests/Group 2308.png";
import trillon from "../assets/Ima 2020 assests/Group 2514.png";
import graph from "../assets/Ima 2020 assests/Group 2384.png";
import flag from "../assets/Ima 2020 assests/Mask Group 12.png";
import bag from "../assets/Ima 2020 assests/Group 2550.png";
import mug from "../assets/Ima 2020 assests/Mask Group 15.png";
import bands from "../assets/Ima 2020 assests/Group 2510.png";
import stage from "../assets/Ima 2020 assests/Group 2511.png";
import brochure from "../assets/Ima 2020 assests/Group 2513.png";
import hording from "../assets/Ima 2020 assests/Group 2512.png";
import event from "../assets/Ima 2020 assests/Group 2508.png";
import newspaper from "../assets/Ima 2020 assests/57301.png";

import Footer from "../Components/Footer";
import PrevAndNextWork from "../Components/PrevAndNextWork";

const IMA2020 = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="IMA 2020"
          subHeading="Event Branding"
          info="Indore Management Association is a nationally acclaimed 57 years old body of entrepreneurs that aims at uplifting the local and national business landscape across India. IMA Conclave is their flagship annual conference that in 2019 brought together 3000+ leaders, entrepreneurs, 
          students, and enthusiasts at one junction to discuss breakthroughs, challenges, and the global economic landscape. 
          Revolving around ‘Industry 4.0: Rethink, Redesign, Rebuild,’ the conclave was envisioned to promote India 4.0. All the IMA Conclaves prior to 2019 followed a common design theme with some minor tweaks to match the year’s agenda but this year was different. To come out as a credible beneficiary of the business landscape, the IMA wanted to stand true to the motto and make the conclave a true representation of India 4.0."
        />

        <div className="ima2020__logo">
          <img src={logo} alt="ima logo" />
        </div>

        <div className="full__img">
          <img src={vedio} alt="vedio" />
        </div>

        <div className="alignment__container">
          <div className="ima__icon">
            <img src={icon} alt="icon" />
          </div>

          <div className="img__max__width">
            <img src={trillon} alt="trillon" />
          </div>

          <div className="graph">
            <img src={graph} alt="bar" />
          </div>

          <div className="img__max__width flag">
            <img src={flag} alt="flag" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={bag} alt="bag" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={mug} alt="bag" />
          </div>
        </div>

        <div className="full__img">
          <img src={bands} alt="bands" />
        </div>

        <div className="full__img stage">
          <img src={stage} alt="bands" />
        </div>

        <div className="alignment__container">
          <div className="img__max__width">
            <img src={brochure} alt="brochure" />
          </div>

          <div className="img__max__width stage">
            <img src={hording} alt="brochure" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={event} alt="event" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={newspaper} alt="newspaper" />
          </div>
        </div>
      </div>
      <PrevAndNextWork
          prev="/work/sleek"
          next="/work/ima2019"
          image1={sleek}
          image2={ima}
        />
      <Footer />
    </>
  );
};

export default IMA2020;
