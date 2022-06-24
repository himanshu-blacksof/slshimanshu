import React from "react";

//components
import PortfolioHeading from "../Components/PortfolioHeading";
import PrevAndNextWork from "../Components/PrevAndNextWork";
import TabView from "../Components/TabView";
import Footer from "../Components/Footer";

//images
import vijay from "../assets/images/VCH.jpg";
import encompass from "../assets/images/encompass.jpg";

import laptop from "../assets/brebelAssets/Group 7191.png";
import bubbles from "../assets/brebelAssets/Group 7302.svg";
import flowDiagram from "../assets/brebelAssets/Group 7277.svg";
import typography from "../assets/brebelAssets/typography.png";
import colorss from "../assets/brebelAssets/colors.png";
import formStyles from "../assets/brebelAssets/Group 7307.svg";
import Wireframes from "../assets/brebelAssets/Group 7306.svg";
import blackBox from "../assets/brebelAssets/Rectangle 848.svg";

import slide1 from "../assets/brebelAssets/Home1.png";
import slide2 from "../assets/brebelAssets/Home_slide2.png";

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




const Brebel = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="B.Rebel"
          subHeading="UI/UX"
          info="B.Rebel is a brand that speaks to the eyes of the unapologetic and fierce i.e., the Rebels. 
          It is a revolution that will create a new breed of hi-tech and high-performance products in India. 
          Its wearables include smartwatches, neckbands, earbuds with advanced technology, and exuberant features 
          that will strike everyone & speak in their language."
        />

        <div className="alignment__container2">
          <div className="img__max__width">
            <img src={laptop} alt="bird" />
          </div>

          {/* <h3>Overview</h3> */}
          <div className="text__block">
            <p>
              B.Rebel wanted its brand to speak through its design. Its design had to speak loud and clear to all of India.
              Our motto when creating the theme of this project was to add an impact that was youth-centric and one that could
              immediately catch their attention. It is a design created for mass appeal.
              Its visual identity is inspired by how the word Rebel makes a person feel i.e., strong, bold, brave, and fearless.
            </p>
          </div>

          <div className="img__max__width">
            <img src={bubbles} alt="ima" />
          </div>

          <div className="big_heading top__margin">
            <h1>User Journey</h1>
          </div>

          <div className="img__max__width bottom__margin top__margin">
            <img src={flowDiagram} alt="ima" />
          </div>

          <div className="big_heading top__margin">
            <h1>Design System</h1>
          </div>

          <div className="img__max__width top__margin">
            <img src={typography} alt="typography" />
          </div>


          <div className="img__max__width top__margin">
            <img src={colorss} alt="typography" />
          </div>

        </div>


        {/* form styles */}

        <div className="img__max__width top__margin bottom__margin form__styles__bg">

          <img src={formStyles} alt="ima" />

        </div>


        <div className="alignment__container2">
          <div className="big_heading top__margin">
            <h1>Wireframes</h1>
          </div>
        </div>


        <div className="wireframes__container">
          <div style={{ overflow: 'hidden' }}>
            <div className="blackBox img__max__width ">
              <img src={blackBox} alt="blackBox" />
            </div>
            <div className="wireframes img__max__width ">
              <img src={Wireframes} alt="wireframes" />
            </div>
          </div>
        </div>

        {/* HOMEPAGE */}

        <div className="alignment__container2">
          <div className="big_heading top__margin">
            <h1>Home Page</h1>
          </div>
        </div>

        <div className="brebel__homepage__section__background">
          <FlickingCarousel
            slide1={slide1}
            slide2={slide2}
            bold_B={true}
          />

          <div className="homepage__main__wrapper">
            {/* SIDE TEXT */}
            <div className="text__position__1 text_styles d__none__sm text__width">
              <p>"Proper encapsulation of wholesome messaging, style, and design aesthetics."</p>
              
              <div className="arrow__position arrow__styles">
                <img className="image" src={FirstArrow} />
              </div>
            </div>


            <div className="text__position__2 text_styles d__none__sm text__width">
              <p>"A clear intro of the products on offer."</p>

              <div className="arrow__position arrow__styles">
                <img className="image" src={SecArrow} />
              </div>
            </div>

            <div className="text__position__3 text_styles d__none__sm text__width">
              <p>"Brand vision coming to life."</p>

              <div className="arrow__position arrow__styles">
                <img className="image" src={thirdArrow} />
              </div>
            </div>


            <div className="text__position__4 text_styles d__none__sm text__width">
              <p>"Dedicated messaging for every major product."</p>

              <div className="arrow__position arrow__styles" style={{ width: '80%' }}>
                <img className="image" src={fourthArrow} />
              </div>
            </div>

            <div className="text__position__5 text_styles d__none__sm text__width">
              <p>"Extension of the above static blades, giving an immersive feel with a video."</p>

              <div className="arrow__position arrow__styles">
                <img className="image" src={thirdArrow} />
              </div>
            </div>

            <div className="text__position__6 text_styles d__none__sm text__width">
              <p>"The standout feature is shown with an analogy."</p>

              <div className="arrow__position arrow__styles">
                <img className="image" src={FirstArrow} />
              </div>
            </div>

            <div className="text__position__7 text_styles d__none__sm text__width">
              <p>"Distinct representation of every other feature worth emphasizing."</p>

              <div className="arrow__position arrow__styles">
                <img className="image" src={SecArrowReverse} />
              </div>
            </div>


            {/* big Images of full page */}
            <div className="homepage__image__wrapper1 top__margin">
              <img className="image" src={Home2} />
            </div>

            <div className="homepage__image__wrapper2">
              <img className="image" src={Home3} />
            </div>
          </div>



          <div className="text__right">
            <p>
            </p>
          </div>

          <div className="video__section__container">
            <div className="left__box">
              <img className="image" src={brebelProducts} />
            </div>
            <div className="right__box">
              <h2>Video</h2>
            </div>
          </div>


          {/* RESPONSIVE SECTION */}

          <div className="alignment__container2">
            <div className="responsive__section big_heading top__margin ">
              <h1>Responsive</h1>
            </div>
          </div>

          <TabView
            tab={tab}
            arrow={FirstArrow}
            direction="res__container"
            description="Minimal responsive outlay with direct messaging."
          />

          {/* <TabView
            tab={tabRev}
            arrowReverse={SecArrowReverse}
            direction="res__container__reverse"
            description="Lorem ipsum"
          /> */}
        </div>




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

export default Brebel;
