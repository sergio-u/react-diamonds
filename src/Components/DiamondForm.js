/** @jsx jsx */

import {css, jsx} from '@emotion/core'
import DiamondPicker from "./DiamondPicker";
import DiamondFormElement from "./DiamondFormElement";
import DiamondSlider from "./DiamondSlider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {useForm, Controller} from "react-hook-form";

const DiamondForm = () => {
    const gridCss = css`
    padding:20px;
    `
    const testsCss = css`
    `
    const {register, handleSubmit, reset, setValue, control,getValues} = useForm({
            defaultValues: {
                "quilataje": [1, 30],
                "precio": [200, 5000.0]
            }
        }
        // {defaultValues:{'quilataje': [0, 30]}}
    );
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(getValues()));
    }
    const handleReset = () => {
        reset({
            "quilataje": [1, 30],
            "precio": [200, 5000.0]
        })
    }
    const diamondOptions =
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
                title: "óvalo",
                image: "test"
            },
            {
                title: "marquesa",
                image: "test"
            },
            {
                title: "pera",
                image: "test"
            },
            {
                title: "asscher",
                image: "test"
            },
            {
                title: "corazón",
                image: "test"
            },
            {
                title: "cojín",
                image: "test"
            },
            {
                title: "baguette",
                image: "test"
            },
            {
                title: "trillón",
                image: "test"
            },
            {
                title: "radiante",
                image: "test"
            },
        ]
    const colorOptions = [
        {
            title: "transparente",
            image: "test"
        },
        {
            title: "casi incoloro",
            image: "test"
        },
        {
            title: "ligeramente amarillo",
            image: "test"
        },
        {
            title: "amarillo claro",
            image: "test"
        },
    ]
    const clarityOptions = [
        {
            title: "perfecta",
            image: "test"
        },
        {
            title: "imperfecciones no visibles",
            image: "test"
        },
        {
            title: "imperfecciones visibles a 10x",
            image: "test"
        },

        {
            title: "imperfecciones visibles a simple vista",
            image: "test"
        },
    ]
    const cutOptions = [
        {
            title: "excelente (máximo brillo)",
            image: "test"
        },
        {
            title: "muy bueno (brillante)",
            image: "test"
        },
        {
            title: "bueno (brillante)",
            image: "test"
        },
        {
            title: "regular (poco brillante)",
            image: "test"
        },
    ]
    return (
        <Container>
            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
            {/*    <input css={testsCss} name="Developer" type="radio" value="Yes" ref={register({ required: true })}/>*/}
            {/*    <input css={testsCss} name="Developer" type="radio" value="No" ref={register({ required: true })}/>*/}
            {/*    <input css={testsCss} name="Developer" type="radio" value="Maybe" ref={register({ required: true })}/>*/}
            {/*    <input type="submit" />*/}
            {/*</form>*/}
            <form onSubmit={onSubmit}>
                <Grid
                    container
                >
                    <Grid css={gridCss} item xs={6}>
                        <DiamondFormElement elementTitle="Forma">
                            <DiamondPicker
                                parent="forma"
                                size={2}
                                innerRef={register}
                                diamondOptions={diamondOptions}
                            />
                        </DiamondFormElement>
                        <DiamondFormElement elementTitle="Color">
                            <DiamondPicker parent="color"
                                           size={3}
                                           innerRef={register}
                                           diamondOptions={colorOptions}
                            />
                        </DiamondFormElement>
                        <DiamondFormElement elementTitle="Claridad">
                            <DiamondPicker parent="claridad"
                                           size={3}
                                           innerRef={register}
                                           diamondOptions={clarityOptions}
                            />
                        </DiamondFormElement>
                    </Grid>
                    <Grid css={gridCss} item xs={6}>
                        <DiamondFormElement elementTitle="Corte">

                            <DiamondPicker parent="corte"
                                           size={3}
                                           innerRef={register}
                                           diamondOptions={cutOptions}
                            />

                        </DiamondFormElement>
                        <DiamondFormElement elementTitle="Quilataje">
                            <Controller
                                name="quilataje"
                                control={control}
                                as={<DiamondSlider min={1} max={30}/>}
                                onChange={([selected]) => {
                                    return selected;
                                }}
                            />
                        </DiamondFormElement>
                        <DiamondFormElement elementTitle="precio">
                            <Controller
                                name="precio"
                                control={control}
                                as={<DiamondSlider min={200} max={5000.00}/>}
                                onChange={([selected]) => {
                                    return selected;
                                }}
                            />
                        </DiamondFormElement>
                    </Grid>
                </Grid>
                <button onClick={onSubmit}>Submit</button>
                <button onClick={handleReset}>Reset</button>
            </form>
        </Container>
    )
}
export default DiamondForm;