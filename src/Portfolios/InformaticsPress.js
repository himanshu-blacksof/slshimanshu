import React from "react";

//components
import PortfolioHeading from "../Components/PortfolioHeading";
import PrevAndNextWork from '../Components/PrevAndNextWork';


//images
import vijay from "../assets/images/VCH.jpg";
import itat from "../assets/images/ITAT.jpg";


import logo from "../assets/Informatic press (markplus) Assests/Image 56.png";
import book01 from "../assets/Informatic press (markplus) Assests/Image 112.png";
import fruit01 from "../assets/Informatic press (markplus) Assests/Image 113.png";
import book02 from "../assets/Informatic press (markplus) Assests/Group 1581.png";
import book03 from "../assets/Informatic press (markplus) Assests/Group 703.png";
import book04 from "../assets/Informatic press (markplus) Assests/Group 1582.png";
import book05 from "../assets/Informatic press (markplus) Assests/Group 1586.png";
import book06 from "../assets/Informatic press (markplus) Assests/Group 1585.png";
import book07 from "../assets/Informatic press (markplus) Assests/Group 1583.png";
import book08 from "../assets/Informatic press (markplus) Assests/Group 1593.png";
import book09 from "../assets/Informatic press (markplus) Assests/Book-Mockup-Hardcover-Vol3.png";
import book10 from "../assets/Informatic press (markplus) Assests/Group 1584.png";
import book11 from "../assets/Informatic press (markplus) Assests/Group 700.png";
import book12 from "../assets/Informatic press (markplus) Assests/Mask Group 30.png";
import book14 from "../assets/Informatic press (markplus) Assests/Mask Group 29.png";
import book13 from "../assets/Informatic press (markplus) Assests/Paperback Cover book cover 04.png";
import Footer from "../Components/Footer";

const InformaticsPress = () => {
  return (
    <>
      <div className="portfolio__container">
        <PortfolioHeading
          heading="Informatics Press"
          subHeading="Rebranding"
          info="Informatic Press had recently started their publishing vertical, seeing a major shift in its business practices. By introducing a range of notebook with various price and theme variants, Mr. Naman Khandelwal envisioned the notebooks to be a source of interesting insights for students. He now needed his brand to step a notch higher with a systematic branding theme and concept for each one of it’s Notebook type to make them more consumer-centric and gain brand loyalty and continual subscription. 
          "
        />

        <div className="informatics__logo">
          <img src={logo} alt="informatics logo" />
        </div>
        <div className="img__max__width">
          <img src={book01} alt="book" />
        </div>

        <div className="alignment__container">
          <div className="text__block">
            <p>
              Understanding Mr. Naman’s vision, Blacksof conducted market
              research to gauge the needs of their target audience and came up
              with more than 130 plus notebook concepts ranging various sizes,
              quality, age groups, and price range. We also gave a brand
              identity to each of the 4 verticals of the notebooks officiating
              their start as a brand creating a distinct brand presence in the
              entire market.
            </p>
          </div>
        </div>

        <div className="img__max__width">
          <img src={fruit01} alt="fruit" />
        </div>

        <div className="alignment__container">
          <div className="book02">
            <img src={book02} alt="book" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={book03} alt="book" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={book04} alt="book" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={book05} alt="book" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={book06} alt="book" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={book07} alt="book" />
          </div>

          <div className="img__max__width bottom__margin">
            <img src={book08} alt="book" />
          </div>

          <div className="text__block">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="img__max__width bottom__margin">
            <img src={book09} alt="book" />
          </div>

          <div className="left__align bottom__margin">
            <img src={book10} alt="book" />
          </div>

          <div className="text__block">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="img__max__width bottom__margin">
            <img src={book11} alt="book" />
          </div>

          <div className="right__align ">
            <img src={book12} alt="book" />
          </div>

          <div className="text__block">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="left__align bottom__margin">
            <img src={book13} alt="book" />
          </div>

          <div className="right__align ">
            <img src={book14} alt="book" />
          </div>

          <div style={{ display: 'inline-block' }}>

            <div className="text__block">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

          </div>

        </div>
      </div>

      <PrevAndNextWork
          prev="/work/vijay-chat-house"
          next="/work/itat"
          image1={vijay}
          image2={itat}
        />

      <Footer />
    </>
  );
};

export default InformaticsPress;
