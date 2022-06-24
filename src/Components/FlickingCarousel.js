import React from 'react';

//flicking carousel

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { ARROW, Arrow, AutoPlay, Fade, Pagination } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import bold_Bs from '../assets/brebelAssets/Path 6392.svg';
import competitors_line from '../assets/evreAssets/competitors_line.svg';
import Images from './Atoms/Images';




const FlickingCarousel = ({
    slide1,
    slide2,
    slide3,
    evreData,
    bold_B,
    className,

}) => {

    const pagination = new Pagination({ type: 'bullet' })
    const autoplay = new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })
    const arrow = new Arrow();
    const fade = new Fade();

    const plugins = [autoplay, pagination, arrow ];
    const plugins1 = [autoplay, fade];

    return (
        <div className={`carousel__container ${className}`}>
            {
                slide1 ?
                    <Flicking
                        plugins={plugins}
                        duration="2500"
                        defaultIndex='1'
                        circular
                        className="carousel__flicking"

                    >
                        <div className="slides__flicking">
                            <img src={slide1} alt="carousel" />
                        </div>
                        <div className="slides__flicking">
                            <img src={slide2} alt="carousel" />
                        </div>
                        <div className="slides__flicking">
                            <img src={slide2} alt="carousel" />
                        </div>

                        <ViewportSlot>
                            <span className='flicking-pagination'></span>
                            <span className="flicking-arrow-prev"></span>
                            <span className="flicking-arrow-next"></span>
                        </ViewportSlot>
                    </Flicking> : ""
            }

            {
                evreData ?
                    <div className={className} >
                        <Flicking
                            plugins={plugins1}
                            duration="2500"
                            defaultIndex='3'
                            circular={true}
                            loop="true"
                            renderOnlyVisible={true}
                            panelsPerView={5}

                        >
                            {
                                evreData.map((item, index) => {
                                    return (
                                        <div className='flicking__slide'>
                                            <img className='image' src={item.image} />
                                        </div>
                                    )
                                })

                            }

                            <ViewportSlot>
                                <span className='flicking-pagination'></span>
                            </ViewportSlot>
                        </Flicking>
                        <Images
                            className="competitors_line"
                            image={competitors_line}
                            fullwidth
                        />
                    </div>
                    : ""
            }
            {
                bold_B ?
                    <div className='bold__B'>
                        <img src={bold_Bs} alt='back B' />
                    </div> : ""

            }
        </div >
    )
}
export default FlickingCarousel;
