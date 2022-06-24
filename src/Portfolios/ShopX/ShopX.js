
import React, { useRef, useEffect } from "react";


//components
import PortfolioHeading from "../../Components/PortfolioHeading";
import PrevAndNextWork from "../../Components/PrevAndNextWork";
import Footer from "../../Components/Footer";


//  assets import 
import shopx_main_banner from '../../assets/ShopxAssets/shopx__main__banner.png'
import bubbles_circle_dots from '../../assets/ShopxAssets/bubbles_circle_dots.svg'
import shopkeeper_background from '../../assets/ShopxAssets/shopkeeper_background.png'
import shopkeeper_banner from '../../assets/ShopxAssets/shopkeeper_banner.png'
import pos_images from '../../assets/ShopxAssets/pos_images.png'
// import process__design__02 from '../../assets/ShopxAssets/process__design__02.png'
import project_timeline from '../../assets/ShopxAssets/project_timeline.svg'
import font__colors from '../../assets/ShopxAssets/font__colors.svg'
import grid__layout from '../../assets/ShopxAssets/grid__layout.png'
import web__flow from '../../assets/ShopxAssets/web__flow.svg'
import wireframe__making from '../../assets/ShopxAssets/wireframe__makings.svg'
import laptop__preview__frame from '../../assets/ShopxAssets/laptop__preview.svg'
import banner from '../../assets/ShopxAssets/banner.png'
import slide_for_website from '../../assets/ShopxAssets/slide_for_website.png'
import mobile_view_section from '../../assets/ShopxAssets/mobile_view_section.png'
import mobile_view_section_bottom from '../../assets/ShopxAssets/mobile_view_section_bottom.png'
import bulb__a from '../../assets/ShopxAssets/bulb_1.svg'
import bulb__b from '../../assets/ShopxAssets/bulb_1.svg'
import bulb__c from '../../assets/ShopxAssets/bulb_1.svg'
import other__pages__desktop from '../../assets/ShopxAssets/other__pages__desktop.png'
import mobile_1 from '../../assets/ShopxAssets/mobile_1.png'
import socials from '../../assets/ShopxAssets/socials.png'

import blade01 from '../../assets/ShopxAssets/blade01.png'
import blade02 from '../../assets/ShopxAssets/blade02.png'
import blade03 from '../../assets/ShopxAssets/blade03.png'
import blade04 from '../../assets/ShopxAssets/blade04.png'
import blade05 from '../../assets/ShopxAssets/blade05.png'
import blade06 from '../../assets/ShopxAssets/blade06.png'
import responsive__section from '../../assets/ShopxAssets/responsive__section.png'

//  atoms
import Images from "../../Components/Atoms/Images";
import CardsNums from "../../Components/Atoms/CardsNums";
import FlickingCarousel from "../../Components/FlickingCarousel";
import PageHeading from "../../Components/PageHeading";
import PagerHeading from "../../Components/Atoms/PagerHeading";


// PrevAndNextWork Images
import ima from "../../assets/images/Ima.jpg";
import sleek from "../../assets/images/sleek_new.jpg"
import ResearchSvg from "./ResearchSvg";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger);

const Heading = ({ className, num, preText, posText, red }) => {
    return (
        <div className={className} >
            <h1 style={{ color: `${red ? "#E3334A" : "black"}` }}>
                <h2 className="preText" style={{ webkitTextStroke: `1px ${red ? "#E3334A" : "black"}` }}>{preText}</h2>
                {num}
                <h2 className="posText" style={{ webkitTextStroke: `1px ${red ? "#E3334A" : "black"}` }}>{preText}</h2>
            </h1>
        </div>
    )
}

const Bulb = ({
    img,
    paragraph,
    head,
    className
}) => {
    return (
        <div className={className}>
            <Images image={img} fullwidth />
            <p>{head}</p>
            <h5>{paragraph}</h5>
        </div>
    )
}

const flexData = [
    {
        head: "Boost online visibility",
        img: blade01,
        bgclr: "#FD7813",

    },
    {
        head: "Increase customer footfall",
        img: blade02,
        bgclr: "#E3334A",
    },
    {
        head: "Retention a cakewalk",
        img: blade03,
        bgclr: "#4A8AF5"
    },
    {
        head: "Oline payments, smooth as ice.",
        img: blade04,
        bgclr: "#241A1B"
    },
    {
        head: "Lorem ipsum dolor sit ametem",
        img: blade05,
        bgclr: "#00A651"
    },
    {
        head: "Veritatis et quasi architecto",
        img: blade06,
        bgclr: "#D4177C"
    },
]

