import React, { useState } from 'react'
import { set } from 'react-ga'

const Work = ({ tabs }) => {

    const [isActive, setActive] = useState(false)

    const liData = [
        {
            workCategories: "Branding"
        },
        {
            workCategories: "UI/UX"
        },
        {
            workCategories: "Dashboard"
        },
    ]


    const handleChange = (arg) => {
        if (isActive) {
            setActive(false)
            console.log(arg)
        }
        else {
            setActive(true)
        }
    }


    return (
        <>
            <div className="work">
                <h2>Work</h2>

                {
                    tabs ?
                        <div className='work__tab__container'>
                            <ul>
                                {
                                    liData.map((item, index) => {
                                        return (
                                            <li
                                                className={`${isActive ? "lis active" : "lis"}`}
                                                onClick={() => handleChange(index)}

                                            >{item.workCategories}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div> : ""
              }
            </div>
        </>
    )
}

export default Work;
