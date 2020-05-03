import React from 'react';
import DiamondOption from "./DiamondOption";
import Grid from "@material-ui/core/Grid";

const DiamondPicker = ({diamondOptions,innerRef,parent,size}) => {
    return (
        <Grid container>
            {diamondOptions ? diamondOptions.map((option) => (
                <Grid item xs={size}  key={option.title}>
                    <DiamondOption
                        diamondOption={option}
                        innerRef={innerRef}
                        parent={parent}
                    />
                </Grid>
            )): "No options"}
        </Grid>
    );
};

export default DiamondPicker;