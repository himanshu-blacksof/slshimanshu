import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
//component
import PortfolioHeading from '../Components/PortfolioHeading';
import Images from '../Components/Atoms/Images';
//Images
import ShopX from '../assets/shopXappAssets/shopx.svg';
import ShopXbarcode from '../assets/shopXappAssets/shopxBarcode.png';
import Heading from '../assets/shopXappAssets/heading.png';
import Strategy from '../assets/shopXappAssets/strategy.svg';
import Reward from '../assets/shopXappAssets/rewards.png';
import RewardSecond from '../assets/shopXappAssets/rewards_second.png';
import Chart from '../assets/shopXappAssets/chart.png';
import Category from '../assets/shopXappAssets/category.png';
import GridSystem from '../assets/shopXappAssets/gridSystem.svg';
import Red from '../assets/shopXappAssets/redhalfcircle.svg';
import Yellow from '../assets/shopXappAssets/yellowhalfcircle.svg';
import Concept from '../assets/shopXappAssets/concept.png';
import Concept_First from '../assets/shopXappAssets/Concept1.png';
import Concept_Second from '../assets/shopXappAssets/concept2.png';
import Concept_Third from '../assets/shopXappAssets/concept3.png';
import Concept_Fourth from '../assets/shopXappAssets/concept4.png';
import Concept_Fivth from '../assets/shopXappAssets/concept5.png';
import Concept_Sixth from '../assets/shopXappAssets/concept6.png';
import RedHalf from '../assets/shopXappAssets/redhalfcircle2.svg';
import YellowHalf from '../assets/shopXappAssets/yellowhalfcircle2.svg';
import ConceptCode from '../assets/shopXappAssets/conceptcode.png';
import Barcode from '../assets/shopXappAssets/barcode.png';
import Barcode_first from '../assets/shopXappAssets/barcode1.png';
import Barcode_second from '../assets/shopXappAssets/barcode2.png';
import Barcode_third from '../assets/shopXappAssets/barcode3.png';
import Barcode_fourth from '../assets/shopXappAssets/barcode4.png';
import Spinning_first from '../assets/shopXappAssets/spinning1.png';
import Spinning_second from '../assets/shopXappAssets/spinning2.png';
import Spinning_third from '../assets/shopXappAssets/spinning3.png';
import Spinning_fourth from '../assets/shopXappAssets/spinning4.png';
import Spinning_fivth from '../assets/shopXappAssets/spinning6.png';
import RedhalfCircle from '../assets/shopXappAssets/redhalfcircle3.svg';
import Yellowhalfcircle from '../assets/shopXappAssets/yellowhalfcircle3.svg';
import Puma from '../assets/shopXappAssets/puma.png';
import PumaCode from '../assets/shopXappAssets/paythree1.png';
import PumaCodeOne from '../assets/shopXappAssets/paythree2.png';
import PumaCodeTwo from '../assets/shopXappAssets/paythree3.png';
import PumaCodeThree from '../assets/shopXappAssets/paythree4.png';
import PumaCodeFourth from '../assets/shopXappAssets/paythree5.png';
import PumaCodeFivth from '../assets/shopXappAssets/paythree6.png';
import PumaCodeSixth from '../assets/shopXappAssets/paythree7.png';
import PumaCodeSeveth from '../assets/shopXappAssets/paythree8.png';
import RedcircleFourth from '../assets/shopXappAssets/redcircle4.svg';
import SuperMarket from '../assets/shopXappAssets/harshitasupermarket.png';
import NewGrocery from '../assets/shopXappAssets/newGrocery.png';
import Shopxhand from '../assets/shopXappAssets/shopxhand.png';
import Grid from '../assets/shopXappAssets/grid.png';
import Mainscreen from '../assets/shopXappAssets/mainscreen.png';
import Multidevice from '../assets/shopXappAssets/multidevice.png';
import Mural from '../assets/shopXappAssets/Mural-Wall-Mockup-Scene.png';
import CoffeeThank from '../assets/shopXappAssets/thankyoublade1.png';
import Coin from '../assets/shopXappAssets/thankyoublade2.svg';
import Brand from '../assets/shopXappAssets/thankyoublade3.png';
import Coin_one from '../assets/shopXappAssets/thankyoublade4.svg';
import Applicationchart from '../assets/shopXappAssets/application chart.png';
import Colorcode from '../assets/shopXappAssets/Colorcode.png';
const ShopXApp = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="ShopX App"
          subHeading="UI/UX"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."
        />
      </div>
      <section className="main_container ">
        <div className="shopx_wrapper  ">
          <img className="shopx_logo" src={ShopX} alt="shopx" />
          <p className="shopx_text  ">
            Dolore magna aliqua ut enim ad minim veniam, quis
            <span> nostrud exercitation </span> ullamco.
          </p>
        </div>
        <div className="background_circle ">
          <div className="barcode_wrapper">
            <img className="shopx_barcode " src={ShopXbarcode} alt="barcode" />
          </div>
        </div>
      </section>
      <section className="main_container ">
        <div className="heading_wrapper  ">
          <h3 className="heading_text ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <img className="heading_img" src={Heading} alt="img" />
          </h3>
        </div>
        <div className="research_wrapper">
          <div className="research">
            <p>Research</p>
          </div>
          <div className="research_para">
            <p>
              Dolore magna aliqua ut enim ad minim veniam, quis nostrud
              exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="strategy_wrapper">
          <img className="shopx_barcode " src={Strategy} alt="strategy" />
        </div>
      </section>
      <section className="cards_container">
        <div className="reward_wrapper ">
          <div className="reward_img_wrapper">
            <img className="reward-img " src={Reward} alt="rewards" />
          </div>
          <div className="rewards_right ">
            <h4>Rewards...</h4>
            <p>
              ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="reward_wrapper">
          <div className="rewardsecond_left">
            <h4>Rewards...</h4>
            <p>
              ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="rewardSecondimg_wrapper">
            <img className="reward-img" src={RewardSecond} alt="rewards" />
          </div>
        </div>
      </section>
      <section className="main_container">
        <div className="expertation_wrapper ">
          <h3>Ut enim ad minim veniam, quis nostrud exercitation</h3>
        </div>
        <div className="research_wrapper">
          <div className="research">
            <p>Project Overview</p>
          </div>
          <div className="research_para">
            <p>
              Dolore magna aliqua ut enim ad minim veniam, quis nostrud
              exercitation ullamco.
            </p>
          </div>
        </div>
        <img className="chart_wrapper" src={Chart} alt="chart" />
      </section>
      <section className="cards_container">
        <div className="heading_wrapper">
          <h3 className="text_wrapper">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h3>
        </div>
        <div className="research_wrapper_black">
          <div className="research">
            <p>Project Overview</p>
          </div>
          <div className="research_para_black">
            <p>
              Dolore magna aliqua ut enim ad minim veniam, quis nostrud
              exercitation ullamco.
            </p>
          </div>
        </div>
        <img className="colorcode" src={Colorcode} alt="Shopxhand" />
        <div className="heading_wrapper">
          <h3 className="text_wrapper">Dolor sit amet, adipiscing elit</h3>
        </div>
        <div className="research_wrapper_black">
          <div className="research">
            <p>Design elements</p>
          </div>
          <div className="research_para_black">
            <p>
              Dolore magna aliqua ut enim ad minim veniam, quis nostrud
              exercitation ullamco.
            </p>
          </div>
        </div>
        <img className="chart_wrapper" src={Category} alt="category" />
        <div className="background_grid">
          <div className="expertation_wrapper">
            <h3>Ut enim ad minim veniam, quis nostrud exercitation</h3>
          </div>
          <div className="research_wrapper">
            <div className="research">
              <p>Project Overview</p>
            </div>
            <div className="research_para">
              <p>
                Dolore magna aliqua ut enim ad minim veniam, quis nostrud
                exercitation ullamco.
              </p>
            </div>
          </div>

          <div className="grid_wrapper ">
            <img className="chart_wrapper" src={GridSystem} alt="grid img" />
          </div>
        </div>
      </section>
      <section className="cards_container">
        <div className="heading_wrapper">
          <h3 className="text_wrapper">
            Lorem dolor sit amet, adipiscing elit
          </h3>
        </div>
        <div className="research_wrapper_black">
          <div className="research">
            <p>Application structure</p>
          </div>
          <div className="research_para_black ">
            <p>Enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
        <img
          className="applicationchart "
          src={Applicationchart}
          alt="Shopxhand"
        />
        <div className="circle_wrapper ">
          <img className="circle_red" src={Red} alt="shopping" />
          <img className="circle_yellow" src={Yellow} alt="shopping" />
        </div>
        <div className="para_wrapper ">
          <p>Earn more point and unlock new scratch card</p>
          <h1 className="concept_wrapper">CONCEPT</h1>

          <img className="concept_img" src={Concept} alt="concept" />
        </div>
        <div className="cong_wrapper">
          <div className="concept_first">
            <img className="chart_wrapper" src={Concept_First} alt="concept" />
          </div>
          <div className="concept_second">
            <img className="chart_wrapper" src={Concept_Second} alt="concept" />
          </div>
        </div>
        <div className="cong_wrapper">
          <div className="concept_third">
            <img className="chart_wrapper" src={Concept_Third} alt="concept" />
          </div>
          <div className="concept_third">
            <img className="chart_wrapper" src={Concept_Fourth} alt="concept" />
          </div>
          <div className="concept_third">
            <img className="chart_wrapper" src={Concept_Fivth} alt="concept" />
          </div>
          <div className="concept_third">
            <img className="chart_wrapper" src={Concept_Sixth} alt="concept" />
          </div>
        </div>
        <div className="american_women ">
          <img
            className="circle_yellow_second"
            src={YellowHalf}
            alt="shopping"
          />
          <img className="circle_red_second" src={RedHalf} alt="shopping" />
        </div>
        <div className="para_wrapper">
          <p>Earn more point and unlock new scratch card</p>
          <h1 className="concept_wrapper">CONCEPT</h1>
          <img className="concept_img" src={ConceptCode} alt="concept" />
        </div>
        <div className="scanner_wrapper">
          <div className="concept_fourth">
            <img className="chart_wrapper" src={Barcode} alt="concept" />
          </div>
          <div className="concept_fourth">
            <img className="chart_wrapper" src={Barcode_first} alt="concept" />
          </div>
          <div className="concept_fourth">
            <img className="chart_wrapper" src={Barcode_second} alt="concept" />
          </div>
          <div className="concept_fourth">
            <img className="chart_wrapper" src={Barcode_third} alt="concept" />
          </div>
          <div className="concept_fourth">
            <img className="chart_wrapper" src={Barcode_fourth} alt="concept" />
          </div>
        </div>
        <div className="spinning_wrapper">
          <div className="concept_fourth">
            <img
              className="chart_wrapper"
              src={Spinning_first}
              alt="spinning"
            />
          </div>
          <div className="concept_fourth">
            <img
              className="chart_wrapper"
              src={Spinning_second}
              alt="spinning"
            />
          </div>
          <div className="concept_fourth">
            <p className="spinning_para">
              Dolore magna aliqua ut enim ad minim veniam, quis nostrud
              exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="spinning_wrapper">
          <div className="concept_fourth">
            <img
              className="chart_wrapper"
              src={Spinning_third}
              alt="spinning"
            />
          </div>
          <div className="concept_fourth">
            <img
              className="chart_wrapper"
              src={Spinning_fourth}
              alt="spinning"
            />
          </div>
          <div className="concept_fourth">
            <img
              className="chart_wrapper"
              src={Spinning_fivth}
              alt="spinning"
            />
          </div>
        </div>
        <div className="indian_women">
          <img
            className="red_indian_women"
            src={RedhalfCircle}
            alt="shopping"
          />
          <img
            className="yellow_indian_women"
            src={Yellowhalfcircle}
            alt="shopping"
          />
        </div>
        <div className="para_wrapper">
          <p>Earn more point and unlock new scratch card</p>
          <h1 className="concept_wrapper">CONCEPT</h1>
          <img className="concept_img" src={Puma} alt="concept" />
        </div>
        <div className="scanner_wrapper">
          <div className="concept_fourth">
            <img className="chart_wrapper" src={PumaCode} alt="concept" />
          </div>
          <div className="concept_fourth">
            <img className="chart_wrapper" src={PumaCodeOne} alt="concept" />
          </div>
          <div className="concept_fourth">
            <img className="chart_wrapper" src={PumaCodeTwo} alt="concept" />
          </div>
          <div className="concept_fourth">
            <img className="chart_wrapper" src={PumaCodeThree} alt="concept" />
          </div>
        </div>
        <div className="scanner_wrapper_left">
          <div className="concept_fivth">
            <img className="chart_wrapper" src={PumaCodeFourth} alt="concept" />
          </div>
          <div className="concept_fivth">
            <img className="chart_wrapper" src={PumaCodeFivth} alt="concept" />
          </div>
          <div className="concept_fivth">
            <img className="chart_wrapper" src={PumaCodeSixth} alt="concept" />
          </div>
          <div className="concept_fivth">
            <img className="chart_wrapper" src={PumaCodeSeveth} alt="concept" />
          </div>
        </div>
        <div className="store_container">
          <img className="circle_red" src={YellowHalf} alt="shopping" />
          <img
            className="circle_red_fourth"
            src={RedcircleFourth}
            alt="shopping"
          />
        </div>
        <div className="para_wrapper">
          <p>Earn more point and unlock new scratch card</p>
          <h1 className="concept_wrapper">CONCEPT</h1>
          <img className="concept_img " src={SuperMarket} alt="concept" />
        </div>
        <div className="newgrocery_wrapper ">
          <img className="newgrocery " src={NewGrocery} alt="newgrocery" />
        </div>
      </section>
      <Images
        className="shopxhand"
        image={Shopxhand}
        fullwidth
        alt="Shopxhand"
      />
      <div className="supersaver">
        <h3 className="text_super">Save at Supersaver Stores near you</h3>
        <Images className="grid" image={Grid} fullwidth alt="img" />
      </div>
      <section className="cards_container">
        <div className="heading_wrapper">
          <h3 className="text_wrapper">Sit amet,</h3>
          <h3 className="text_wrapper"> adipiscing elit</h3>
        </div>
        <div className="research_wrapper_black">
          <div className="research">
            <p>Main Screen</p>
          </div>
          <div className="research_para_black">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
        <Images image={Mainscreen} fullwidth alt="img" />
      </section>
      <div className="multidevice">
        <div className="text_screen">
          <div>
            <strong>125+</strong>
            <h3 className="screens">Screens</h3>
          </div>
          <div>
            <strong>77</strong>
            <h3 className="screens">Hours</h3>
          </div>
        </div>
        <div className="text_days">
          <strong>49</strong>
          <h3 className="screens">Days</h3>
        </div>
        <Images
          className="multidevice_wrapper"
          image={Multidevice}
          fullwidth
          alt="img"
        />
        <Images
          className="multidevice_wrapper"
          image={Mural}
          fullwidth
          alt="img"
        />
      </div>
      <section className="cards_container">
        <div className="thank_wrapper">
          <h3>Thanks for </h3>
          <h3>watching</h3>
          <img className="coffeecard " src={CoffeeThank} alt="img " />
          <img className="coin " src={Coin} alt="img " />
          <img className="brand  " src={Brand} alt="img " />
          <img className="coin_two " src={Coin_one} alt="img " />
        </div>
        <div className="Thank_mobile" data-aos="fade-up">
          <h3>Thanks for</h3>
          <h3>watching</h3>
        </div>
      </section>
    </>
  );
};
export default ShopXApp;
