import React from "react";
//images
import arrow from "../assets/images/arrow.svg";

const WorkPortfolios = ({
  image,
  type,
  heading1,
  heading2,
  direction,
  margin,
  path,
}) => {
  return (
    <>
      <div className={`work__container ${direction} ${margin} ${path}`}>
        <div className="work__image">
          <a rel="noreferrer" href={path} target="_blank">
            <img src={image} alt="ima branding" />
          </a>
        </div>
        <div className="work__text">
          <h5>{type}</h5>
          <h3>{heading1}</h3>
          <h3>{heading2}</h3>
          <div className="view__arrow">
            <a rel="noreferrer" href={path} target="_blank">
              <h5>View</h5>
              <img className="image" src={arrow} alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkPortfolios;
