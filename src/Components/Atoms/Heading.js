import React from 'react';
import Images from './Images';


const Heading = ({
    logo,
    textClass,
    BigHeading,
    BigHeading_1,
    Heading,
    HeadingLeft,
    HeadingLeft_1,
    para,
    para1,
    bottomImage,
    className
}) => {

    return (
        <div className={`evre__gen__heading__container ${className}`} data-aos="fade-up">
            {
                logo ?
                    <div className="evre__logo">
                        <img className="image" src={logo} />
                    </div> : ""
            }
            {
                para1 ?
                    <p>{para1}</p>
                    : ""
            }
            {
                BigHeading ?
                    <h2 className={`${textClass} text__center`}>{BigHeading}<br /> {BigHeading_1}</h2>
                    : ""
            }
            {
                Heading ?
                    <h3 className={`${textClass} text__center`}>{Heading}</h3>
                    : ""
            }

            {
                HeadingLeft ?
                    <h3 className={`${textClass} `}>{HeadingLeft}<br /> {HeadingLeft_1}</h3>
                    : ""
            }
            {
                para ?
                    <p className='para'>{para}</p>
                    : ""
            }

            {
                bottomImage ?
                    <div className='evre__gen__heading__image__box'>
                        <Images
                            image={bottomImage}
                            className="evre__gen__heading__image"
                        />
                    </div>
                    : ''
            }

        </div>

    )
}
export default Heading;
