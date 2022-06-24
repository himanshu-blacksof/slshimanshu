import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import {  pageAnimation } from '../animation';

//conponents
import PageHeading from "../Components/PageHeading";
import Accordion from "../Components/Accordion";
import OurCulture from "../Components/OurCulture";
import Footer from "../Components/Footer";

//images
// import aboutImage01 from "../assets/images/About_Img_1.png";
import aboutImage02 from "../assets/images/About_Img_2.png";
import aboutImage03 from "../assets/images/About_Img_3.png";
import aboutImage04 from "../assets/images/About_Img_4.png";

const JoinUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <div className="master__container">
        <PageHeading
          heading="Join us"
          subHeading="Blacksof will be what 
          YOU make it"
          subSubHeading="We create people-centric experiences, be it for our clients or our team."
        />

        <div className="page__info__paragraph">
          <p>
            We are not a mainstream product company wherein the exorbitant
            inanimate objects (hi-end PCs and expensive software) are the most
            valuable piece of the puzzle.
          </p>
          <p>
            We are a service-based company where our most valuable asset is our
            team and we understand that.
          </p>
        </div>

        <div className="main__heading">
          <h1>Our Culture</h1>
        </div>

        <div className="mini__paragraph">
          <p>
            People often find us collaborating to decode a project’s x-factor,
            brainstorm mind-boggling concepts, or just chill around and joke.
          </p>
        </div>

        <div className="service__list__container">
          <OurCulture
            image={aboutImage02}
            heading="Be Vulnerable, Be Shameless"
            para="We promote all members to speak their minds, take wild leaps, disagree, commit mistakes, be vulnerable, be shameless. What matters to us is that you LEARN and GROW."
            direction=""
            list={[]}
          />
          <OurCulture
            image={aboutImage03}
            heading="Your Work, Your Ownership"
            para="We promote an open culture, far from what a typical workplace feels like. We understand the importance of a progressive work environment and hence we give independence of work; it’s your ownership and dedication which makes Blacksof what it is."
            direction="reverse"
            list={[]}
          />
          <OurCulture
            image={aboutImage04}
            heading="Company Growth ∝ Your Growth"
            para="We promote a culture of peer-to-peer learning. Expect us to be brutally mischievous when it’s about moving you out of your comfort zone. People often discover their latent potential when they are set out into the unknown to explore something new."
            direction=""
            list={[]}
          />
        </div>

        <div className="main__heading">
          <h1>Openings</h1>
        </div>

        <div className="mini__paragraph">
          <p>
            Working with us can be fun if you are the perfect mix of
            intelligent, creative, and humorous. Apply for what you are
            passionate about! We would love to meet over a cup of coffee and
            discuss our possible collaboration.
          </p>
        </div>
        <Accordion name="Graphic Design" />
        <Accordion name="UI-UX Design" />
        <Accordion name="2D Design" />
        <Accordion name="Copywriting" />
        <Accordion name="Project Management" />
        <Accordion name="Account Management" />
        <Accordion name="Strategy" />
        <Accordion name="Business Development" />
        <Accordion name="Human Resource" />
        <Footer />
      </div>
    </motion.div>
  );
};

export default JoinUsPage;
