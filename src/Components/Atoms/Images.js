import React from 'react';

const Images = ({
  className,
  image,
  alter,
  fullwidth,
  data_aos,
  id,
  ref,
  refImg,
  bgclr,
}) => {
  return (
    <div
      ref={ref}
      id={id}
      className={`${fullwidth ? 'full__width' : 'simple__width'} ${className}`}
    >
      <img ref={refImg} className="image" src={image} alt={alter} />
      <span
        style={{
          boxShadow: `0px 0px 5px 0px ${bgclr}`,
          background: `radial-gradient(${bgclr}, rgba(0, 128, 0, 0))`,
        }}
      ></span>
    </div>
  );
};
export default Images;
