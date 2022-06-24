import React, { useEffect, useState } from 'react'
import Images from '../Components/Atoms/Images';
import PortfolioHeading from '../Components/PortfolioHeading';
import CardsImage from '../Components/Atoms/CardsImage';
import Heading from '../Components/Atoms/Heading';


// Assests
import firstBlade_cow_image from '../assets/gavyamAssets/firstBlade_cow_image.png'
import cheer_up from '../assets/gavyamAssets/cheer_up.png'
import project__timeline from '../assets/gavyamAssets/project__timeline.png'
import Colors_typography from '../assets/gavyamAssets/Colors_typography.png'
import UserFlow__fidelity from '../assets/gavyamAssets/UserFlow__fidelity.png'
import Mobile__app__1 from '../assets/gavyamAssets/Mobile__app__1.png'
import Mobile__app__2 from '../assets/gavyamAssets/Mobile__app__2.png'
import flower__design__outlined from '../assets/gavyamAssets/flower__design__outlined.svg'
import Homepage__view__mobile from '../assets/gavyamAssets/Homepage__view__mobile.png'
import components__used from '../assets/gavyamAssets/components__used.svg'
import few__more__screens from '../assets/gavyamAssets/few__more__screens.png'
import website__first__section from '../assets/gavyamAssets/website__first__section.png'
import aboutus from '../assets/gavyamAssets/aboutus.png'
import resource from '../assets/gavyamAssets/resource.png'
import tab__view from '../assets/gavyamAssets/tab__view.png'
import track__for__project__goal from '../assets/gavyamAssets/track__for__project__goal.svg'


import stationary_01 from '../assets/gavyamAssets/stationary_01.png'
import stationary_02 from '../assets/gavyamAssets/stationary_02.png'
import stationary_03 from '../assets/gavyamAssets/stationary_03.png'
import stationary_04 from '../assets/gavyamAssets/stationary_04.png'
import stationary_05 from '../assets/gavyamAssets/stationary_05.png'
import stationary_06 from '../assets/gavyamAssets/stationary_06.png'
import stationary_07 from '../assets/gavyamAssets/stationary_07.png'


import banner__cow from '../assets/gavyamAssets/banner__cow.png'
import Thanks__for__wotching from '../assets/gavyamAssets/Thanks__for__wotching.svg'
import PagerHeading from '../Components/Atoms/PagerHeading'
import PrevAndNextWork from '../Components/PrevAndNextWork';

// PrevAndNextWork Images
import ima from "../assets/images/Ima.jpg";
import sleek from "../assets/images/sleek_new.jpg"
import Footer from '../Components/Footer';

const ourRoles = [
  {
    first: "E",
    uls: "mpathize",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: cheer_up,
    fontcolor: "#B55219",

  },
  {
    first: "D",
    uls: "efine",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: cheer_up,
    fontcolor: "#C9A100",

  },
  {
    first: "I",
    uls: "deate",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: cheer_up,
    fontcolor: "#8D2A00",

  },
  {
    first: "D",
    uls: "esign",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: cheer_up,
    fontcolor: "#32B519",

  },
  {
    first: "T",
    uls: "est",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: cheer_up,
    fontcolor: "#0099C9",

  },
]


const ProjectGoal = ({ title, para, className, image, image_1, color, title_1 }) => {
  return (
    <div className={className}>
      <div className='half__left'>
        <Images image={image} />
      </div>
      <div className='half__left project__goal__right' style={{ background: "#fff" }} data-aos="fade-up">
        {title ? <h4 style={{ color: color }}>{title}</h4> : ""}
        {title_1 ? <h3 style={{ color: color }}>{title_1}</h3> : ""}
        {image_1 ? <Images image={image} /> : ""}
        <p > {para}</p>
      </div>
    </div>
  )
}

const Backgrounds = ({ className, background, height }) => {
  return (
    <div className={`${className} backgrounds__defaults`}>
      <div style={{ height: height, background: background }}></div>
    </div>
  )
}

const AboutPageView = ({ className, image, title, para, position__text }) => {
  return (
    <div className={`${className}`} >
      <Images image={image} fullwidth />

      <div className={`${position__text}`} data-aos="fade-up">
        <h3>{title}</h3>
        <p>
          {para}
        </p>
      </div>
    </div>
  )
}

