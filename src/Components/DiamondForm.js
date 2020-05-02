import React from 'react';
import DiamondPicker from "./DiamondPicker";
import DiamondFormElement from "./DiamondFormElement";
import DiamondSlider from "./DiamondSlider";

const DiamondForm = () => {
    return (
        <div>
            <DiamondFormElement elementTitle="Forma">
                <DiamondPicker
                    diamondOptions={
                        [
                        {
                            title: "redondo",
                            image: "test"
                        },
                        {
                            title: "princesa",
                            image: "test"
                        },
                        {
                            title: "esmeralda",
                            image: "test"
                        }
                    ]
                    }
                />
            </DiamondFormElement>
            <DiamondFormElement elementTitle="Color">
                <DiamondPicker/>
            </DiamondFormElement>
            <DiamondFormElement elementTitle="Claridad">
                <DiamondPicker/>
            </DiamondFormElement>
            <DiamondFormElement elementTitle="Corte">
                <DiamondPicker/>
            </DiamondFormElement>
            <DiamondFormElement elementTitle="Quilataje">
                <DiamondSlider/>
            </DiamondFormElement>
            <DiamondFormElement elementTitle="Precio">
                <DiamondSlider/>
            </DiamondFormElement>
        </div>
    )
}
export default DiamondForm;