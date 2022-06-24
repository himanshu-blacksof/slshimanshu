import React from 'react';


const FullWidthImage = ({
    image,
    className
}) => {

    return (
        <div className={`img__max__width ${className}`}>
            <img src={image} alt="full width image" />
        </div>
    )
}
export default FullWidthImage;
