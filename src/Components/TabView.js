import React, { useState } from "react";


const TabView = ({
  tab, arrow, arrowReverse,direction,description
}) => {

  return (
    <>
      <div className={`alignment__container2 ${direction} `}>
          <div className="half__left">
            <img className="image" src={tab} alt="Tab Image" />
          </div>

          <div className="half__right">
            <div className="text_styles text__width__responsive">
              {
                arrow ?
                  <div className="arrow__position arrow__styles">
                    <img className="image" src={arrow} />
                  </div> 
                  :
                  <div className="arrow__position__reverse arrow__styles" >
                    <img className="image" src={arrowReverse} />
                  </div>
              }

              <p>"{description}"</p>

            </div>
          </div>
      </div>
    </>
  );
};

export default TabView;