const Tracker = ({ progress }) => {
  return (
    <svg id="track__project__goal__image" viewBox="0 0 678 2595" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path id="line" stroke="#000" stroke-width="2" pathLength={`${progress}`}
        d="M582.119 2594.55C581.741 2537.9 545.863 2418.03 405.371 2391.75C229.755 2358.89 81.3317 2188.94 196.898 1991.8C203.318 1962.34 249.923 1891.41 384.976 1843.37C553.793 1783.32 627.438 1688.15 652.365 1598.65C677.291 1509.14 713.547 1344.85 588.916 1230.42C464.286 1115.99 358.917 1117.12 224.09 1112.59C89.2631 1108.06 -75.0221 914.312 39.411 697.909C66.1539 649.955 149.055 553.273 266.714 550.177C413.789 546.307 556.645 593.813 556.645 217.35C556.645 194.71 544.258 123.309 496.494 100.324C443.492 74.8195 449.62 16.3616 452.649 1.07031" />

      <path id="dashed" stroke="#fff" stroke-width="3" stroke-dasharray="6 6"
        d="M582.119 2594.55C581.741 2537.9 545.863 2418.03 405.371 2391.75C229.755 2358.89 81.3317 2188.94 196.898 1991.8C203.318 1962.34 249.923 1891.41 384.976 1843.37C553.793 1783.32 627.438 1688.15 652.365 1598.65C677.291 1509.14 713.547 1344.85 588.916 1230.42C464.286 1115.99 358.917 1117.12 224.09 1112.59C89.2631 1108.06 -75.0221 914.312 39.411 697.909C66.1539 649.955 149.055 553.273 266.714 550.177C413.789 546.307 556.645 593.813 556.645 217.35C556.645 194.71 544.258 123.309 496.494 100.324C443.492 74.8195 449.62 16.3616 452.649 1.07031" />
    </svg>
  )
}



