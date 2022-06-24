import React from "react";

//components
import PortfolioHeading from "../Components/PortfolioHeading";
import PrevAndNextWork from "../Components/PrevAndNextWork";
import Footer from "../Components/Footer";
import FlickingCarousel from "../Components/FlickingCarousel";
import CardsNums from "../Components/Atoms/CardsNums";
import Heading from "../Components/Atoms/Heading";
import CardsImage from "../Components/Atoms/CardsImage";
import Images from "../Components/Atoms/Images";
import WebsiteGlimpse from "../Components/Atoms/WebsiteGlimpse";


//images
import vijay from "../assets/images/VCH.jpg";
import encompass from "../assets/images/encompass.jpg";

//Video
import Evre_video from '../assets/evreAssets/Evre_video.mp4'

import logo from "../assets/evreAssets/validating_icon.svg";
import logo1 from "../assets/evreAssets/business_type_icon.svg";
import businessgoals from "../assets/evreAssets/Business_Goals.svg";
import targetusers from "../assets/evreAssets/Target_Users.svg";
import projectTimeline from "../assets/evreAssets/project_timeline.svg";
import bg_triangle from "../assets/evreAssets/bg_triangle.svg";
import user_personal from "../assets/evreAssets/bruce-mars.png";
import circled_cross from "../assets/evreAssets/Empathy_Map_circle_Info_section.png";
import site_map from "../assets/evreAssets/sime_map.svg";
import card_sorting from "../assets/evreAssets/card_sorting.png";
import Homepage_Glimpse from "../assets/evreAssets/homepage_glimpse.png";
import About_Glimpse from "../assets/evreAssets/about_glimpse.png";
import Infinity_Glimpse from "../assets/evreAssets/A_InfinityGlimpse.png";
import Screens from "../assets/evreAssets/Screens.png";
import car_section from "../assets/evreAssets/Footer.svg";
import visualPhase1 from "../assets/evreAssets/visualPhase01.png";
import visualPhase2 from "../assets/evreAssets/visualPhase02.png";
import visualPhase3 from "../assets/evreAssets/visualPhase03.png";
import FinalOutcome from "../assets/evreAssets/FinalOutcome.png";
import smile_icon from "../assets/evreAssets/smile_icon.svg";
import Customer_journey01 from "../assets/evreAssets/Customer_journey_map001.png";
import Customer_journey02 from "../assets/evreAssets/Customer_journey_map002.png";


// PrevAndNextWork Images
import ima from "../assets/images/Ima.jpg";
import sleek from "../assets/images/sleek_new.jpg"

//data
import { wireframes } from './PortfoliosDATA'


//logo 
import a1 from '../assets/evreAssets/logos/a1.svg'
import a2 from '../assets/evreAssets/logos/a2.svg'
import a3 from '../assets/evreAssets/logos/a3.svg'
import a4 from '../assets/evreAssets/logos/a4.svg'

//components


const evreData = [
  {
    image: a1
  },
  {
    image: a2
  },
  {
    image: a3
  },
  {
    image: a4
  },
  {
    image: a4
  },
  {
    image: a4
  },
  {
    image: a4
  },
  {
    image: a4
  }
]

const BgTriangle = ({ className }) => {
  return (
    <div className={className}>
      <img className="image" src={bg_triangle} />
    </div>
  )
};

const SmallCards = ({ className, number, bigHead, head, para }) => {
  return (
    <div className={className}>
      {
        number ? <div className="number__box">
          <h4> {number} </h4>
        </div> : ""
      }
      <h3>{bigHead}</h3>
      <p>{head}</p>
      <h5>{para}</h5>
    </div>
  )
};


