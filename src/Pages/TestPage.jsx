import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

import Footer from "../Components/Footer";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("this is form submit");
  };

  const Field = ({ placeholder, name, labelText }) => {
    return (
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder={placeholder}
          name={name}
          id={name}
        />
        <label for="name" class="form__label">
          {labelText}
        </label>
      </div>
    );
  };

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <section className="master__container">
        <div className="form__master flex-1">
          <div className=" d  left__master">
            <h3>Sr. Graphic Designer</h3>
            <div className="items__master">
              <h4>Key Responsibilities</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <div className="items__master">
              <h4>Good To Have</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <div className="items__master">
              <h4>Key Responsibilities</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
          <form onSubmit={handleSubmit} className=" d right__master">
            <Field placeholder="Enter Name" name="name" labelText="Full Name" />
          </form>
        </div>

        <Footer />
      </section>
    </motion.div>
  );
};

export default AboutPage;
