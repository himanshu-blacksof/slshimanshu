import React from 'react';
import ReactPlayer from 'react-player';
//Components
import PortfolioHeading from '../Components/PortfolioHeading';
import Images from '../Components/Atoms/Images';
import Banner from '../assets/rudo Assets/Design.png';
import Multiple from '../assets/rudo Assets/Frame 2346.png';
import Saving from '../assets/rudo Assets/Frame 2304.png';
import Logo from '../assets/rudo Assets/Frame 2305.png';
import Rudowealth from '../assets/rudo Assets/Frame 2306.png';
import Dots from '../assets/rudo Assets/Frame 4.png';
import Logo2 from '../assets/rudo Assets/Frame 8.png';
import RudoBranding from '../assets/rudo Assets/rudo_icon.svg';
import RudoBranding2 from '../assets/rudo Assets/Frame.svg';
import Typo from '../assets/rudo Assets/image.png';
import TextAa from '../assets/rudo Assets/image (1).png';
import Rudologo from '../assets/rudo Assets/Icon_white.svg';
import Rudologo2 from '../assets/rudo Assets/redIcon.svg';
import Rudologo1 from '../assets/rudo Assets/Component 8.svg';
import Pallate from '../assets/rudo Assets/Mask group.svg';
import Multicolor from '../assets/rudo Assets/multicolor.png';
import Assets_img from '../assets/rudo Assets/Frame 2343.png';
import Assets_one from '../assets/rudo Assets/Frame 2339.png';
import Assets_two from '../assets/rudo Assets/Frame 2340.png';
import Assets_three from '../assets/rudo Assets/Frame 2341.png';
import Assets_fourth from '../assets/rudo Assets/Frame 2342.png';
import UX from '../assets/rudo Assets/ux.png';
import Chart from '../assets/rudo Assets/image (2).png';
import Star from '../assets/rudo Assets/star.png';
import Workprocess from '../assets/rudo Assets/workprocess.png';
import FinancialTest from '../assets/rudo Assets/Frame 2390.png';
import Problem from '../assets/rudo Assets/problem.png';
import Instruction from '../assets/rudo Assets/Frame 2358.png';
import Onboarding from '../assets/rudo Assets/FFT_Screens01.png';
import Instruction_two from '../assets/rudo Assets/FFT_Screens02.png';
import Questionnaire from '../assets/rudo Assets/FFT_Screens03.png';
import SignUp from '../assets/rudo Assets/FFT_Screens04.png';
import Result from '../assets/rudo Assets/FFT_Screens05.png';
import Mobile from '../assets/rudo Assets/Mobile Responsive_iPhone 13.png';
import Mobile_one from '../assets/rudo Assets/FFT_Mobile Responsive01.png';
import Mobile_two from '../assets/rudo Assets/FFT_Mobile Responsive02.png';
import Mobile_three from '../assets/rudo Assets/FFT_Mobile Responsive03.png';
import Vedio from '../assets/rudo Assets/Comp.mp4';
import Fit from '../assets/rudo Assets/Socialmedia_gif.png';
import Until from '../assets/rudo Assets/Socialmedia_all.png';
import Pencil from '../assets/rudo Assets/Mockups01.png';
import Bag from '../assets/rudo Assets/Mockups02.png';
import Tshirt from '../assets/rudo Assets/Mockups03.png';
const Rudo = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="RuDo Wealth"
          subHeading="UI/UX"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."
        />
      </div>
      <Images image={Banner} fullwidth alt="img" />
      <Images image={Multiple} fullwidth alt="img" />
      <Images image={Saving} fullwidth alt="img" />
      <Images image={Logo} fullwidth alt="img" />
      <Images image={Rudowealth} fullwidth alt="img" />
      <Images image={Dots} fullwidth alt="img" />
      <Images image={Logo2} fullwidth alt="img" />
      <section className="main_design">
        <div className="table_wrapper">
          <table>
            <tr>
              <th>RUDO</th>
              <th>
                <b>BRANDING</b>
              </th>
              <th>TYPOGRAPHY</th>
            </tr>
          </table>
        </div>
        <div className="animation">
          <div className="rudo_design">
            <img className="rudo_branding " src={RudoBranding} alt="img" />
          </div>
          <div className="rudowealth_design ">
            <img className="rudo_branding_two " src={RudoBranding2} alt="img" />
          </div>
        </div>
        <div className="typo_design">
          <div className="typo_img">
            <img className="typo_img_wrapper" src={Typo} alt="img" />
          </div>
          <div className="type_para">
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id.
            </h5>
          </div>
        </div>
        <div className="circle_container">
          <div className="epilogue">
            <h2>*Epilogue</h2>
          </div>
          <div className="background_color ">
            <div className="logo">
              <img className="logo_container" src={Rudologo} alt="img" />
            </div>
            <img className="circle " src={Rudologo1} alt="img" />
          </div>
        </div>
        <Images image={TextAa} alt="img" />
        <div className="table_wrapper">
          <table>
            <tr>
              <th>RUDO</th>
              <th>
                <b>BRANDING</b>
              </th>
              <th>COLOUR</th>
            </tr>
          </table>
        </div>
        <div className="color">
          <h1 className="illustration">COLOUR</h1>
          <img src={Pallate} alt="img" />
        </div>
        <div className="multicolor">
          <Images image={Multicolor} alt="img" />
        </div>
        <div className="table_wrapper">
          <table>
            <tr>
              <th>RUDO</th>
              <th>
                <b>BRANDING</b>
              </th>
              <th>ILLUSTRATION</th>
            </tr>
          </table>
        </div>
        <div className="color">
          <h1 className="illustration">CUSTOM</h1>
          <h1 className="illustration">ILLUSTRATION</h1>
        </div>
        <div className="multicolor">
          <Images image={Assets_img} alt="img" />
        </div>
        <div className="rudo_card">
          <div className="rudo_one">
            <Images image={Assets_one} alt="img" />
          </div>
          <div className="rudo_two">
            <Images image={Assets_two} alt="img" />
          </div>
        </div>
        <div className="rudo_card">
          <div className="rudo_one">
            <Images image={Assets_three} alt="img" />
          </div>
          <div className="rudo_two">
            <Images image={Assets_fourth} alt="img" />
          </div>
        </div>
        <div className="table_wrapper">
          <table>
            <tr>
              <th>RUDO</th>
              <th>
                <b>WEB DESIGN</b>
              </th>
              <th>UX</th>
            </tr>
          </table>
        </div>
        <div className="webdesign">
          <h2>
            This <strong> projects </strong> brings
          </h2>
          <h2>
            a <strong>peace of mind </strong> by helping to gain
          </h2>
          <h2>
            <strong>financial stability </strong>
          </h2>
        </div>
        <div className="multicolor">
          <Images image={UX} alt="img" />
        </div>
        <div className="multicolor">
          <Images image={Chart} alt="img" />
        </div>
        <div className="star">
          <div className="star_text">
            <h3>
              It may seem that the <strong>conclusion</strong> of the study are
              quite obvious, but <strong>problems</strong> always arise in the
              <strong> implementation process</strong>, when it is necessary to
              maintain a <strong> balance </strong>between
              <strong> the users and business goals</strong>
            </h3>
          </div>
          <div className="star_img">
            <Images image={Star} alt="img" />
          </div>
        </div>
      </section>
      <div className="workprocess">
        <Images image={Workprocess} fullwidth alt="img" />
      </div>
      <section className="main_design ">
        <div className="Vedio_container  ">
          <h4 className="text_color ">
            RuDO Web design. RuDO Wealth. Web design .
            <strong className="RUDO_TEXT">RuDO Wealth </strong>. Web design. .
            Web design
          </h4>
          <div className="reactplayer">
            <ReactPlayer
              url={Vedio}
              loop
              pip
              playing
              muted
              playsinline
              width="100vw"
              height="100vh"
            />
          </div>
        </div>
      </section>
      <section className="main_design ">
        <div className="table_wrapper">
          <table>
            <tr>
              <th>RUDO</th>
              <th>
                <b>Questioner</b>
              </th>
              <th>#Financial Wellness Test</th>
            </tr>
          </table>
        </div>
        <div className="Financial_wrapper">
          <div className="blue_container">
            <h2 className="know_container ">#Financial Wellness Test</h2>
            <h2 className="know_text">Know what your financial fitness is !</h2>
          </div>
          <div>
            <Images image={FinancialTest} fullwidth alt="img" />
          </div>
        </div>
      </section>
      <section className="main_design ">
        <div className="Financial_wrapper">
          <div className="problem">
            <h3>
              <strong>Problem</strong>
            </h3>
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h5>
          </div>
          <div className="problem">
            <h3>
              <strong>Solution</strong>
            </h3>
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h5>
          </div>
        </div>
        <Images image={Problem} fullwidth alt="img" />
      </section>
      <section className="main_design b ">
        <div className=" instruction_container">
          <Images image={Instruction} alt="img" />
        </div>
        <div className="onboarding_wrapper ">
          <div className="dots">1</div>
          <h3>Onboarding</h3>
          <h5>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </h5>
          <Images image={Onboarding} alt="img" />
        </div>
      </section>
      <section className="main_design ">
        <div className="Financial_wrapper ">
          <div className="instruction_wrapper ">
            <div className="dots">1</div>
            <h3>Instruction</h3>
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </h5>
          </div>
          <Images image={Instruction_two} alt="img" />
        </div>
        <div className="onboarding_wrapper ">
          <div className="dots">1️</div>
          <h3>Questionnaire</h3>
          <h5>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </h5>
          <div className="questionnaire ">
            <Images image={Questionnaire} fullwidth alt="img" />
          </div>
        </div>

        <div className="Financial_wrapper">
          <Images image={SignUp} alt="img" />
          <div className="instruction_wrapper">
            <div className="dots">1</div>
            <h3>SignUp</h3>
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </h5>
          </div>
        </div>
        <div className="onboarding_wrapper ">
          <div className="dots">1</div>
          <h3>Result</h3>
          <h5>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </h5>
          <Images image={Result} alt="img" />
        </div>
        <div className="mobileresponsive">
          <div className="mobile_text">
            <h3>Mobile Responsive</h3>
          </div>
          <div className="mobile">
            <img className="mobile_img" src={Mobile} alt="img" />
          </div>
        </div>
      </section>
      <section className="forms_container ">
        <div className="forms_wrapper">
          <div className="mobile_one ">
            <img src={Mobile_one} alt="img" />
            <h4>Onboarding</h4>
          </div>
          <div className="mobile_one">
            <img src={Mobile_three} alt="img" />
            <h4>Forms</h4>
          </div>
          <div className="mobile_one">
            <img src={Mobile_two} alt="img" />
            <h4>Result</h4>
          </div>
        </div>
      </section>
      <section className="main_design">
        <div className="table_wrapper">
          <table>
            <tr>
              <th>RUDO</th>
              <th>
                <b>BRANDING</b>
              </th>
              <th>Social Media</th>
            </tr>
          </table>
        </div>
        <Images image={Fit} alt="img" />
        <Images image={Until} fullwidth alt="img" />
        <Images image={Pencil} fullwidth alt="img" />
        <div className="bag_container">
          <Images image={Bag} alt="img" />
          <Images image={Tshirt} alt="img" />
        </div>
        <div className="thanks_container ">
          <img className="thanks_img" src={Rudologo2} alt="img" />
          <h2>Thanks you for Watching!</h2>
        </div>
      </section>
    </>
  );
};

export default Rudo;
