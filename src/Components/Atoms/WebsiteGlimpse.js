import React from 'react';
import Images from './Images';
import arrow from '../../assets/evreAssets/arrow.svg'
import arrow__reverse from '../../assets/evreAssets/arrow_reverse.svg'

const WebsiteGlimpse = ({
    className,
    heading1,
    heading2,
    para, image,
    style,
    reverse
}) => {

    return (
        <div style={style} className={`${reverse ? "website__glimpse__reverse" : "website__glimpse"}  ${className}`}>
            <div className='website__glimpse__left'>
                <h2 className='evre__text__gradient'>{heading1}</h2>
                <h2 className='evre__text__gradient'>{heading2}</h2>
                <p >{para}
                    <span className={` ${reverse ? "website__glimpse__arrow__reverse" : "website__glimpse__arrow"}`}>
                        <img className='image' src={`${reverse ? arrow__reverse : arrow}`} />
                    </span>
                </p>

            </div>
            <div className='website__glimpse__right'>
                {
                    image ?
                        <Images
                            image={image}
                            fullwidth />
                        :
                        <div className='Dummy_Images'></div>
                }
            </div>
        </div>
    )
}
export default WebsiteGlimpse;
