import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

// components
import PageHeading from "../Components/PageHeading";

import Footer from "../Components/Footer";

//image
import aboutImage01 from "../assets/images/About_Img_1.svg";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="master__container">
        <PageHeading
          heading="About"
          subHeading="Our journey started with passion. A passion to create business value through design."
          subSubHeading="We create people-centric experiences, be it for our clients or our team."
        />

        <div className="page__info__paragraph">
          <p>
            Back in the day, Aditya used to lead a successful drone
            manufacturing business which he started as a hobby in his college
            days. Not much time into it, he was single-handedly managing and
            flourishing in this rather capital intensive industry without much
            capital. The reason was simple - his proactive approach towards work
            and the experience he created for his clients right from design to
            coordination to delivery. It didn’t take him long to realize that
            customer experience is the key in driving business growth and that
            most of the businesses just sell, they don’t create a good
            experience for their clients. The idea got him to think about how he
            could create a business that was only about creating such
            experiences.
          </p>
          <p>
            In a parallel universe somewhere, Harshal was a professional
            freelance designer who envisioned to radically change the
            traditional businesses’ outlook through design. Hailing from a
            family of design veterans, he understood the value of quality design
            and experience which allowed him to work for multiple national
            brands.
          </p>

          <div className="para__info__image">
            <img src={aboutImage01} alt="about" />
          </div>
        </div>

        <Footer />
      </div>
    </motion.div>
  );
};

export default AboutPage;
