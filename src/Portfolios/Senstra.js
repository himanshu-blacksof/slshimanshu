import React from "react";

//components
import PortfolioHeading from "../Components/PortfolioHeading";
import PrevAndNextWork from "../Components/PrevAndNextWork";
import TabView from "../Components/TabView";
import Footer from "../Components/Footer";

//images
import vijay from "../assets/images/VCH.jpg";
import encompass from "../assets/images/encompass.jpg";

import senstra_01 from "../assets/senstraAssets/senstra_01.jpg";
import senstra_02 from "../assets/senstraAssets/senstra_02.jpg";
import senstra_03 from "../assets/senstraAssets/senstra_03.jpg";
import senstra_04 from "../assets/senstraAssets/senstra_04.jpg";
import senstra_05 from "../assets/senstraAssets/senstra_05.jpg";
import senstra_06 from "../assets/senstraAssets/senstra_06.svg";
import senstra_07 from "../assets/senstraAssets/senstra_07.svg";
import senstra_08 from "../assets/senstraAssets/senstra_08.svg";
import senstra_09 from "../assets/senstraAssets/senstra_09.png";
import senstra_10 from "../assets/senstraAssets/senstra_10.jpg";
import senstra_11 from "../assets/senstraAssets/senstra_11.png";
import senstra_12 from "../assets/senstraAssets/senstra_12.jpg";
import senstra_13 from "../assets/senstraAssets/senstra_13.jpg";
import senstra_14 from "../assets/senstraAssets/senstra_14.png";
import senstra_15 from "../assets/senstraAssets/senstra_15.jpg";
import senstra_16 from "../assets/senstraAssets/senstra_16.svg";
import senstra_17 from "../assets/senstraAssets/senstra_17.svg";


import senstra_logo_01 from "../assets/senstraAssets/senstra_logo_01.svg";
import senstra_logo_02 from "../assets/senstraAssets/senstra_logo_02.svg";


import bubbles from "../assets/brebelAssets/Group 7302.svg";
import flowDiagram from "../assets/brebelAssets/Group 7277.svg";
import typography from "../assets/brebelAssets/typography.png";
import colorss from "../assets/brebelAssets/colors.png";
import formStyles from "../assets/brebelAssets/Group 7307.svg";
import Wireframes from "../assets/brebelAssets/Group 7306.svg";
import blackBox from "../assets/brebelAssets/Rectangle 848.svg";
import slide1 from "../assets/brebelAssets/Home1.png";
// import slide2 from "../assets/brebelAssets/";
// import slide3 from "../assets/brebelAssets/";
import Home2 from "../assets/brebelAssets/Home2.png";
import Home3 from "../assets/brebelAssets/Produc-pag.png";

// arrows
import FirstArrow from "../assets/brebelAssets/Arrow_01.svg";
import SecArrow from "../assets/brebelAssets/Arrow_08.svg";
import SecArrowReverse from "../assets/brebelAssets/Arrow_3.svg";
import thirdArrow from "../assets/brebelAssets/Arrow_10.svg";
import fourthArrow from "../assets/brebelAssets/Arrow_11.svg";


//video section
import brebelProducts from "../assets/brebelAssets/Group 7308_cropped.png";


//tab view (responsive section)
import tab from "../assets/brebelAssets/Group 7186.png";
import tabRev from "../assets/brebelAssets/Group 7187.png";


import FlickingCarousel from "../Components/FlickingCarousel";
import FullWidthImage from "../Components/Atoms/FullWidthImage";
import { Link } from "react-router-dom";




const Senstra = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="Senstra"
          subHeading="UI/UX | Branding"
          info="Senstra is an Australia-based company that uses its expertise in IoT to assist enterprises in the domains of Data Analytics and Predictive Intelligence. Its primary expertise lies in Asset Management and the products are designed to cater to smart city-based use cases like Supply Chain, Logistics, Utility Asset Management, and Asset Tracking."
        />


        <FullWidthImage
          image={senstra_01}
        />

        <div className="alignment__container2">
          <div className="img__max__width senstra__log__width padding__lr">
            <img src={senstra_logo_01} alt="Senstra Logo" />
          </div>
          <div className="img__max__width senstra__log__width">
            <img src={senstra_logo_02} alt="Senstra Logo" />
          </div>
        </div>

        <FullWidthImage
          image={senstra_02}
        />

        <div className="right__shift top__margin top__padding">
          <FullWidthImage
            image={senstra_03}
            className="senstra__set__width"
          />
        </div>


        <div className="left__shift">
          <FullWidthImage
            image={senstra_04}
            className="senstra__set__width"
          />
        </div>

        {/* GREEN BOX WITH BAG */}
        <div className="fullwidth__container top__margin top__padding">
          <div className="half__container greenback">
            <h2>Senstra is an IoT company that provides the complete solution</h2>
            <p>Sensing the IoT ERA with SENSTRA</p>
          </div>
          <div className="half__container">
            <FullWidthImage
              image={senstra_05}
            />
          </div>
        </div>


        <div className="alignment__container2 top__margin top__padding">
          <FullWidthImage
            image={senstra_06}
            className={"top__margin top__padding"}
          />
        </div>



        {/* //SOCIAL Media */}
        <div className="senstra__social__media social__media__margins">
          <div className="black__box ">
            <FullWidthImage
              image={senstra_07}
              className={"senstra__set__width pos__left"}
            />

            <h2>Social Media</h2>

            <FullWidthImage
              image={senstra_08}
              className={"senstra__set__width pos__right"}
            />
          </div>
        </div>

        <FullWidthImage
          image={senstra_09}
        />
        <FullWidthImage
          image={senstra_10}
        />

        <div className="alignment__container2">
          <FullWidthImage
            image={senstra_11}
            className={'senstra__all__padding top__margin top__padding '}
          />
        </div>

        <FullWidthImage
          image={senstra_12}
          className={'senstra__all__padding top__margin top__padding'}
        />

        {/* //website__section// */}
        <div className="website__section ">
          <div className="alignment__container2">
            <div className="text__box">
              <h2>Website</h2>
              <p>The Website UI/UX has been meticulously designed with a technology-driven outlook. We made sure that the overall layout and the subsequent elements remained in coherence with the overall white-blue theme of IoT. The sitemap and the overall flow too were planned and executed in the best manner possible keeping in mind a uniform and uninterrupted informational flow throughout.</p>
            </div>

            <FullWidthImage
              image={senstra_13}
              className="border__radius top__margin"
            />

            <div className="pos_right_senstra_logo_02 img__max__width senstra__log__width">
              <img src={senstra_logo_02} alt="Senstra Logo" />
            </div>
            <div className="big_pos_right_senstra_logo_02 img__max__width ">
              <img src={senstra_logo_02} alt="Senstra Logo" />
            </div>
          </div>

          <FullWidthImage
            image={senstra_14}
            className="widths__  top__margin"
          />

        </div>

        <FullWidthImage
          image={senstra_15}
        />

        <div className="end__section alignment__container2">
          <FullWidthImage
            image={senstra_16}
            className={"top__position__boxes"}
          />
        </div>
        <div className="button__box alignment__container2">
          <a href={"https://www.senstra.com.au"}
            target={"_blank"}
            className="senstra__website__button"
            type="submit">
            See website</a>
        </div>

        <FullWidthImage
          image={senstra_17}
          className={'bottom__margin'}
        />

      </div>


      <PrevAndNextWork
        prev="/work/vijay-chat-house"
        next="/work/encompass"
        image1={vijay}
        image2={encompass}
      />

      <Footer />
    </>
  );
};

export default Senstra;
