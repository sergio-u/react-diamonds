/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import {useEffect, useState} from "react";

const DiamondSlider = (props) => {
    // const [value, setValue] = useState(props.value?props.value:[props.min,props.max]);
    const [value, setValue] = useState(props.value);


    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        props.onChange(newValue);
        //return(newValue);
    };
    useEffect(()=>{
        //console.log(props);
        setValue(props.value);
    },[props]);

    const handleRightInputChange = (event) => {
        //console.log(event.target.value)
        const newLim =event.target.value === '' ? '' : Number(event.target.value);
        //console.log(newLim);
        const newValue = [value[0],newLim];
        setValue(newValue);
        props.onChange(newValue);
    };

    const handleLeftInputChange = (event) => {
        // console.log(event.target.value)
        const newLim =event.target.value === '' ? '' : Number(event.target.value);
        // console.log(newLim);
        const newValue = [newLim,value[1]];
        setValue(newValue);
        props.onChange(value);
    };


    const wrapperStyle=css`
    display:flex;
    flex-direction:column;
    `
    const flexArount=css`
    display:flex;
    justify-content:space-between;
    `
    const input=css`
    input {
    width:50px;
    }`
    const handleChange = () => {

    }
    return (
        <div css={wrapperStyle}>
            <div css={flexArount}>
                <img src="./diamonds/Claridad/perfecta.png" alt="" className="image"/>
                <img src="./diamonds/Claridad/perfecta.png" alt="" className="image"/>
            </div>
            <div>
                <Slider
                    value={value}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    min={props.min}
                    max={props.max}
                />
            </div>
            <div css={[input,flexArount]}>
                <input type="number" onChange={handleLeftInputChange} step="0.5" value={value? value[0]:""}/>
                <input type="number" onChange={handleRightInputChange} step="0.5" value={value? value[1]:""}/>
            </div>
        </div>
    );
};

export default DiamondSlider;