const ourGoalData = [
    {
        head: "Convenience",
        para: "We take quality assurance very seriously and conduct thorough kitchen inspection before onboarding a merchant/cook.",
        img: blade01,
        clr: "#000"
    },
    {
        head: "Saving time",
        para: "User can save thir lot's of time so that they can devote to something else. The result: you are less tired, less rushed, and less stressed.",
        img: blade02,
        clr: "#FDB913"
    },
    {
        head: "Flexibility",
        para: "Eating homemade foods is usually much cheaper than eating at a restaurant or buying processed food from the market.",
        img: blade01,
        clr: "#00A651"
    },
    {
        head: "Lorem Ipsum",
        para: "We take quality assurance very seriously and conduct thorough kitchen inspection before onboarding a merchant/cook.",
        img: blade01,
        clr: "#E3334A"
    },

]

const Features = ({
    className,
    head,
    img,
    bgclr,
    bgimg,
    padding
}) => {
    return (
        <div className={className} style={{ background: `${bgclr}` }}
            data-aos="fade-up">
            <div className="bg__image" style={{ background: `url(${bgimg}) ${bgclr}` }}>
                {/* <Images image={img} className={`${padding ? "padding" : ''} `}
                    data_aos="zoom-in" /> */}
                <h4 data-aos="fade-up">{head}</h4>
            </div>
        </div>
    )
}



