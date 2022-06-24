import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

//images
import ima from "../assets/images/Ima.jpg";
import infoPress from "../assets/images/IP.jpg";
import vijay from "../assets/images/VCH.jpg";
import itat from "../assets/images/ITAT.jpg";
import sleek from "../assets/images/sleek_new.jpg";
import ima2020 from "../assets/images/ima2020.jpg";
import sinless from "../assets/images/sinless_new.jpg";
import encompass from "../assets/images/encompass.jpg";
import brebel from "../assets/brebelAssets/Group 7314.jpg";
import spintly from "../assets/spintlyAssets/Group 7316.jpg";
import senstra from "../assets/images/senstra_new.jpg";
import evre from "../assets/evreAssets/work_banner.jpg";

//import components
import WorkPortfolios from "../Components/WorkPortfolios";
import Work from "../Components/Work";
import Footer from "../Components/Footer";
import NewPortfolio from "../Components/NewPortfolio";

const workData = [
  {
    category: ["ui"],
    image1: brebel,
    type1: "#UI/UX",
    company1: "B.REBEL",
    subhead1: "",
    path1: "/work/brebel",
  },
  {
    category: ["ui", "branding"],
    image1: sinless,
    type1: "#UI/UX",
    type1_1: "#Branding",
    company1: "SINless",
    subhead2: "",
    path1: "/work/sinless",
  },
  {
    category: ["ui", "branding"],
    image1: senstra,
    type1: "#UI/UX",
    type1_1: "#Branding",
    company1: "Senstra",
    subhead1: "",
    path1: "/work/senstra",
  },
  {
    category: ["ui", "branding"],
    image1: vijay,
    type1: "#UI/UX",
    type1_1: "#Branding",
    company1: "Vijay Chat House",
    subhead2: "",
    path1: "/work/vijay-chat-house",
  },
  {
    category: ["branding"],
    image1: ima,
    type1: "#Branding",
    company1: "IMA Conclave 2019",
    subhead1: "",
    path1: "/work/ima2019",
  },
  {
    category: ["branding"],
    image1: infoPress,
    type1: "#Branding",
    company1: "Informatics Press",
    subhead1: "",
    path1: "/work/informatic-press",
  },
  {
    category: ["branding"],
    image1: itat,
    type1: "#Branding",
    company1: "ITAT",
    subhead2: "",
    path1: "/work/itat",
  },
  {
    category: ["branding"],
    image1: encompass,
    type1: "#Branding",
    company1: "Encompass",
    subhead1: "",
    path1: "/work/encompass",
  },

  {
    category: ["branding"],
    image1: sleek,
    type1: "#Branding",
    company1: "Sleek Studio",
    subhead1: "",
    path1: "/work/sleek",
  },
  {
    category: ["branding"],
    image1: ima2020,
    type1: "#Branding",
    company1: "IMA 2020",
    subhead2: "",
    path1: "/work/ima2020",
  },

  {
    category: ["ui"],
    image1: spintly,
    type1: "#UI/UX",
    company1: "Spintly",
    subhead2: "",
    path1: "/work/spintly",
  },

  // {
  // image1{evre,
  // type1:"#UI/UX",
  // type1_1:"#Branding",
  // company1:"EVRE",
  // subhead2:"",
  // path1:"/work/evre",
  // }
];

const WorkPage = () => {
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
        <Work />

        <NewPortfolio workData={workData} />

        <Footer />
      </div>
    </motion.div>
  );
};

export default WorkPage;
