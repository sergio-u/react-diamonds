import React from 'react';

const DiamondOption = ({diamondOption}) => {
    const {title,image} = diamondOption;
    return (
        <>
            <h3>Title: {title}</h3>
            <h3>Image: {image}</h3>
        </>
    );
};

export default DiamondOption;