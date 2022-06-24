import React from "react";

//components
import PortfolioHeading from "../Components/PortfolioHeading";
import Footer from '../Components/Footer';

//images
import itat from "../assets/images/ITAT.jpg";
import sinless from "../assets/images/sinless_new.jpg";


import logo from '../assets/Encompass assests/Group 232.png'
import logoMaking from '../assets/Encompass assests/Group 399.png'
import albatros from '../assets/Encompass assests/Group 400.png'
import icon from '../assets/Encompass assests/Group 404.png'
import color from '../assets/Encompass assests/Group 405.png'
import iconStyle from '../assets/Encompass assests/Group 3000.png'
import logoGuide from '../assets/Encompass assests/Group 376.png'
import card from '../assets/Encompass assests/Business_Card_Mockup.png'
import file from '../assets/Encompass assests/Mask Group 12.png'
import mug from '../assets/Encompass assests/Group 406.png'
import diary from '../assets/Encompass assests/Group 407.png'
import laptop from '../assets/Encompass assests/296.png'
import end from '../assets/Encompass assests/Mask Group 14.png'
import PrevAndNextWork from "../Components/PrevAndNextWork";



const Encompass = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="Encompass"
          subHeading="Branding"
          info="We founded Encompass with the vision to merge and leverage our expertise for helping businesses realise their infinite possibilities and grow exponentially. 
            We are basically a team of problem-solving enthusiasts who are passionate about taking up challenging projects, strategize, derive multi-dimensional solutions, and transform businesses
            The positive change and making organizations function at their full capacity is our ikigai. "
              />
              
              <div className="encompass__logo">
                <img src={logo} alt="encompass logo" />
              </div>

              <div className="logo__making">
                  <img src={logoMaking} alt="making" />
              </div>

              <div className="img__max__width">
                  <img src={albatros} alt="encompass" />
              </div>

              <div className="img__max__width">
                  <img src={icon} alt="encompass" />
              </div>

              <div className="img__max__width">
                  <img src={color} alt="encompass" />
              </div>

              <div className="img__max__width">
                  <img src={iconStyle} alt="encompass" />
              </div>

              <div className="img__max__width">
                  <img src={logoGuide} alt="encompass" />
              </div>

              <div className="img__max__width">
                  <img src={card} alt="encompass" />
              </div>

              <div className="img__max__width">
                  <img src={file} alt="encompass" />
              </div>

              <div className="img__max__width">
                  <img src={mug} alt="encompass" />
              </div>

              <div className="img__max__width">
                  <img src={diary} alt="encompass" />
              </div>

              <div className="img__max__width">
                  <img src={laptop} alt="encompass" />
              </div>

              <div className="img__max__width">
                  <img src={end} alt="encompass" />
              </div>
      </div>

      <PrevAndNextWork
          prev="/work/itat"
          next="/work/sinless"
          image1={itat}
          image2={sinless}
        />

      <Footer/>
    </>
  );
};

export default Encompass;
