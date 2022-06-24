import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from 'gsap/all'
import Hamburger from 'hamburger-react'


//import images
import logo from "../assets/images/logo.svg";
import logoWhite from "../assets/images/logo_white.svg";
import hamburger from "../assets/images/Group 6.png";
import cross from "../assets/images/cancel.svg";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  
  const [posState, setposState] = useState(0);

  //hamburger
  const [isOpen, setOpen] = useState(false)

  const changeNavStyles = () => {
    const pos = window.scrollY

    setposState(pos)
    // console.log(posState)

    if (posState >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }

  }
  let mobile_Ref = useRef(null)
  let logoRef = useRef(null)
  let logoRefBlack = useRef(null)
  let navLink_Ref = useRef([])

  const handleToggle = () => {
    if (isOpen === false) {
      gsap.to(mobile_Ref, { opacity: 1, duration: .2, display: 'block' })
      gsap.fromTo(navLink_Ref.current, { opacity: 1, y: 55, }, { delay: .1, duration: 1, y: 0 })
      gsap.to(logoRef, { y: 100,duration: .6 })
      gsap.fromTo(logoRefBlack, { y: 100 }, { y: 0 ,duration: .6})
      setOpen(true)
    }

    else {
      gsap.to(mobile_Ref, { delay: .2, display: 'none', opacity: 0, duration: .5 })
      gsap.to(navLink_Ref.current, { duration: .6, y: -55 })
      gsap.to(logoRef, { y: 0,duration: .6})
      gsap.to(logoRefBlack, { y: 100,duration: .6 })

      setOpen(false)
    }

  }


  const navlink = [
    {
      link: 'work',
      text: 'Work'
    },
    {
      link: 'about',
      text: 'About'

    },
    {
      link: 'service',
      text: 'Service'
    },
    {
      link: 'team',
      text: 'Team'
    },
    {
      link: 'join',
      text: 'Join',
    },
    {
      link: 'contact',
      text: 'Contact'
    },

  ]


useEffect(()=>{

  window.addEventListener('scroll', changeNavStyles)

},[posState])
  return (
    <>
      <nav className={navbar == true ? "nav active" : "nav"} >
        <div className="navbar__container">
          <div className="logo" >
            <NavLink to="/" >
              <img className="image" src={logo} alt="blacksof_logo" ref={ele => logoRef = ele} />
            </NavLink>
          </div>

          <div className="navlinks">
            <NavLink className="navLinks_a" to="/work" activeClassName="active__class">
              <h5 >Work</h5>
            </NavLink>
            <NavLink className="navLinks_a" to="/about" activeClassName="active__class">
              <h5 >About</h5>
            </NavLink>
            <NavLink className="navLinks_a" to="/service" activeClassName="active__class">
              <h5 >Services</h5>
            </NavLink>
            <NavLink className="navLinks_a" to="/team" activeClassName="active__class">
              <h5 >Team</h5>
            </NavLink>
            <NavLink className="navLinks_a" to="/join" activeClassName="active__class">
              <h5 >Join us</h5>
            </NavLink>
            <NavLink className="navLinks_a" to="/contact" activeClassName="active__class">
              <h5 >Contact us</h5>
            </NavLink>
          </div>
          <div className="hamburger__icon" >
            <Hamburger toggled={isOpen} toggle={handleToggle} />
          </div>
        </div>
      </nav>


      <div className={`mobile__nav`} ref={(ele) => mobile_Ref = ele}>
        <div className="mobile__nav__link">

          <div className="align_right">

            <div className="logo" ref={ele => logoRefBlack = ele}>
              <Link to="/" >
                <img className="image" src={logoWhite} alt="blacksof_logo" />
              </Link>
            </div>
            <div className="hamburger__icon">
              <Hamburger toggled={isOpen} toggle={handleToggle} />
            </div>
          </div>

          <div className="mobile__navlinks">

            {
              navlink.map((item, index) => {
                return (
                  <Link key={index} onClick={handleToggle} to={`/${item.link}`} >
                    <h5
                      ref={(ele) => navLink_Ref.current[index] = ele}
                    >{item.text}</h5>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
