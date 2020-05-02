import React from 'react';
import DiamondOption from "./DiamondOption";
import Grid from "@material-ui/core/Grid";

const DiamondPicker = ({diamondOptions}) => {
    return (
        <Grid container>
            {diamondOptions ? diamondOptions.map((option) => (
                <Grid item xs={2}  key={option.title}>
                    <DiamondOption diamondOption={option}/>
                </Grid>
            )): "No options"}
        </Grid>
    );
};

export default DiamondPicker;