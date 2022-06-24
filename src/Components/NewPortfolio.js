import React, { useEffect, useState } from "react";
//images
import arrow from "../assets/images/arrow.svg";

const NewPortfolio = ({
  image1,
  image2,
  type1,
  type1_1,
  type2,
  type2_2,
  company1,
  company2,
  subhead1,
  subhead2,
  direction,
  margin,
  path1,
  path2,
  workData
}) => {

  const [workstate, setWorkstate] = useState(workData)
  const [active, setactive] = useState(0)

  const handleClick = (catArgs, index) => {
    if (!index == 0) {

      const filtered = workData.filter((item) => {
        return (item.category.includes(catArgs));
      })
      console.log(filtered)
      setactive(index)
      setWorkstate(filtered)
    }
    else {
      setWorkstate(workData)
      setactive(index)
    }
  }

  useEffect(() => {

    console.log(workstate, "satte")

  }, [workstate])

  return (
    <>
      <div className="tabs__container ">
        <div className="navlinks">

          <h5 className={`${active == 0 ? "active__class" : ""} navLinks_a`} onClick={() => handleClick("all", 0)}>All</h5>
          <h5 className={`${active == 2 ? "active__class" : ""} navLinks_a`} onClick={() => handleClick("ui", 2)}>UI/UX</h5>
          <h5 className={`${active == 1 ? "active__class" : ""} navLinks_a`} onClick={() => handleClick("branding", 1)}>Branding</h5>
          {/* <h5 className={`${active == 3 ? "active__class" : ""} navLinks_a`} onClick={() => handleClick("social", 3)}>Social Media</h5> */}

        </div>
      </div>


      <div className={`new__porfolio__container  ${margin} `}>

        {
          workData ? <>
              {
                workstate.map((item, index) => {
                  return (
                    <div className={`new__porfolio__half`} >
                      <a rel="noreferrer" href={item.path1} >
                        <div className="work__product__image">
                          <img className="image" src={item.image1} alt="brandings" />
                        </div>
                      </a>

                      <div className="work__text__box">
                        <h5>{item.type1} &nbsp; {item.type1_1}</h5>
                        <h3>{item.company1}</h3>
                        <h3>{item.subhead1}</h3>

                        <div className="view__arrow">
                          <a className="aling__view" rel="noreferrer" href={path1}>
                            <h5>View</h5>
                            <img src={arrow} alt="arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </> : ""
        }

        {image1 ? <>
          <div className={`new__porfolio__half`} >
            <a rel="noreferrer" href={path1} >
              <div className="work__product__image">
                <img className="image" src={image1} alt="branding" />
              </div>
            </a>

            <div className="work__text__box">
              <h5>{type1} &nbsp; {type1_1}</h5>
              <h3>{company1}</h3>
              <h3>{subhead1}</h3>

              <div className="view__arrow">
                <a className="aling__view" rel="noreferrer" href={path1}>
                  <h5>View</h5>
                  <img src={arrow} alt="arrow" />
                </a>
              </div>
            </div>
          </div> </> : ""
        }


        {
          image2 ?
            <>
              <div className={`new__porfolio__half work__box__margin`} >
                <a rel="noreferrer" href={path2} >
                  <div className="work__product__image">
                    <img className="image" src={image2} alt="branding" />
                  </div>
                </a>

                <div className="work__text__box">
                  <h5>{type2} &nbsp;   {type2_2}</h5>
                  <h3>{company2}</h3>
                  <h3>{subhead2}</h3>
                  <div className="view__arrow">
                    <a className="aling__view" rel="noreferrer" href={path2}>
                      <h5>View</h5>
                      <img src={arrow} alt="arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </> : ''
        }




      </div>
    </>
  );
};

export default NewPortfolio;
