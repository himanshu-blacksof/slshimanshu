import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

//flicking carousel

// import Flicking, { ViewportSlot } from "@egjs/react-flicking";
// import { Arrow, AutoPlay, Pagination } from "@egjs/flicking-plugins";
// import "@egjs/react-flicking/dist/flicking.css";
// import "@egjs/react-flicking/dist/flicking-inline.css";
// import "@egjs/flicking-plugins/dist/flicking-plugins.css";
// import bold_Bs from "../assets/brebelAssets/Path 6392.svg";

//import images
// import homeImage01 from "../assets/images/Services_img_-1.svg";
import homeImage02 from "../assets/images/Services_img_2.svg";
// import homeImage03 from "../assets/images/Services_img_3.svg";

// const homeSlider = [
//   {
//     image: homeImage01,
//     heading: "We design to impact",
//     para: "Is your current digital strategy earning you meaningful results?",
//     para1:
//       "We develop business-centric digital strategies at crossroads with design to establish you in this new digital environment.",
//   },
//   {
//     image: homeImage02,
//     heading: "We design to impact",
//     para: "Is your business struggling to convert leads into retained sales?",
//     para1:
//       "We get you actionable market insights and leverage them to create design solutions that bring you closer to your end-users.",
//   },
//   {
//     image: homeImage03,
//     heading: "We design to impact",
//     para: " Has the New Normal changed what your business meant to your customers?",
//     para1:
//       " We help to strategically position your brand through design and digital intervention to create a niche for your business in the dynamic business world.",
//   },
// ];

const item = {
  image: homeImage02,
  heading: "We design to impact",
  para: "Is your business struggling to convert leads into retained sales?",
  para1:
    "We get you actionable market insights and leverage them to create design solutions that bring you closer to your end-users.",
};

const HomeSlider = () => {
  // const pagination = new Pagination({ type: "bullet" });
  // const autoplay = new AutoPlay({
  //   duration: 2000,
  //   direction: "NEXT",
  //   stopOnHover: false,
  // });
  // const plugins = [autoplay, pagination];

  return (
    <>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className="home__slider"
      >
        <div className="home__slider__container">
          <div className="image__slider">
            <div className="slider__content__container">
              <div className="home__image">
                <img src={item.image} alt="home image01" />
              </div>
              <div className="slider__text">
                <h2>{item.heading}</h2>
                <h3>{item.para}</h3>
                <p>{item.para1}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HomeSlider;

/*

 <Flicking
              plugins={plugins}
              a
              duration="2500"
              defaultIndex="2"
              circular={true}
              className="carousel__item"
            >
              {homeSlider.map((item, index) => {
                return (
                  <div className="slider__content__container" key={index}>
                    <div className="home__image">
                      <img src={item.image} alt="home image01" />
                    </div>
                    <div className="slider__text">
                      <h2>{item.heading}</h2>
                      <h3>{item.para}</h3>
                      <p>{item.para1}</p>
                    </div>
                  </div>
                );
              })}

              <ViewportSlot>
                <span className="flicking-pagination"></span>
              </ViewportSlot>
            </Flicking>


*/