const Evre = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="EVRE"
          subHeading="UI/UX"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id"
        />

        {/* <div className="img__max__width">
            <img src={laptop} alt="bird" />
          </div> */}

        {/* <h3>Overview</h3> */}


        <div className="evre__main__container">
          <Heading
            textClass="evre__text__gradient"
            logo={logo}
            Heading="Validating the problem"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
          />

          <div className="card__banner top__margin">
            <CardsNums
              className="card__black cards__nums__container"
              para="dfkdhsdfjsd fjksdklfj sdjfsdl jfasdasdasdasdasd"
              number="01"
            />
            <CardsNums
              className="card__grey cards__nums__container"
              para="dfkdhsdfjsdfj ksdklfjsdjfs dljfadsdadasda "
              number="02"
            />
            <CardsNums
              className="card__grey cards__nums__container"
              para="dfkdhsdfj sdfjksdklfjsdjfsdljf"
              number="03"

            />
            <CardsNums
              className="card__black cards__nums__container"
              para="dfkdhsdfjsdf jksdklfjsdjfsdljf"
              number="04"
              style={{ marginTop: "-10px" }}
            />
          </div>

          <Heading
            textClass="evre__text__gradient"
            logo={logo1}
            Heading="Business Type"
          />

          {/* Business Type  */}

          <div className="evre__main__box">
            <div className="half__left evre__left__box">
              <h4>B2C :</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute.</p>
            </div>

            <div className="separator"></div>

            <div className="half__right evre__right__box">
              <h4>B2B :</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute.</p>
            </div>
          </div>


          {/* Design Strategy */}

          <Heading
            textClass="evre__text__gradient"
            logo={logo1}
            Heading="Design Strategy"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute."
          />

          <div className="evre__design__strategy">
            <CardsImage
              className={"card__Images"}
              uls="Business Goals"
              li1="Ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud"
              li2="sdkfjhsdfkjh"
              image={businessgoals}
            />
            <div className="dark__line"></div>
            <CardsImage
              className={"card__Images"}
              uls="Target Users"
              li1="Ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud"
              li2="sdkfjhsdfkjh"
              image={targetusers}
            />
            <div className="dark__line"></div>
            <CardsImage
              className={"card__Images"}
              uls="Cross Channels"
              li1="Ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud"
              li2="sdkfjhsdfkjh"
              image={businessgoals}
            />

            <CardsImage
              className={"card__Images"}
              uls="General Tasks"
              li1="Ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud"
              li2="sdkfjhsdfkjh"
              image={businessgoals}
            />
            <div className="dark__line"></div>
            <CardsImage
              className={"card__Images"}
              uls="Technology Constraints"
              li1="Ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud"
              li2="sdkfjhsdfkjh"
              image={businessgoals}
            />
            <div className="dark__line"></div>
            <CardsImage
              className={"card__Images"}
              uls="Critical Success Factor"
              li1="Ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud"
              li2="sdkfjhsdfkjh"
              image={businessgoals}
            />
          </div>



        </div>

        <div className="evre__main__container__black ">
          <Heading
            textClass="evre__text__gradient"
            Heading="A Look at some competitors"
            para={"Ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          />

          <FlickingCarousel
            evreData={evreData}
            className="evre__flicking__carousels"
          />



          {/* Project Timeline */}

          <Heading
            textClass="evre__text__gradient"
            Heading="Project Timeline"
            para={"See how our project has ended over time"}
          />

          <Images
            className="evre__top__less__margin"
            image={projectTimeline}
          />

        </div>


        <div className="evre__main__container">
          <Heading
            textClass="evre__text__gradient"
            para1="OUR ROLE"
            Heading="We have been involved in all stage of the design process to create this application"
          />


          <div className="cards__4__container">
            <CardsImage
              className={"cards__4"}
              uls="Research"
              li1="User Servey"
              li2="User Personal"
            />
            <CardsImage
              className={"cards__4"}
              uls="UX Design"
              li1="User Flow"
              li2="Wireframes"
            />
            <CardsImage
              className={"cards__4"}
              uls="UI Design"
              li1="Style Guide"
              li2="Visual Design"
            />
            <CardsImage
              className={"cards__4"}
              uls="Intractions"
              li1="Clickable Protype"
              li2="Micro-interactions"
            />
          </div>

          {/* // USER SURVEY */}

          <div style={{ position: "relative" }}>
            <Heading
              textClass="evre__text__gradient"
              className="user__survey__heading evre__top__less__margin"
              para1="USER SURVEY"
              HeadingLeft="For our research process, we decided to interviews & surveys to better get to know what our users need."
              HeadingLeft_1="Surveys are a great first look at the customer environment because they provide quantitative data."
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

            />
            <BgTriangle className="pos__bg__triangle" />
          </div>




          {/* ############ Interviews ################ */}

          <div className="black__banner evre__main__container__black" >
            <div className="black__banner__in">
              <p>User Interviews</p>

              <hr />

              <h3 className="evre__text__gradient ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
            </div>


            <div className="black__banner__in top__margin">
              <p>Understanding</p>

              <hr />

              <h3 className="evre__text__gradient ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
            </div>

            <div className="evre__small__cards__wrapper">
              <SmallCards
                className="evre__small__cards"
                number="01"
                head="Lorem ipsum"
                para="ssfsdfd sdfsdf sfsdfsdf fsdfsdfs sdfsdf ssfsdfd sdfsdf sfsdfsdf fsdfsdfs sdfsdf ssfsdfd sdfsdf sfsdfsdf fsdfsdfs sdfsdf ssfsdfd sdfsdf sfsdfsdf fsdfsdfs sdfsdf"
              />
              <SmallCards
                className="evre__small__cards"
                number="02"
                head="Lorem ipsum"
                para="ssfsdfd sdfsdf sfsdfsdf fsdfsdfs sdfsdf ssfsdfd sdfsdf sfsdfsdf fsdfsdfs sdfsdf ssfsdfd sdfsdf sfsdfsdf fsdfsdfs sdfsdf ssfsdfd sdfsdf sfsdfsdf fsdfsdfs sdfsdf"
              />
              <SmallCards
                className="evre__small__cards"
                number="03"
                head="Lorem ipsum"
                para="ssfsdfd sdfsdf sfsdfsdf fsdfsdfs sdfsdf ssfsdfd sdfsdf sfsdfsdf fsdfsdfs sdfsdf ssfsdfd sdfsdf sfsdfsdf fsdfsdfs sdfsdf ssfsdfd sdfsdf sfsdfsdf fsdfsdfs sdfsdf"
              />
            </div>

            <BgTriangle className="pos__bg__triangle__bottom" />

          </div>

          {/* USER PERSONAL */}

          <div className="user__personal__main__wrapper">
            <div className="user__personal__wrapper">
              <Heading
                textClass="evre__text__gradient"
                Heading="Its all about user data"
                para1={"USER PERSONAL"}
                bottomImage={user_personal}
                className="user__personal__heading"
              />
            </div>
          </div>

          <div className="user__personal__head__para">
            <SmallCards
              className="evre__small__cards"
              bigHead="Personality"
              head="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <div className={"cards__2__wrapper"}>
              <CardsImage
                className={"cards__2"}
                uls="Need"
                li1="Eiusmod tempor incididunt ut"
                li2="Lorem ipsume dolor sit amet ut enim ad minim veniam, quis nostrud exercitation."
                li3="Labore et dolore magna aliqua. consectetur adipiscing elit"

              />
              <CardsImage
                className={"cards__2"}
                uls="Goal"
                li1="Eiusmod tempor incididunt ut"
                li2="Lorem ipsume dolor sit amet ut enim ad minim veniam, quis nostrud exercitation."
                li3="Labore et dolore magna aliqua. consectetur adipiscing elit"
              />
            </div>

          </div>


        </div>



        {/* ##############   EMPATHY MAP  ############# */}


        <div className="evre__main__container__black">
          <div className="empathy__map__wrapper">

            {/* ##### Empathy Map #####*/}
            <Heading
              textClass="evre__text__gradient"
              className="empathy__map__heading"
              Heading="Empathy Map"
              para="Lorem ipsume dolor sit amet ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsume dolor sit amet ut enim ad minim veniam, quis nostrud exercitation."
            />

            <Images
              className="evre__top__less__margin"
              image={circled_cross}
            />



            {/* ##### Customer Journey Map #####*/}
            <Heading
              textClass="evre__text__gradient"
              className="empathy__map__heading evre__top__margin"
              Heading="Customer Journey Map"
              para="Lorem ipsume dolor sit amet ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsume dolor sit amet ut enim ad minim veniam, quis nostrud exercitation."
            />

            <Images
              className=" evre__top__less__margin"
              image={Customer_journey01}
            />
            <Images
              className=" evre__top__less__margin"
              image={Customer_journey02}
            />



            {/* ##### Site Map & Flow #####*/}

            <Heading
              textClass="evre__text__gradient"
              className="empathy__map__heading evre__top__margin"
              Heading="Site Map & Flow"
              para1="ABOUT PROJECT"
            />
            <Images
              className="evre__top__less__margin"
              image={site_map}
            />



            {/* ##### Card Sorting #####*/}

            <Heading
              textClass="evre__text__gradient"
              className="empathy__map__heading evre__top__margin"
              Heading="Card Sorting"
              para="Ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />

            <Images
              className="evre__top__less__margin"
              image={card_sorting}
            />
          </div>
        </div>

        <div className="evre__main__container padding_bottom">
          <div className="wireframes__boxes">
            {
              wireframes.map((item, index) => {
                return (
                  <div className="wireframes__box">
                    {
                      item.head &&
                      <div className="first__box">
                        <h3 className=" evre__text__gradient">{item.head}</h3>
                        {item.para && <p>{item.para}</p>}
                      </div>
                    }
                    {item.title && <p >{item.title}</p>}
                    {
                      item.image &&
                      <div className="wireframes__box__images">
                        <img src={item.image} />
                      </div>
                    }
                    {
                      item.subImagesLeft &&
                      <div >
                        {
                          item.subImagesLeft.map((items, index) => {
                            return (
                              <>
                                {items.head && <h3 >{items.head}</h3>}
                                {items.title && <p style={{ paddingTop: "2.5rem" }}>{items.title}</p>}
                                <div className="wireframes__box__images">
                                  <img src={items.image} />
                                </div>
                              </>
                            )
                          })
                        }
                      </div>
                    }
                    {
                      item.subImagesRight &&
                      <div>
                        {
                          item.subImagesRight.map((items, index) => {
                            return (
                              <>
                                {items.head && <h3>{items.head}</h3>}
                                {items.title && <p style={{ paddingTop: "2.5rem" }}>{items.title}</p>}
                                <div className="wireframes__box__images">
                                  <img src={items.image} />
                                </div>
                              </>
                            )
                          })
                        }
                      </div>
                    }
                  </div>

                )
              })
            }
          </div>
        </div>

        {/* Visual Style Guide */}

        <div className="evre__main__container" style={{ backgroundColor: "#1a1d24" }}>
          <Heading
            textClass="evre__text__gradient"
            para1="VISUAL PHASE"
            Heading="Visual Style Guide"
          />
          <Images
            className="evre__top__less__margin"
            image={visualPhase1}
          />
          <Images
            className="evre__top__less__margin"
            image={visualPhase2}
          />
          <Images
            className="evre__top__less__margin"
            image={visualPhase3}
          />
        </div>



        {/* On Boarding Video */}

        <div className="evre__main__container__black" >
          <Heading
            textClass="evre__text__gradient"
            Heading="On Boarding Video"
            para="Ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <video className="evre__top__less__margin"
            placeholder="EVRE intro Video"
            autoPlay="true"
            controls
            loop
            width="100%">
            <source src={Evre_video} type="video/mp4" />
          </video>
        </div>


        {/* #########     WEBSITE GLIMPSE     #########*/}


        <div className="evre__main__container">
          <WebsiteGlimpse
            heading1="Home"
            heading2="Page Design"
            para="Magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image={Homepage_Glimpse}
          />
          <WebsiteGlimpse
            heading1="About EVRE"
            heading2="Page Design"
            para="Magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            reverse
            image={About_Glimpse}
          />
          <WebsiteGlimpse
            heading1="Home"
            heading2="Page Design"
            para="Magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image={Infinity_Glimpse}
          />
        </div>





        {/* CAR SECTION */}
        <div className="evre__main__container__black" >
          <SmallCards
            className="car__section__heading__small__cards "
            bigHead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            head="-Lorem ipsum."
          />

          <div className="car__section__image ">
            <img className='image' src={car_section} alt="alter" />
          </div>
        </div>


        {/* 38+ Screens */}
        <div className="evre__main__container padding_bottom">
          <Heading
            textClass="evre__text__gradient"
            Heading="38+ Screens"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Images
            className="evre__top__less__margin"
            image={Screens}
            fullwidth
          />
        </div>


        {/* FINAL OUTCOME */}
        <div className="evre__main__container">
          <Heading
            textClass="evre__text__gradient"
            BigHeading="Result & Concluding"
            BigHeading_1="Thoughts"
            para1="FINAL OUTCOME"
          />
          <Images
            className="evre__top__less__margin"
            image={FinalOutcome}
          />
        </div>

        {/* Thanks for Watching */}

        <div className="thanks__for__watching">
          <Images
            className="thanks__for__watching__icon"
            image={smile_icon}
          />
          <h3 className="evre__text__gradient top__margin">Thanks for watching</h3>
        </div>
      </div>

      <PrevAndNextWork
        prev="/work/vijay-chat-house"
        next="/work/encompass"
        image1={ima}
        image2={sleek}
      />

      <Footer />
    </>
  );
};

export default Evre;
