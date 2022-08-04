import React from 'react';
//Components
import PortfolioHeading from '../Components/PortfolioHeading';
import Images from '../Components/Atoms/Images';

const Rudo = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="RuDo Wealth"
          subHeading="UI/UX"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."
        />
      </div>
      <div className="saving_container">
        <div>
          <h1 className="saving">SAVINGS MADE EASY ❗ </h1>
        </div>
      </div>
      <div className="cards_container">
        <div className="rudo_wrapper">
          <div>
            <h2>Epilogue</h2>
          </div>
          <div className="circle">
            <div className="name"></div>
            <div className="text">
              <h3>RuDo Wealth.RuDo Wealth.RuDo Wealth.</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rudo;
