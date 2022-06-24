  import React from "react";


//icons
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";

const HomeFooter = () => {
  return (
    <>
      <div className="home__footer">
        <div className="home__footer__container">
          <div className="socials">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/blacksofdesign/"
            >
              <img src={facebook} alt="facebook icon" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/blacksof_design/?igshid=dfk0aou5siq8"
            >
              <img src={instagram} alt="instagram icon" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/company/blacksof"
            >
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/blacksof_design?s=09"
            >
              <img src={twitter} alt="twitter icon" />
            </a>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
