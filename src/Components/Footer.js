import React from "react";

//icons
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <hr />
        <h3>Some design to impress. We design to impact.</h3>
        <div className="socials footer__social">
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
    </>
  );
};

export default Footer;
