import React from "react";

//components
import PortfolioHeading from "../Components/PortfolioHeading";
import PrevAndNextWork from "../Components/PrevAndNextWork";
import Footer from "../Components/Footer";

//images
import infoPress from "../assets/images/IP.jpg";
import itat from "../assets/images/ITAT.jpg";


import vch01 from "../assets/vijay chat assets/Group 704.png";
import logoMaking from "../assets/vijay chat assets/VCH-1.png";
import logo from "../assets/vijay chat assets/1_Pantagram_Size.png";
import vch02 from "../assets/vijay chat assets/Group 705.png";
import leaf from "../assets/vijay chat assets/leaf.png";
import vch03 from "../assets/vijay chat assets/Group 710.png";
import vch04 from "../assets/vijay chat assets/RM12-238-Ae-02.png";
import vch05 from "../assets/vijay chat assets/02-branding-mockup-essentials-freebie.png";
import vch06 from "../assets/vijay chat assets/Mask Group 21.png";
import vch07 from "../assets/vijay chat assets/Group 692.png";
import vch08 from "../assets/vijay chat assets/Group 691.png";
import vch09 from "../assets/vijay chat assets/Image 55.png";

const VijayChatHouse = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="Vijay Chat House"
          subHeading="Rebranding | Packaging | UI/UX "
          info="Rebranding, Packaging, & UI/UX for a 50 year old fooding giant
                Vijay Chat House - The ‘Food Joint Next Door’ in Indore
                Every city has a historical legacy and Indore, in this case, is known for its city-wide mouth-watering road-side eateries. Vijay Chat House (VCH) is a legendary place with a 50 years history of serving taste and purity with their unique dishes. 
                VCH, though, being an indispensable part of Indore’s world famous late night chat chaupati - Sarafa and the abode of food fanatics - Chhappan Dukan, was only known through word of mouth."
        />

        <div className="alignment__container">
          <div className="img__max__width" data-aos="fade-up">
            <img src={vch01} alt="vch" />
          </div>

          <div className="text__block" data-aos="fade-up">
            <p>
              The brand is its brand mark VCH means something more to Indore
              than just a food joint. For years, it has been serving a range of
              mouth-watering delicacies that have come to represent Indore
              nationwide. People know the brand, but no one knows the Halwais
              (Chefs) who have been bringing the VCH quality and flavor to life
              everyday for a century until we superimposed their importance on
              the VCH Brand Mark.{" "}
            </p>
          </div>

          <div className="vch__logo__making img__max__width" data-aos="fade-up">
            <img src={logoMaking} alt="logo" />
          </div>

          <div className="vch__logo" data-aos="fade-up">
            <img src={logo} alt="logo" />
          </div>
        </div>

        <div className="full__img" data-aos="fade-up">
          <img src={vch02} alt="vch" />
        </div>

        <div className="alignment__container">
          <div className="top__margin">
            <p>
              VCH is not only known for its flavour but the tradition and homage
              it pays to its customers and team. We wanted to bring the brand to
              life through design and hence we kept our chief focus on creating
              an experience across each sphere, be it at clients’ end or the
              teams’.
            </p>
            {/* </div>
          <div className="text__block"> */}
            <p>
              Studying the internal and external touchpoints of VCH, we crafted
              a design plan to impact each one of its stakeholders. The exercise
              enabled us to create impactful collaterals which boosted over-all
              experience of the brand. We indulged in:- Brand Mark Design
              Iconography Branding Packaging In-store Experience Website UI/UX
              Branding of Team Damdaar
            </p>
          </div>

          <div className="img__max__width" data-aos="fade-up">
            <img src={leaf} alt="leaf" />
          </div>

          <div className="img__max__width bottom__margin" data-aos="fade-up">
            <img src={vch03} alt="vch" />
          </div>
        </div>

        <div className="img__max__width" data-aos="fade-up">
          <img src={vch04} alt="vch" />
        </div>

        <div className="alignment__container" data-aos="fade-up">
          <div className="text__block">
            <p>
              Officiating the Legend’s Brand Voyage After designing an extensive
              brand theme for VCH, we replicated it across a variety of print
              and digital collaterals creating an online and offline presence of
              the food legend and extending its essence from an intangible to
              tangible medium. Now, VCH has a recall value apart from its food,
              a brand personality which represents its legacy, its history,
              disembarking it officially in the business world as a brand and
              not just a local food joint.
            </p>
          </div>
        </div>

        <div className="full__img bottom__margin" data-aos="fade-up">
          <img src={vch05} alt="vch" />
        </div>

        <div className="full__img " data-aos="fade-up">
          <img src={vch06} alt="vch" />
        </div>

        <div className="creame__background" data-aos="fade-up">
          <div className="alignment__container2">
            <div className="img__max__width top__padding bottom__margin2">
              <img src={vch07} alt="vch" />
            </div>
            <div className="img__max__width bottom__margin2">
              <img src={vch08} alt="vch" />
            </div>
            <div className="img__max__width bottom__padding">
              <img src={vch09} alt="vch" />
            </div>
          </div>
        </div>
      </div>

      <PrevAndNextWork
        image1={infoPress}
        image2={itat}
        prev="/work/informatic-press"
        next="/work/itat"
      />
      <Footer />
    </>
  );
};

export default VijayChatHouse;
