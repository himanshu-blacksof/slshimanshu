import React from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


const PrevAndNextWork = ({ next, prev, image1, image2 }) => {
    return (
        <>
            <div className="alignment__container2" data-aos="fade-up">

                <div className="portfolio__container">
                    {/* <h2 className="prev_next_head">Our Work</h2> */}
                    <div className="prev_next_work_container ">

                        <a rel="noreferrer" href={prev}
                            // target="_blank"
                            className="prev_next_work_box_left" >
                            <h3>Previous Work</h3>

                            <div className='prev_image_bg'>
                                <img className='images' src={image1} alt='' />
                            </div>
                        </a>

                        <div className='prev_hr'></div>

                        <a rel="noreferrer" href={next}
                            // target="_blank"
                            className="prev_next_work_box_right" >
                            <h3>Next Work</h3>

                            <div className='prev_image_bg'>
                                <img className='images' src={image2} alt='' />
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PrevAndNextWork;

