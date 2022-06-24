import React from 'react'

const PortfolioHeading = ({ heading, subHeading, info, id }) => {
    return (
        <>
            <div className="portfolio__heading__container " id={id} data-aos="fade-up">
                <div className="portfolio__heading ">
                    <div className="heading__bunch ">
                        <h4>{heading}</h4>
                        <h5>{subHeading}</h5>
                    </div>
                    <div className="portfolio__para ">
                        <p>{info}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioHeading;

