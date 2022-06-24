import React, { useEffect } from "react";

//components
import PortfolioHeading from "../Components/PortfolioHeading";
import Footer from "../Components/Footer";

//images
import encompass from "../assets/images/encompass.jpg";
import sleek from "../assets/images/sleek_new.jpg";



import logo from "../assets/Sinless assests/Group 4714.png";
import deo1 from "../assets/Sinless assests/Mask Group 64.png";
import deo2 from "../assets/Sinless assests/Group 40.png";
import deo3 from "../assets/Sinless assests/sinless portfolio-01.png";
import deo4 from "../assets/Sinless assests/Group 4838.png";
import deo5 from "../assets/Sinless assests/Group 4831.png";
import deo6 from "../assets/Sinless assests/sinless-banner.png";
import mobile from "../assets/Sinless assests/Group 4839.png";
import mobileDesign from "../assets/Sinless assests/Group 4833.png";
import deo7 from "../assets/Sinless assests/Group 4840.png";
import information from "../assets/Sinless assests/Mask Group 81.png";
import banner from "../assets/Sinless assests/Group 4841.png";
import carousel from "../assets/Sinless assests/Group 4716.png";
import mobile2 from "../assets/Sinless assests/Mask Group 85.png";
import deo8 from "../assets/Sinless assests/Group 4832.png";
import emailjs from 'emailjs-com'
import PrevAndNextWork from "../Components/PrevAndNextWork";




const Sinless = () => {

  const [open, setOpen] = React.useState(true);

  const [getintouch, setGetintouch] = React.useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  })

  let name, value

  const onChangeGet = (event) => {
    name = event.target.name
    value = event.target.value
    setGetintouch({ ...getintouch, [name]: value })
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleClickOpen()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    const {
      name,
      email,
      message
    } = getintouch

    emailjs.sendForm('service_9tjck1e', 'template_ev78reu', event.target, 'user_8YCXHOm0UhHVd3cYgm4ny')
      .then((res) => {
        if (res.status == 200) {
          setOpen(false)
          setGetintouch({
            name: '',
            email: '',
            message: ''
          })
        } else { alert('something is wrong') }
      })
      .catch((error) => console.log(error))

  }

  return (

    <>

      {/* <div
        className={`${open ? "dialog__box__wrapper" : "dialog__box__wrapper d__none"}`}
      >
        <div className="dialog__box">

          <h3 >Get in Touch</h3>
          <span className="cross__form" onClick={handleClose}>&#10006;</span>

          <br />


          <form className="Form"
            onSubmit={(event) => handleSubmit(event)}
          >


            <input
              className="input"
              placeholder="Name *"
              type="text"
              name="name"
              value={getintouch.name}
              onChange={onChangeGet}
            />

            <br />

            <input
              className="input"
              placeholder="Email *"
              type="email"
              name="email"
              value={getintouch.email}
              onChange={onChangeGet}
            />

            <br />

            <input
              className="input"
              placeholder="Phone Number"
              type="number"
              name="phoneNumber"
              value={getintouch.phoneNumber}
              onChange={onChangeGet}
            />

            <br />

            <textarea
              className="input"
              placeholder="Message *"
              name="message"
              value={getintouch.message}
              onChange={onChangeGet}
            />

            <br />

            <button className="btn" type="submit">Submit</button>

          </form>

        </div>

      </div> */}



      <div className="portfolio__container">
        <PortfolioHeading
          heading="SINless"
          subHeading="UI/UX | Packaging"
          info="SINless is a US-based manufacturer and seller of a range of earth-friendly deodorants. The motto of the company is to Sin a little Less with all its initiatives. SINLess aims to develop & launch a wide variety of daily-use essentials that are created and packaged using end-to-end sustainable material and processes. "
        />

        <div className="sinless__logo">
          <img src={logo} alt="sinless logo" />
        </div>

        <div className="full__img">
          <img src={deo1} alt="deo" />
        </div>

        <div className="full__img flex__deo">
          <img src={deo2} alt="deo" />
        </div>

        <div className="full__img bottom__margin2">
          <img src={deo3} alt="deo" />
        </div>

        <div className="alignment__container">
          <div className="img__max__width bottom__margin2">
            <img src={deo4} alt="deo" />
          </div>

          <div className="img__max__width bottom__margin2 ">
            <img src={deo5} alt="deo" />
          </div>

          <div className="img__max__width bottom__margin2">
            <img src={deo6} alt="deo" />
          </div>
        </div>

        <div className="heading__sinless">
          <h1>UI/UX</h1>
          <h2>for sinless</h2>
        </div>

        <div className="full__img bottom__margin2">
          <img src={mobile} alt="deo" />
        </div>

        <div className="alignment__container2">
          <div className="img__max__width bottom__margin2">
            <img src={mobileDesign} alt="deo" />
          </div>

          <div className="sinless__para bottom__margin2">
            <p>
              The congruence of experiential design and brand value enabled us to create the perfect digital identity for SinLess.
              A place where customers could interact with the brand while engulfing in the organic experience crafted for its product.
            </p>

          </div>

          <div className="img__max__width bottom__margin2">
            <img src={deo7} alt="deo" />
          </div>

          <div className="img__max__width bottom__margin2">
            <img src={information} alt="deo" />
          </div>
        </div>

        <div className="full__img bottom__margin2">
          <img src={banner} alt="banner" />
        </div>

        <div className="full__img bottom__margin2">
          <img src={carousel} alt="banner" />
        </div>

        <div className="full__img bottom__margin2">
          <img src={mobile2} alt="banner" />
        </div>

        <div className="alignment__container2">
          <div className="heading__sinless">

          </div>

          <div className="img__max__width">
            <img src={deo8} alt="deo" />
          </div>

          {/* <div className="website__button">
            <img src={website} alt="website" />
            <Link className="anchor" to='/contact'>Contact us</Link>
          </div> */}
        </div>
      </div>

      <PrevAndNextWork
        prev="/work/encompass"
        next="/work/sleek"
        image1={encompass}
        image2={sleek}
      />

      <Footer />
    </>
  );
};

export default Sinless;
