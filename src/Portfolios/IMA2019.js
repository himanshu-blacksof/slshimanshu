import React from "react";

//components
import PortfolioHeading from "../Components/PortfolioHeading";
import PrevAndNextWork from "../Components/PrevAndNextWork";
import Footer from "../Components/Footer";

//images
import vijay from "../assets/images/VCH.jpg";
import encompass from "../assets/images/encompass.jpg";

import birds from "../assets/ima 2019 assets/Layer 16.png";
import books from "../assets/ima 2019 assets/Group 711.png";
import ima01 from "../assets/ima 2019 assets/Group 694.png";
import ima02 from "../assets/ima 2019 assets/Group 235.png";
import ima03 from "../assets/ima 2019 assets/Group 695.png";
import ima04 from "../assets/ima 2019 assets/Group 696.png";
import ima05 from "../assets/ima 2019 assets/Group 697.png";
import ima06 from "../assets/ima 2019 assets/Group 698.png";
import ima07 from "../assets/ima 2019 assets/Group 699.png";
import ima08 from "../assets/ima 2019 assets/Group 700.png";
import event from "../assets/ima 2019 assets/Image 39.png";

const IMA2019 = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="IMA Conclave 2019"
          subHeading="Visual Identity | Branding"
          info="Visual Identity and Branding for a 57 years old Management Association
                Indore Management Association is a nationally acclaimed 57 years old body of entrepreneurs that aims at uplifting the local and national business landscape across India. IMA Conclave is their flagship annual conference that in 2019 brought together 3000+ leaders, entrepreneurs, students, and enthusiasts at one junction to discuss breakthroughs, challenges, and the global economic landscape. "
        />

        <div className="alignment__container2">
          <div className="img__max__width">
            <img src={birds} alt="bird" />
          </div>

          <div className="text__block">
            <p>
              The first step was creating an identity for the conclave and using
              its elements to brand the event. The theme revolved around
              innovations that make us rethink the past and reimagine the
              future. Many pivotal innovations like the Aeroplane, Bullet Train,
              and Robots, etc. have been inspired by nature. The concept is
              called biomimicry - the design and production of materials,
              structures, and systems that are modelled on biological entities
              and processes.
            </p>
          </div>

          <div className="img__max__width">
            <img src={books} alt="ima" />
          </div>

          <div className="text__block">
            <p>
              We decided to blend Biomimicry with Art and use it as the face of
              the IMA Conclave 2019. Since, birds have been a source of
              inspiration for many innovations, the IMA Conclave logo concept
              and typeface revolved around these creatures
            </p>
          </div>

          <div className="img__max__width bottom__margin">
            <img src={ima01} alt="ima" />
          </div>

          <div className="img__max__width">
            <img src={ima02} alt="ima" />
          </div>

          <div className="text__block">
            <p>
              To increase the interaction between the brand and the attendees,
              we studied their entire journey and created collaterals to
              increase the number of touchpoints and create a seamless
              experience. The logo concept enabled us to create a comprehensive
              branding theme and strategy to design an extensive range of 100+
              collaterals for Sales, Conclave Promotion, Individual Events, and
              Venue covering each and every aspect of the conclave. We used the
              power of visuals and content to give a voice to the conclave and
              make it speak for itself. Time was of the essence and hence the
              entire planning and strategy entailed 2x efforts.
            </p>
          </div>

          <div className="img__max__width">
            <img src={ima03} alt="ima" />
          </div>

          <div className="text__block">
            <p>
              The success of the conclave required an end-to-end solution which
              respected time and optimized expenses. Control over various
              factors was the key and hence we took up the charge of the entire
              event to ensure timely delivery and create impact, while it
              mattered.
            </p>
          </div>

          <div className="img__max__width">
            <img src={ima04} alt="ima" />
          </div>

          <div className="text__block">
            <p>
              Considering time sensitivity and costing goals, we accessed our
              network of third-party vendors to get all collaterals printed and
              to cancel any chances of production errors, delivery, and
              execution. All these initiatives allowed us to cut down the
              printing cost close to 20%.
            </p>
          </div>

          <div className="img__max__width">
            <img src={ima05} alt="ima" />
          </div>

          <div className="text__block">
            <p>
              Our aim was not only to brand the conclave but also uplift the
              entire attending experience. Through our survey with the IMA team,
              we found out that most of the attendees took physical notes during
              the talks which made the notepad an important interaction point.
              To increase the usability, we branded the notepad and transformed
              it into a memorable souvenir which could be carried back home and
              used as a diary. The exercise helped us improve brand retention in
              the attendees by making it a part of their everyday lives.
            </p>
          </div>

          <div className="img__max__width bottom__margin2">
            <img src={ima06} alt="ima" />
          </div>

          <div className="img__max__width bottom__margin2">
            <img src={ima07} alt="ima" />
          </div>

          <div className="img__max__width bottom__margin2">
            <img src={ima08} alt="ima" />
          </div>

          <div className="img__max__width bottom__margin2">
            <img src={event} alt="ima" />
          </div>
        </div>
      </div>

      <PrevAndNextWork
          prev="/work/vijay-chat-house"
          next="/work/encompass"
          image1={vijay}
          image2={encompass}
        />
        
      <Footer/>
    </>
  );
};

export default IMA2019;
