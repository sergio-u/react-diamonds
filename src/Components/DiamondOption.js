/** @jsxFrag React.Fragment */
/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const DiamondOption = ({diamondOption,parent,innerRef}) => {
    const theme = useTheme();
    const {title, image} = diamondOption;
    const handleChange=(e) => {
        const el = document.getElementsByClassName("container");
        el[0].classList.add("selected-mine");
    }
    const style = css`
    height:100%;
    border: 1px solid ${theme.colors.primary};
    margin-bottom: -1px;
    margin-left: -1px;
    .selected-mine{
        background:green;!important
    }
    
    input {
    display:none
    }
    
    input:checked+label{
    filter:none;
    background:rgba(${theme.colors.primaryTransparent});
    }
    label {
        display:inline-block;
        height:100%;
        width:100%;
        filter: brightness(1.8) grayscale(1) opacity(.7);
    }
    
    label:hover {
                filter: brightness(1.2) grayscale(.5) opacity(.9);
    }
    
    input:active{
        opacity:.9;
    }
    .diamond-name {
    font-weight:400;
    font-size:0.6em;
    }
    
    .image {
    width:70px; 
    }

    
    `
    return (
        <div css={style} className="container">
            <input type="radio"
                   ref={innerRef}
                   onChange={handleChange}
                   name={parent} value={title} id={title}/>
            <label htmlFor={title}>
                <img src="./diamonds/Claridad/perfecta.png" alt="" className="image"/>
                <div className="diamond-name">
                    {title.toUpperCase()}
                </div>
            </label>
        </div>
    );
};

export default DiamondOption;