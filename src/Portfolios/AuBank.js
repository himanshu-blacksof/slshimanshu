
import React from "react";


//components
import PortfolioHeading from "../Components/PortfolioHeading";
import PrevAndNextWork from "../Components/PrevAndNextWork";
import Footer from "../Components/Footer";


//  assets import 
import auLogo from '../assets/au-bank-assets/au-logo.svg'
import auBankSlides from "../assets/au-bank-assets/slides.svg"
import manualFolded from "../assets/au-bank-assets/manual-paper-fold.png"
import cardOnGround from "../assets/au-bank-assets/cards-on-ground.png"
import handHoldingCard from "../assets/au-bank-assets/hand-holding-card.png"
import businesCard from "../assets/au-bank-assets/business card.png"
import bannerOnStand from "../assets/au-bank-assets/banner-stand.png"
import smallInvestmentReminder from "../assets/au-bank-assets/banner-stand.png"
import hut from "../assets/au-bank-assets/hut.png"
import postersOnStreetWall from "../assets/au-bank-assets/street-wall.png"

//  atoms
import Images from "../Components/Atoms/Images";

const AuBank = () => {
    return (
        <>

            <PortfolioHeading
                heading="AU BANK"
                subHeading="Branding"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id"
            />

            <div className="full__width au_banner">
                <div className="au_logo_wrapper">
                    <img src={auLogo} alt="" />
                </div>
            </div>

            <div className=" full__width au_color_palette">
                <div className="left_section">
                    <p>HEX #E5600D < br />  R 229 | G 96 | B 13  < br /> C 0 | M 58 | Y 94 | K 10</p>
                </div>
                <div className="right_section">
                    <div className="upper_section">
                        <div className="upper_left">
                            <p>HEX #451156   < br />  R 69 | G 17 | B 86    < br />  C 20 | M 80 | Y 0 | K 66</p>
                        </div>
                        <div className="upper_right">
                            <p>HEX #EB8700 < br />   R 235 | G 135 | B 0  < br /> C 0 | M 43 | Y 100 | K 8</p>
                        </div>
                    </div>
                    <div className="lower_section">
                        <p>HEX #FFCE35   < br /> R 255 | G 206 | B 53   < br /> C 0 | M 19 | Y 79 | K 0</p>
                    </div>
                </div>
            </div>

            <div className="au_slides">
                <Images image={auBankSlides} fullwidth className="img_bg_orange" />
                <div className="slides_text">
                    <h1>74 Slides </h1>
                </div>
            </div>

            <Images fullwidth image={manualFolded} />
            <Images fullwidth image={businesCard} />
            <Images fullwidth image={bannerOnStand} />
            <Images fullwidth image={smallInvestmentReminder} />
            <Images fullwidth image={hut} />
            <Images fullwidth image={postersOnStreetWall} />

        </>


    )
}
export default AuBank 