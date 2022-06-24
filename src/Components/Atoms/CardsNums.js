import React from 'react';
import Images from './Images';


const CardsNums = ({
    para,
    para1,
    number,
    className,
    img,
    style,
    clr,
    bgclr
}) => {

    return (
        <div style={style} className={` ${className}`}>
            <div>
                <span className='cards__quotes'>"</span>
                {
                    img ?
                        <Images
                            className="images"
                            image={img}
                            bgclr={clr}
                            data_aos="flip-right" />
                        : ""
                }
                <h4 style={{ color: `${clr}` }} >{para}</h4>
                <p data-aos="fade-up">{para1}</p>
                <h2 className='cards__number evre__text__gradient'>{number}</h2>
            </div>
        </div>
    )
}
export default CardsNums;
