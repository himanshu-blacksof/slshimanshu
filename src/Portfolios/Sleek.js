import React from "react";

//components
import PortfolioHeading from "../Components/PortfolioHeading";
import Footer from "../Components/Footer";

//images
import sinless from "../assets/images/sinless_new.jpg";
import ima2020 from "../assets/images/ima2020.jpg";


import sleek01 from "../assets/sleek assets/Mask Group 16.png";
import logo from "../assets/sleek assets/Group 1761.png";
import icon from "../assets/sleek assets/Group 1764.png";
import logoHistory from "../assets/sleek assets/Group 1765.png";
import sleek02 from "../assets/sleek assets/Mask Group 18.png";
import sleek03 from "../assets/sleek assets/Group 1611.png";
import sleek04 from "../assets/sleek assets/Group 1618.png";
import sleek05 from "../assets/sleek assets/Group 1759.png";
import sleek06 from "../assets/sleek assets/Group 1677.png";
import sleek07 from "../assets/sleek assets/6.png";
import sleek08 from "../assets/sleek assets/Group 1766.png";
import sleek09 from "../assets/sleek assets/wallet.png";
import sleek10 from "../assets/sleek assets/Group 1767.png";
import sleek11 from "../assets/sleek assets/Group 1768.png";
import sleek12 from "../assets/sleek assets/Mask Group 31.png";
import sleek13 from "../assets/sleek assets/Group 1769.png";
import sleek14 from "../assets/sleek assets/Group 1770.png";
import sleek15 from "../assets/sleek assets/Mask Group 20.png";
import sleek16 from "../assets/sleek assets/Mask Group 24.png";
import sleek17 from "../assets/sleek assets/Group 1772.png";
import PrevAndNextWork from "../Components/PrevAndNextWork";

const Sleek = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="Sleek Studio"
          subHeading="Rebranding"
          info="Sleek Studio is a boutique store curating customised designer wear for men. Our brand is basically based out of Hoshiarpur, Punjab and now we’ve grown leaps and bounds, as our periphery of customers are not just targeted to India but also abroad.
            And that’s how we’ve achieved many milestones.
            But the milestones achieved so far are core values we’ve followed as a brand. That has made us to stand out to where we are today."
        />

        <div className="full__img">
          <img src={sleek01} alt="sleek" />
        </div>

        <div className="full__img">
          <img src={logo} alt="sleek" />
        </div>

        <div className="full__img">
          <img src={icon} alt="sleek" />
        </div>

        <div className="sleek__history">
          <img src={logoHistory} alt="sleek" />
        </div>

        <div className="full__img">
          <img src={sleek02} alt="sleek" />
        </div>

        <div className="golden__background">
          <div className="alignment__container">
            <div className="img__max__width bottom__margin top__padding ">
              <img src={sleek03} alt="sleek" />
            </div>

            <div className="img__max__width bottom__padding">
              <img src={sleek04} alt="sleek" />
            </div>
          </div>
        </div>

        <div className="grey__background">
          <div className="alignment__container">
            <div className="img__max__width bottom__margin top__padding ">
              <img src={sleek05} alt="sleek" />
            </div>

            <div className="img__max__width bottom__padding">
              <img src={sleek06} alt="sleek" />
            </div>
          </div>
        </div>

        <div className="full__img">
          <img src={sleek07} alt="sleek" />
        </div>

        <div className="full__img">
          <img src={sleek08} alt="sleek" />
        </div>

        <div className="full__img">
          <img src={sleek09} alt="sleek" />
        </div>

        <div className="full__img">
          <img src={sleek10} alt="sleek" />
        </div>

        <div className="full__img">
          <img src={sleek11} alt="sleek" />
        </div>

        <div className="full__img">
          <img src={sleek12} alt="sleek" />
        </div>

        <div className="full__img">
          <img src={sleek13} alt="sleek" />
        </div>

        <div className="full__img">
          <img src={sleek14} alt="sleek" />
        </div>

        <div className="full__img">
          <img src={sleek15} alt="sleek" />
        </div>

        <div className="full__img">
          <img src={sleek16} alt="sleek" />
        </div>
        
        <div className="full__img">
          <img src={sleek17} alt="sleek" />
        </div>
      </div>

      <PrevAndNextWork
          prev="/work/sinless"
          next="/work/ima2020"
          image1={sinless}
          image2={ima2020}
        />
      <Footer/>
    </>
  );
};

export default Sleek;
