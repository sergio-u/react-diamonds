/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const StyleTest = () => {

    const style = css`
  color: hotpink;
`

    const SomeComponent = ({children}) => (
        <div css={style}>
            Some hotpink text.
            {children}
        </div>
    )

    const anotherStyle = css({
        textDecoration: 'underline'
    })

    const AnotherComponent = () => (
        <div css={anotherStyle}>Some text with an underline.</div>
    )
    return (
        <SomeComponent>
            <AnotherComponent/>
        </SomeComponent>
    )
}
export default StyleTest;