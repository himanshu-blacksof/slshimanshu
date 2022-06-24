import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

//components
import PageHeading from "../Components/PageHeading";
import OurCulture from "../Components/OurCulture";
import Footer from "../Components/Footer";

//images
import service01 from "../assets/images/services__.svg";
import service02 from "../assets/images/Services_img_2.svg";
import service03 from "../assets/images/Services_img_3.svg";
import service04 from "../assets/images/Services_img_3.png";

const ServicePage = () => {
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
          heading="Services"
          subHeading="Products come and go, experience stays! And that’s what we help you create. "
          subSubHeading="We create people-centric experiences, be it for our clients or our team."
        />

        <div className="page__info__paragraph">
          <p>
            Design at Blacksof goes beyond visually appealing products. We
            create meaningful outcomes at the cross-section of Design, Strategy,
            and Marketing.
          </p>
          <p>
            We leverage design as a tool to convey intelligence which is driven
            by Research that empathizes with your end-user, Marketing decisions
            that drive sales, and Strategy which ensures long-term results. All
            our services revolve around this imbibed approach.
          </p>

          <div className="para__info__image image__padding">
            <img src={service01} alt="service" />
          </div>
        </div>

        <div className="service__list__container">
          <OurCulture
            image={service02}
            heading="Brand Identity Creation"
            para="We help form your brand identity and positioning by reflecting upon its competitive value to establish a brand that connects with its audience’s emotions and needs."
            direction="reverse"
            list={[
              "Brand Strategy",
              "Brand Positioning",
              "Brand Story",
              "Brand Presence",
              "Marketing Communications",
            ]}
          />

          <OurCulture
            image={service03}
            heading="Brand Identity Application"
            para="We help your brand establish its digital identity and design a holistic digital strategy targeting competitive peripheries to create awareness, brand value, and lead to your brand’s success."
            direction=""
            list={[
              "Digital Positioning",
              "Social Media Strategy",
              "Digital Campaigns",
              "Digital Presence",
              "Digital Presence ",
              "Lead Generation Strategy",
              "Process Implementation",
              "User Digital Journey",
              "Team Upskilling",
            ]}
          />

          <OurCulture
            image={service04}
            heading="Brand Identity Promotion"
            para="We help you gain actionable market and user insights and devise design initiatives that target competent niches and leverage opportunities that are most valuable to your business."
            direction="reverse"
            list={[
              "Market Research",
              "SWOT Analysis",
              "Competitor Analysis",
              "Persona Definition",
              "Marketing Funnel Implementation",
              "Marketing Plans",
            ]}
          />
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default ServicePage;