const ShopX = () => {

    let main_banner_ref = useRef(null);

    useEffect(() => {

        gsap.fromTo(main_banner_ref.current,
            {
                opacity: 0,
                x: -20
            },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: "#image",
                    start: "top bottom +=100",
                    end: "+=200 ",
                    toggleActions: "play none none reverse",
                    markers: false,

                }
            }
        )

    })


    return (
        <>

            <PortfolioHeading
                heading="ShopX"
                subHeading="Branding"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id"
            />

            <br />
            <br />
            <br />
            <div className="overflow__hide padding__bottom top__padding" >

                <div className="shopx__main__banner back__shopx__a top__margin ">
                    <Images id="image" refImg={main_banner_ref} image={shopx_main_banner} className="" />
                    <span className="top__right"> <Images fullwidth image={bubbles_circle_dots} /> </span>
                    <span className="bottom__left"> <Images fullwidth image={bubbles_circle_dots} /> </span>
                </div>

            </div>

            <br />
            <br />
            <br />
            {/* <Images className="shopx_banner top__margin" fullwidth image={shopkeeper_banner} alt="background" data_aos="zoom-in-up" /> */}

            <div className="features__main__wrapper card__banner top__margin top__padding padding__bottom bottom__padding">
                {
                    flexData.map((item, index) => {
                        return (
                            <>
                                <Features
                                    className="features__wrapper"
                                    bgimg={item.img}
                                    head={item.head}
                                    bgclr={item.bgclr}
                                />
                            </>
                        )
                    })
                }
            </div>

            <div className="top__margin back__shopx__b top__padding top__margin ">

                {/* ############# OUR GOAL ##############*/}

                <PagerHeading
                    className="pagerheading__atom__reverse top__margin"
                    num="01"
                    text="Our Goal"
                    bgclr="#FEF4F6"
                    clr="#000"
                />

                <div className=" card__banner  top__margin bottom__padding">
                    <img src={pos_images} className="pos__image image " data-aos="flip-left" />
                    <div className="card__white__wrapper">
                        {
                            ourGoalData.map((item, index) => {
                                return (
                                    <>
                                        <CardsNums
                                            className="card__white"
                                            para={item.head}
                                            para1={item.para}
                                            clr={item.clr}
                                        />
                                    </>
                                )
                            })
                        }
                    </div>

                </div>
            </div>




            {/* DESIGN PROCESS */}

            <div className="process__design top__padding ">

                <PagerHeading
                    className="pagerheading__atom__reverse top__margin"
                    num="02"
                    text="DESIGN PROCESS"
                    bgclr="#241A1B"
                    clr="#fff"

                />
                <h3 className="define padding__left top__margin top__padding" data-aos="fade-up">WE DEFINE <br />
                    <span>AN INDIVIDUAL APPROACH</span>
                    <br />TO <span>EACH PROJECT</span>
                </h3>


                <div className="bulb__cards card__banner top__margin top__padding bottom__padding">
                    <CardsNums
                        className="bulbs"
                        img={bulb__a}
                        para="Convenience"
                        para1="Lorem Ipsum"
                        clr="#E3334A"
                    />
                    <CardsNums
                        className="bulbs"
                        img={bulb__b}
                        para="Convenience"
                        para1="Lorem Ipsum"
                        clr="#FDB913"
                    />
                    <CardsNums
                        className="bulbs"
                        img={bulb__c}
                        para="Convenience"
                        para1="Lorem Ipsum"
                        clr="#00A651"
                    />
                </div>
            </div>



            {/* ########## RESEARCH ######### */}

            <div className="back__shopx__b top__padding ">
                <PagerHeading
                    className="pagerheading__atom__reverse top__margin"
                    num="02"
                    text="RESEARCH"
                    bgclr="#FEF4F6"
                    clr="#000"
                />

                <p className="research padding__left top__margin top__padding">
                    Nisi irure commodo anim ea ea reprehenderit eiusmod.
                    Nisi irure commodo anim ea ea reprehenderit eiusmod.
                </p>

                <ResearchSvg />
            </div>


            {/* ########## TIMELINE ######### */}
            <div className="top__padding ">

                <PagerHeading
                    className="pagerheading__atom__reverse top__margin"
                    num="03"
                    text="TIMELINE"
                    bgclr="#fff"
                    clr="#000"
                />
                <Images className="padding__bottom top__margin top__padding " image={project_timeline} />

            </div>


            {/* ########## STYLEGUIDE ######### */}


            <div className="styleguide__image__wrapper">
                <PagerHeading
                    className="pagerheading__atom__reverse"
                    num="03"
                    text="STYLEGUIDE"
                    bgclr="#E3334A"
                    clr="#fff"
                />
                <h2 >font & colors</h2>
                <Images
                    className="styleguide__image padding__bottom padding"
                    image={font__colors}
                />
            </div>

            {/* GRID Layout */}
            <div className="back__shopx__b grid__layout">
                <Images image={grid__layout} />
            </div>


            {/* ############ WEBFLOW ############# */}

            <div>
                <PagerHeading
                    className="pagerheading__atom__reverse "
                    num="06"
                    text="WEBFLOW"
                    bgclr="#fff"
                    clr="#000"
                />

                <Images className="padding__bottom top__margin top__padding padding" image={web__flow} />
            </div>



            {/* ############ WIREFRAME ############# */}


            <div className="top__margin padding__bottom">
                <PagerHeading
                    className="pagerheading__atom__reverse "
                    num="06"
                    text="WIREFRAME"
                    bgclr="#fff"
                    clr="#000"
                />
                <Images className="padding__bottom top__margin top__padding padding " fullwidth image={wireframe__making} />
            </div>

            {/* ########### WEBSITE ########## */}

            <div className="back__shopx__a top__padding top__margin" >
                <PagerHeading
                    className="pagerheading__atom__reverse top__margin"
                    num="06"
                    text="WEBSITE"
                    bgclr="#E3334A"
                    clr="#fff"
                />
            </div>

            {/* ########### LAPTOP PREVIEW ########## */}

            <div className="website__container back__shopx__a shopx__wrapper__full ">

                <FlickingCarousel
                    className="laptop__preview__flicking"
                    slide1={slide_for_website}
                    slide2={slide_for_website}
                />

                <Images className="pos__frame" image={laptop__preview__frame} />

            </div>

            <div className="bottom__white padding__bottom" >
                <Images className="mobile__view" image={mobile_view_section} />
            </div>
            {/* <Images className="mobile__view" image={mobile_view_section_bottom} /> */}



            {/* ########### RESPONSIVE ########## */}

            <div className="top__padding top__margin " >
                <PagerHeading
                    className="pagerheading__atom__reverse "
                    num="06"
                    text="RESPONSIVE"
                    bgclr="#fff"
                    clr="#000"
                />

                <Images className="responsive__section top__margin top__padding" image={responsive__section} fullwidth />
            </div>

            {/* ######## OTHER PAGES ########### */}

            <div className="back__shopx__b top__padding " >
                <br />
                <br />
                <br />
                <br />
                <PagerHeading
                    className="pagerheading__atom__reverse top__margin "
                    num="07"
                    text="OTHER PAGES"
                    bgclr="#FEF4F6"
                    clr="#000"
                />


                <div className="other__pages top__margin top__padding padding__bottom">
                    <div className="mobiles__wrapper">
                        <Images fullwidth image={mobile_1} />
                        <Images fullwidth image={mobile_1} />
                        <Images fullwidth image={mobile_1} />
                        <Images fullwidth image={mobile_1} />
                    </div>
                    <Images className="desktop__wrapper" image={other__pages__desktop} />
                </div>

                {/* ######### Socials ########### */}
                <Images className="desktop__wrapper top__margin top__padding padding__bottom" image={socials} />


                {/* ############# Thanks for your time ############## */}
                <div className='thank__for__watching__'>
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

        </>


    )
}
export default ShopX;