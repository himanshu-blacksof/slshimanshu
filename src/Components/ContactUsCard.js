
import React, { useState } from "react";
import emailjs from 'emailjs-com'



const TeamCard = ({ image, post, description, close, linkedInLink }) => {
    const [open, setopen] = useState(true);
    const [getintouch, setGetintouch] = React.useState({
        name: '',
        email: '',
        message: ''
    })

    let name, value

    const onChangeGet = (event) => {
        name = event.target.name
        value = event.target.value
        setGetintouch({ ...getintouch, [name]: value })
    }


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
                    // setOpen(false)
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
            <div onClick={() => setopen(true)} className="card__container">
                <div className="card__image">
                    <img src={image} alt="aditya" />
                </div>
                <div className="card__content">
                    <h5>{name}</h5>
                    <p>{post}</p>
                </div>
            </div>

            <div className={`overlay__container ${open ? "view" : ""}`}>
                <div className="overlay">
                    <div onClick={() => setopen(false)} className="close__button">
                        <img src={close} alt="close" />
                    </div>
                    <div className="overlay__content__container">
                        <div className="overlay__content">

                            <div
                                className="about__team__member" >

                                <form className="contactus__form"
                                    onSubmit={(event) => handleSubmit(event)}
                                >

                                    <input
                                        className="contactus__input"
                                        placeholder="Name"
                                        type="text"
                                        name="name"
                                        value={getintouch.name}
                                        onChange={onChangeGet}
                                    />

                                    <br />

                                    <input
                                        className="contactus__input"
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        value={getintouch.email}
                                        onChange={onChangeGet}
                                    />

                                    <br />

                                    <textarea
                                        className="contactus__input"
                                        // style={{ width: "13rem" }}
                                        placeholder="Message"
                                        name="message"
                                        value={getintouch.message}
                                        onChange={onChangeGet}
                                    />

                                    <br />

                                    <button className="btn" type="submit">Submit</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamCard;
