import React, { useEffect } from "react";
//Framer motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
//images
import mail from "../assets/images/email.svg";
import phone from "../assets/images/phone.svg";

//icons
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";

const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <div className="master__container">
          <div className="connect__headings">
            <h1>Hey! Let's</h1>
            <h1>Brew Some</h1>
            <h1>Conversations</h1>
          </div>

          <div className="contact__container">
            <div className="business__enquiries">
              <h2>For Business Enquiries</h2>
              <div className="contact__info">
                <div className="mail">
                  <img src={mail} alt="mail" />
                  <p> <a href="mailto:hello@blacksof.com" rel="noopener noreferrer" target="_blank" >hello@blacksof.com</a></p>
                </div>
                <div className="phone">
                  <img src={phone} alt="phone" />
                  <div className="phone__numbers">
                    <p>+91 78802 88026</p>
                    <p>+91 78802 88025</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="business__enquiries">
              <h2>To Join Our Team</h2>
              <div className="contact__info">
                <div className="mail">
                  <img src={mail} alt="mail" />
                  <p>hiring@blacksof.com</p>
                </div>
                <div className="phone">
                  <img src={phone} alt="phone" />
                  <div className="phone__numbers">
                    <p>+91 91094 18708</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__footer">
            <h5>
              202, ASH-12, Bapat Square, opposite Bapat Hospital, Indore, Madhya
              Pradesh 452010
            </h5>
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
            <h6>© 2021 Blacksof</h6>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactUsPage;
