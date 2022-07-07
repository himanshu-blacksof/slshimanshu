import React from 'react';
//component
import PortfolioHeading from '../Components/PortfolioHeading';

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
const ShopXApp = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="ShopX App"
          subHeading="UI/UX"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."
        />
      </div>
      <section className="main_container">
        <div className="shopx_wrapper ">
          <img className="shopx_logo" src={ShopX} alt="shopx" />
          <p className="shopx_text  ">
            Dolore magna aliqua ut enim ad minim veniam, quis
            <span> nostrud exercitation </span> ullamco.
          </p>
        </div>
        <div className="background_circle">
          <div className="barcode_wrapper">
            <img className="shopx_barcode " src={ShopXbarcode} alt="barcode" />
          </div>
        </div>
      </section>
      <section className="cards_container"></section>
      <section className="main_container">
        <div className="heading_wrapper ">
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
        <div className="reward_wrapper">
          <div className="reward_img_wrapper">
            <img className="reward-img " src={Reward} alt="rewards" />
          </div>
          <div className="rewards_right">
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
          <div className="grid_wrapper">
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
          <div className="research_para_black">
            <p>Enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
        <div className="circle_wrapper">
          <img className="circle_red" src={Red} alt="shopping" />
          <img className="circle_yellow" src={Yellow} alt="shopping" />
        </div>
        <div className="para_wrapper">
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
        <div className="american_women">
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
      </section>
    </>
  );
};
export default ShopXApp;
