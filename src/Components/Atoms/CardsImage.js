import React from 'react';


const CardsImage = ({
    className,
    uls,
    li1,
    li2,
    li3,
    image,
    icons,
    style,
    first,
    para,
    fontcolor,
    
}) => {

    return (
        <div style={style}  className={`cards__images__container ${className}`}>
            {
                li1 ?
                    <ul className='cards__ul' data-aos="fade-up">
                        <div>
                            <h4>{uls}</h4>
                            <span>{icons}</span>
                        </div>
                        {
                            li1 ? <li className='cards__li' >{li1}</li> : ''
                        }
                        {
                            li2 ? <li className='cards__li' >{li2}</li> : ''
                        }
                        {
                            li3 ? <li className='cards__li' >{li3}</li> : ''
                        }
                    </ul> :
                    ""
            }
            <div className='cards__images__svg' data-aos="fade-up">
                <img className='image' src={image} />
            </div>

            {
                first ?
                    <>
                        <div className='camel__case__para' data-aos="fade-up">
                            <h2 style={{color:`${fontcolor}`}}>{first}</h2>
                            <div>
                                <p >{uls}</p>
                                <h6>{para}</h6>
                            </div>
                        </div>
                    </>
                    : ""
            }

        </div>
    )
}
export default CardsImage;
