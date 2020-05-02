/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import DiamondPicker from "./DiamondPicker";
import DiamondFormElement from "./DiamondFormElement";
import DiamondSlider from "./DiamondSlider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const DiamondForm = () => {
    const gridCss = css`
    column-count:2;
    `
    return (
        <Container>
            <Grid
                container
            >
                <Grid item xs={6}>
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
                                    },
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
                                    },
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
                                    },
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
                                    },
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
                </Grid>
                <Grid item xs={6}>
                    <DiamondFormElement elementTitle="Corte">
                        <DiamondPicker/>
                    </DiamondFormElement>
                    <DiamondFormElement elementTitle="Quilataje">
                        <DiamondSlider/>
                    </DiamondFormElement>
                    <DiamondFormElement elementTitle="Precio">
                        <DiamondSlider/>
                    </DiamondFormElement>
                </Grid>
            </Grid>
        </Container>
    )
}
export default DiamondForm;