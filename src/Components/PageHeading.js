import React from "react";

const PageHeading = ({ heading, subHeading, subSubHeading }) => {
  return (
    <>
      <div className="page__heading__container">
        <div className="page__heading">
            <h2>{heading}</h2>
          <div className="sub__heading">
            <h3>{subHeading}</h3>
            <br />
            <br />
            <p>{subSubHeading}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeading;
