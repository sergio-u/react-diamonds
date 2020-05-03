/** @jsx jsx */

import {css, jsx} from '@emotion/core'
import DiamondPicker from "./DiamondPicker";
import DiamondFormElement from "./DiamondFormElement";
import DiamondSlider from "./DiamondSlider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {useForm, Controller} from "react-hook-form";
// import Button from "@material-ui/core/Button";
import Button from "./Button";
import {useTheme} from "emotion-theming";
import Box from "@material-ui/core/Box";

const DiamondForm = () => {
    const theme = useTheme();
    const gridCss = css`
    padding:20px;
    `
    const {register, handleSubmit, reset, setValue, control, getValues} = useForm({
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
                image: "./diamonds/Forma/redondo.png"
            },
            {
                title: "princesa",
                image: "./diamonds/Forma/princesa.png"
            },
            {
                title: "esmeralda",
                image: "./diamonds/Forma/esmeralda.png"
            },
            {
                title: "óvalo",
                image: "./diamonds/Forma/ovalo.png"
            },
            {
                title: "marquesa",
                image: "./diamonds/Forma/marquesa.png"
            },
            {
                title: "pera",
                image: "./diamonds/Forma/pera.png"
            },
            {
                title: "asscher",
                image: "./diamonds/Forma/asscher.png"
            },
            {
                title: "corazón",
                image: "./diamonds/Forma/corazon.png"
            },
            {
                title: "cojín",
                image: "./diamonds/Forma/cojijn.png"
            },
            {
                title: "baguette",
                image: "./diamonds/Forma/baguette.png"
            },
            {
                title: "trillón",
                image: "./diamonds/Forma/trillon.png"
            },
            {
                title: "radiante",
                image: "./diamonds/Forma/radiante.png"
            },
        ]
    const colorOptions = [
        {
            title: "transparente",
            image: "./diamonds/Color/incoloro.png"
        },
        {
            title: "casi incoloro",
            image: "./diamonds/Color/casi-incoloro.png"
        },
        {
            title: "ligeramente amarillo",
            image: "./diamonds/Color/ligeramente-amarillo.png"
        },
        {
            title: "amarillo claro",
            image: "./diamonds/Color/amarillo-claro.png"
        },
    ]
    const clarityOptions = [
        {
            title: "perfecta",
            image: "./diamonds/Claridad/perfecta.png"
        },
        {
            title: "imperfecciones no visibles",
            image: "./diamonds/Claridad/imperfecciones-no-visibles.png"
        },
        {
            title: "imperfecciones visibles a 10x",
            image: "./diamonds/Claridad/imperfecciones-10x.png"
        },

        {
            title: "imperfecciones visibles a simple vista",
            image: "./diamonds/Claridad/imperfecciones-simple-vista.png"
        },
    ]
    const cutOptions = [
        {
            title: "excelente (máximo brillo)",
            image: "./diamonds/Corte/excelente.png"
        },
        {
            title: "muy bueno (brillante)",
            image: "./diamonds/Corte/muy-bueno.png"
        },
        {
            title: "bueno (brillante)",
            image: "./diamonds/Corte/bueno.png"
        },
        {
            title: "regular (poco brillante)",
            image: "./diamonds/Corte/regular.png"
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
                <Grid container item xs={12}
                      justify="center"
                      alignItems="center"
                >
                    <Grid item xs={2} onClick={onSubmit}>
                        <Button color={"white"} bgColor={theme.colors.primary}
                                hoverColor={theme.colors.primary}>Buscar</Button>
                    </Grid>
                    <Grid item xs={2} onClick={handleReset}>
                        <Button color={theme.colors.primary} bgColor={"white"}
                                hoverColor={theme.colors.primaryTransparent}>Limpiar Filtros</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}
export default DiamondForm;