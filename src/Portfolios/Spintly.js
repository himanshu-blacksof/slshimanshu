import React from "react";

//components
import PortfolioHeading from "../Components/PortfolioHeading";
import PrevAndNextWork from "../Components/PrevAndNextWork";
import TabView from "../Components/TabView";
import Footer from "../Components/Footer";

// images spintly
import spintly from "../assets/spintlyAssets/Group 7292.png";
import bubbles from "../assets/spintlyAssets/Group 7.png";
import flowDiagram from "../assets/spintlyAssets/Group 7293.png";
import wireframes from "../assets/spintlyAssets/wireframes.png";
import iconography from "../assets/spintlyAssets/iconography.png";
import typography from "../assets/spintlyAssets/typography.png";
import dashboardsAttendence from "../assets/spintlyAssets/dashboards_attendence.png";
import orgInformation from "../assets/spintlyAssets/org_information.png";
import sixtyPages from "../assets/spintlyAssets/sixty_pages.png";


import dashboards from "../assets/spintlyAssets/dashboards.png";
import dashboards_new from "../assets/spintlyAssets/Dashboard_new.png";
import accesHistory from "../assets/spintlyAssets/Access_History.png";
import attendence from "../assets/spintlyAssets/Attendance.png";
import allUsers from "../assets/spintlyAssets/All_Users.png";
import visitor from "../assets/spintlyAssets/Visitor Management.png";


import vijay from "../assets/images/VCH.jpg";
import encompass from "../assets/images/encompass.jpg";


const Spintly = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="Spintly"
          subHeading="Dashboard"
          info="Spintly is a modern access management system that transformed the physical security industry with
          simplified access control systems and intelligent wireless technology. It offers hassle-free and contactless
          cloud-based door access control systems."
        />

        <div className="alignment__container2">
          <div data-aos="fade-up" className="img__max__width">
            <img src={spintly} alt="Spintly Dashboard" />
          </div>

          {/* <h3>Overview</h3> */}
          <div data-aos="fade-up" className="text__block">
            <p>
              Our main aim was to create a clear visual representation of the Spintly dashboard and to
              enhance its overall customer experience. This was backed up with accurate research, interviews, questionnaires,
              and data analysis to build a seamless and intelligent information flow.
            </p>
            <p>
              Our research included exploring different color palettes and typography ideas to formulate the right
              brand identity. From understanding user persona and goals we've accurately translated each of the dashboard
              features into a visually-pleasing design layout.

            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="img__max__width">
          <img src={bubbles} alt="Flow Diagram" />
        </div>



        <div className="spintly__light__blue__container">
          <div className="alignment__container2">
            <div className="spintly__heading">
              <div>
                <h1 data-aos="fade-up">01</h1>
                <h3 data-aos="fade-up">User Flow</h3>
              </div>
            </div>
            <div data-aos="fade-up" className="img__max__width bottom__margin top__margin">
              <img src={flowDiagram} alt="USER FLOW" />
            </div>
          </div>
        </div>



        <div className="background__gradient">

          <div className="alignment__container2">
            <div className="spintly__heading top__margin top__padding">
              <div>
                <h1 data-aos="fade-up">02</h1>
                <h3 data-aos="fade-up">Wireframe</h3>
              </div>
            </div>
            <div data-aos="fade-up" className="img__max__width bottom__margin top__margin">
              <img src={wireframes} alt="Wireframe" />
            </div>
          </div>



          <div className="alignment__container2">
            <div className="spintly__heading top__margin top__padding">
              <div>
                <h1 data-aos="fade-up">03</h1>
                <h3 data-aos="fade-up">Iconography</h3>
              </div>
            </div>
            <div data-aos="fade-up" className="img__max__width bottom__margin top__margin">
              <img src={iconography} alt="Iconography" />
            </div>
          </div>



          <div className="alignment__container2">
            <div className="spintly__heading top__margin top__padding">
              <div>
                <h1 data-aos="fade-up">04</h1>
                <h3 data-aos="fade-up">Typography & colors</h3>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="img__max__width bottom__margin top__margin">
            <img src={typography} alt="Typography & colors" />
          </div>



        </div>

        <div className="alignment__container2">
          <div className="spintly__heading top__margin top__padding">
            <div >
              <h1 data-aos="fade-up">05</h1>
              <h3 data-aos="fade-up">Dashboard Interface UI Kit</h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="img__max__width bottom__margin top__margin top__padding">
          <img src={dashboards} alt="Dashboard Interface UI Kit" />
        </div>


        <div className="attendence__container alignment__container2 ">

          <h2 data-aos="fade-up">Dashboard</h2>
          <div className="att__paragraph">
            <p data-aos="fade-up">
              "With the help of these logistics, Spintly helps its clients track the present, absent,
              and leave days of any employee/individual."
            </p>
          </div>

          <div data-aos="fade-up" className="img__max__width bottom__margin top__margin">
            <img src={dashboards_new} alt="Dashboard Attendence" />
          </div>
        </div>



        <div className="grey__dashboards__container alignment__container2 ">
          <h3 data-aos="fade-up">Access History</h3>

          <div data-aos="fade-up" className="img__max__width bottom__margin ">
            <img src={accesHistory} alt="Dashboard Attendence" />
          </div>
        </div>


        <div className={`grey__dashboards__container__reverse alignment__container2 `}>
          <h3 data-aos="fade-up">Attendance</h3>

          <div data-aos="fade-up" className="img__max__width bottom__margin ">
            <img src={attendence} alt="Dashboard Attendence" />
          </div>
        </div>

        <div className="grey__dashboards__container alignment__container2 ">
          <h3 data-aos="fade-up">All Users</h3>

          <div data-aos="fade-up" className="img__max__width bottom__margin ">
            <img src={allUsers} alt="Dashboard Attendence" />
          </div>
        </div>

        <div className="grey__dashboards__container__reverse alignment__container2 ">
          <h3 data-aos="fade-up">Visitor Management</h3>

          <div data-aos="fade-up" className="img__max__width bottom__margin ">
            <img src={visitor} alt="Dashboard Attendence" />
          </div>
        </div>


        <div data-aos="fade-up" className="img__max__width bottom__margin top__margin ">
          <img src={sixtyPages} alt="USER FLOW" />
        </div>


      </div>

      <PrevAndNextWork
        prev="/work/brebel"
        next="/work/encompass"
        image1={vijay}
        image2={encompass}
      />

      <Footer />
    </>
  );
};

export default Spintly;
