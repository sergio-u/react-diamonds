import React from 'react';
import DiamondOption from "./DiamondOption";

const DiamondPicker = ({diamondOptions}) => {
    return (
        <>
            {diamondOptions ? diamondOptions.map((option) => (
                <DiamondOption key={option.title} diamondOption={option}/>
            )): "No options"}
        </>
    );
};

export default DiamondPicker;