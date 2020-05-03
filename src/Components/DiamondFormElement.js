/** @jsx jsx */
/** @jsxFrag React.Fragment */
import Grid from "@material-ui/core/Grid";
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const DiamondFormElement = ({children, elementTitle}) => {
    const theme = useTheme()
    const toolTipCss = css`
    display:flex;
    h2 {
    text-align:start;
    display:inline;
    font-weight:600;
    font-size:0.8em;
    }
    .toolIcon {
    padding-left:5px;
    padding-right:5px;
    margin:5px;
    background:${theme.colors.primary};
    font-size: 0.9em;
    color:white;
    align-self:center;
    }
    .diamond {
    margin: 1px solid black;
    }
    
    `
    const style = css`
        margin-top: -1px;
    margin-left: -1px;
    `
    return (
        <div>
            {/*Convert to element*/}
            <div css={toolTipCss}>
                <h2>{elementTitle.toUpperCase()}</h2>
                <div className="toolIcon">?</div>
            </div>
            <div css={style}>
                {children}
            </div>
        </div>
    );
};

export default DiamondFormElement;