import React from "react";

const OurCulture = ({ image, heading, para, direction, list }) => {
  const listItem = list;
  console.log(listItem);
  return (
    <>
      <div className={`our__culture ${direction} `}>
        <div className="our__culture__image">
          <img src={image} alt="about" />
        </div>
        <div className="our__culture__text">
          <h4>{heading}</h4>
          <p>{para}</p>
          <ul>
            {listItem.map((e,index) => {
              return <li key={index} >{e}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OurCulture;
