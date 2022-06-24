import React from 'react'
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error__wrapper'>
            <h1>404</h1>
            <br/>
            <h4>The page you have requested is not found.</h4>
            <h5>Click here to visit <NavLink to="/">HomePage</NavLink></h5>

        </div>
    )
}
export default Error;