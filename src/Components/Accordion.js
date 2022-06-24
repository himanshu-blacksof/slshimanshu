import React, { useState } from "react";
import { Link } from 'react-router-dom';

//images
import arrowUp from "../assets/images/Path 1139.svg";
import arrowDown from "../assets/images/Path 1140.svg";
import arrow from "../assets/images/Group 1275.svg";

const Accordion = ({name}) => {
  const [toggle, settoggle] = useState(false);

  return (
    <>
      <div onClick={() => settoggle(!toggle)} className="accordion__row__container">
        <div className="accordion__row">
          <h5>{name}</h5>
          <img src={toggle ? arrowUp : arrowDown} alt="arrow" />
        </div>
        <hr />
      </div>

      <div className={`accordion__colapse ${toggle ? "uncolapse" : ""} `}>
        <div className="accordion__children__container">
          <div className="accordion__children__row">
            <h6>Sr. {name}</h6>
            <Link to="form">
              <h5>View</h5>
              <img src={arrow} alt="arrow" />
              </Link>
          </div>
          <hr />
        </div>
        <div className="accordion__children__container">
          <div className="accordion__children__row">
            <h6>{name}</h6>
            <Link to="form">
              <h5>View</h5>
              <img src={arrow} alt="arrow" />
              </Link>
          </div>
          <hr />
        </div>
        <div className="accordion__children__container">
          <div className="accordion__children__row">
            <h6>Jr. {name}</h6>
            <Link to="form">
              <h5>View</h5>
              <img src={arrow} alt="arrow" />
              </Link>
          </div>
          <hr />
        </div>
        <div className="accordion__children__container">
          <div className="accordion__children__row">
            <h6>{name} Intern</h6>
            <Link to="form">
              <h5>View</h5>
              <img src={arrow} alt="arrow" />
              </Link>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Accordion;
