import React, { useState, useRef } from "react";
import { gsap } from "gsap/all";

const TeamCard = ({ name, image, post, description, close, linkedInLink }) => {
  // const [open, setopen] = useState(false);

  let overContainerRef = useRef(null)

  const handleClick = () => {
    gsap.to(overContainerRef, { duration: .4, display: 'block', opacity: 1 })
    // setopen(true)
  }

  const handleClose = () => {
    gsap.to(overContainerRef, { duration: .3, display: 'none', opacity: 0 })
    // setopen(true)
  }

  return (
    <>
      <div onClick={handleClick} className="card__container">
        <div className="card__image image__border">
          <img src={image} alt="aditya" />
        </div>
        
        <div className="card__content">
          <h5>{name}</h5>
          <p>{post}</p>
        </div>
      </div>

      <div className="overlay__container" ref={(ele) => overContainerRef = ele}>
        <div className="overlay__container__inside">
          <div className="overlay">
            <div onClick={handleClose} className="close__button">
              <img src={close} alt="close" />
            </div>
            <div className="overlay__content__container">
              <div className="overlay__content">
                <div className="card__image__popup image__border">
                  <img src={image} alt="aditya" />
                </div>
                <div className="about__team__member">
                  <h5>{name}</h5>
                  <h6>{post}</h6>
                  <p>{description}</p>
                  <a target="_blank" rel="noreferrer" href={linkedInLink}><h6>Linkedin</h6></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
