/** @jsx jsx */

import {css, jsx} from '@emotion/core'

const Button = (props) => {
    const style = css`
    background:${props.bgColor};
    color:${props.color};
    :hover{
        background:rgba(${props.hoverColor})!important;
        filter: opacity(.9);
    }
    `
    return (
        <div css={style}>
            {props.children.toUpperCase()}
        </div>
    );
};

export default Button;