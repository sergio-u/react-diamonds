/** @jsx jsx */
import Grid from "@material-ui/core/Grid";
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const DiamondFormElement = ({children,elementTitle}) => {
    const theme = useTheme()
    const toolTipCss=css`
    display:flex;
    padding:10px;
    h2 {
    text-align:start;
    display:inline;
    }
    .toolIcon {
    padding:5px;
    margin:5px;
    background:${theme.colors.primary};
    color:white;
    align-self:center;
    }
    `
    return (
        <div>
            {/*Convert to element*/}
            <div css={toolTipCss}>
                <h2>{elementTitle}</h2>
                <div className="toolIcon">?</div>
            </div>
            {children}
        </div>
    );
};

export default DiamondFormElement;