const Gavyam = () => {

  const [pathlength, setPathlength] = useState(0)

  useEffect(() => {

  }, [])





  return (
    <div className="portfolio__container" >
      <PortfolioHeading
        heading="Gavyam"
        subHeading="UI/UX"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id"
      />

      <div className="evre__main__container" style={{ background: "#e5e7e2", paddingBottom: "0rem" }}>

        <Images
          image={firstBlade_cow_image}

        />

        <div className="wrapper" data-aos="fade-up">
          <div className='internal__wrapper'>

            <PagerHeading
              className="PagerHeading"
              num="01"
              text="Our Roles"
            />

            <div className='our__roles__wrapper__cards padding__bottom'>
              {
                ourRoles.map((item, index) => {
                  return (
                    <CardsImage
                      className="cards__Image"
                      image={item.image}
                      uls={item.uls}
                      first={item.first}
                      para={item.para}
                      fontcolor={item.fontcolor}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>

        <Backgrounds
          background="#B55219"
          height="80vh"
          className="position__mid__background"
        />


        <div className="wrapper">
          <div className='internal__wrapper'>

            <PagerHeading
              className="PagerHeading"
              num="02"
              text="Project Timeline"
            />

            <div className='our__roles__wrapper__cards '>
              <Images
                className="project__timeline"
                image={project__timeline}
                fullwidth
              />
            </div>

          </div>
        </div>

        <Backgrounds
          background="#1F2D16"
          height="80vh"
          className="position__mid__background"
        />


        <div className="wrapper">
          <div className='internal__wrapper padding__bottom'>

            <PagerHeading
              className="PagerHeading"
              num="03"
              text="Project Goal"
            />


            <div className='project__goal__main'>

              <div className='track__project__goal' data-aos="fade-up">
                {/* <img src={track__for__project__goal} className="image track__project__goal__image" /> */}
                <Tracker />
              </div>

              <ProjectGoal
                className="project__goal__wrapper"
                image={cheer_up}
                title="Convenience"
                para="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
                color="#3eb86d"
              />
              <br />
              <br />
              <br />
              <ProjectGoal
                className="project__goal__wrapper__reverse"
                image={cheer_up}
                title="Convenience"
                para="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
                color="#f8ae5f"
              />
              <br />
              <br />
              <br />
              <br />
              <br />
              <ProjectGoal
                className="project__goal__wrapper"
                image={cheer_up}
                title="Convenience"
                para="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
                color="#f97558"
              />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <ProjectGoal
                className="project__goal__wrapper__reverse"
                image={cheer_up}
                title="Convenience"
                para="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
                color="#9958eb"
              />
              <ProjectGoal
                className="project__goal__wrapper"
                image={cheer_up}
                title="Convenience"
                para="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
                color="#3f66f7"
              />

            </div>
          </div>
        </div>

        <Backgrounds
          background="#B55219"
          height="80vh"
          className="position__mid__background"
        />


        <div className="wrapper">
          <div className='internal__wrapper' data-aos="fade-up">

            <Heading
              Heading="Understand the problem"
              className="general__heading"
            />

            <div className='cards__wrapper' >
              <div >
                <h4 style={{ color: "#b55219" }}> Problem </h4>
                <p> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
              </div>
              <div >
                <h4 style={{ color: "#b55219" }}> Objectives </h4>
                <p> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
              </div>
              <div >
                <h4 style={{ color: "#b55219" }}> Solution </h4>
                <p> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
              </div>
            </div>

            <Images
              image={project__timeline}
              className="problems__image"
            />
          </div>
        </div>



        {/* LOGO */}
        <div className='logo__wrapper wrapper'>
          <h1>LOGO</h1>
        </div>

        <div className="wrapper color__wrapper">
          <div className='internal__wrapper '>

            <PagerHeading
              className="PagerHeading"
              num="02"
              text="Colors & Typography"
            />

            <Images
              className="project__timeline padding__bottom"
              fullwidth
              image={Colors_typography}
            />

          </div>
        </div>



        <Backgrounds
          background="#1F2D16"
          height="80vh"
          className="position__mid__background"
        />
        {/* #### User flow & high-fidelity prototype  #### */}

        <div className="wrapper user__flow__wrapper">
          <div className='internal__wrapper'>
            <PagerHeading
              className="PagerHeading"
              num="03"
              text="User flow & high-fidelity prototype"
            />
          </div>

          <Images
            className="project__timeline"
            fullwidth
            image={UserFlow__fidelity}
          />
        </div>


        <Backgrounds
          background="#B55219"
          height="80vh"
          className="position__mid__background"
        />

        {/* #### Mobile App */}
        <div className="wrapper ">
          <div className='internal__wrapper padding__bottom '>

            <PagerHeading
              className="PagerHeading"
              num="01"
              text="Mobile App"
            />

            <ProjectGoal
              className="project__goal__wrapper__reverse mobile__app__flexbox"
              image={Mobile__app__1}
              title="Easy Sign In"
              para="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "

            />
            <ProjectGoal
              className="project__goal__wrapper mobile__app__flexbox"
              image={Mobile__app__2}
              title="Animal Details"
              para="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "

            />

          </div>
        </div>


        <Backgrounds height="35vh" background="#363f28" />

        <div className='homepage__view__mobile '>
          <div className='wrapper'>
            <ProjectGoal
              className="project__goal__wrapper__reverse homepage__heading"
              image={flower__design__outlined}
              title_1="Homepage"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            />
            <br />
            <br />
            <br />
          </div>
          <Images className="homepage__view__width" image={Homepage__view__mobile} fullwidth />
        </div>



        <div className='components__used__wrapper' >
          <div className='components__used__inside wrapper padding__bottom '>
            <div className='internal__wrapper' data-aos="fade-up">
              <h3 >Components</h3>
              <br />
              <br />
              <Images image={components__used} fullwidth />
            </div>
          </div>
        </div>
        <Images image={few__more__screens} fullwidth />



        {/* ######## Website ######## */}

        <div className='website__wrapper wrapper color__wrapper'>
          <div className='internal__wrapper'>
            <PagerHeading
              className="PagerHeading"
              num="01"
              text="Our Roles"
            />

            <Images image={website__first__section} />
          </div>
        </div>
        <Backgrounds height="35vh" background="#1F2D16" />

        {/* ######## About PAGE */}
        <div className='about__page__wrapper padding__bottom'>

          <div className='wrapper'>
            <AboutPageView
              className="about__page__view padding__bottom"
              position__text="pos__para__right"
              image={aboutus}
              title="About Page"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <AboutPageView
              className="about__page__view padding__bottom"
              position__text="pos__para__left"
              image={resource}
              title="Resource Page"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>

        <Images
          className="tab__view__images"
          fullwidth
          image={tab__view}
        />



        <div className='stationary__wrapper stationary__width'>
          <PagerHeading
            className="PagerHeading"
            num="06"
            text="Stationary & Merchandising"
          />

          <div className='stationary__grid__wrapper grid__half'>
            <div>
              <Images image={stationary_01} fullwidth />
            </div>
            <div>
              <Images image={stationary_02} fullwidth />
            </div>
            <div>
              <Images image={stationary_03} fullwidth />
            </div>
            <div>
              <Images image={stationary_04} fullwidth />
            </div>
          </div>

          <div className=''>
            <Images className='grid__margin' image={stationary_05} fullwidth />
            <Images className='grid__margin' image={stationary_06} fullwidth />
            <Images className='grid__margin' image={stationary_07} fullwidth />
          </div>
        </div>

        {/* ######## Banner Image ######### */}
        <Images className='grid__margin' image={banner__cow} fullwidth />

        <div className='thank__for__watching__wrapper'>
          <Images className='' image={Thanks__for__wotching} fullwidth />
          <div className='contents'>
            <h2>Thank you for attention!</h2>
          </div>
        </div>
      </div>




      <PrevAndNextWork
        prev="/work/vijay-chat-house"
        next="/work/encompass"
        image1={ima}
        image2={sleek}
      />

      <Footer />

    </div>

  )
}


export default Gavyam;