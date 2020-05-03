/** @jsx jsx */
import './App.css';
import DiamondForm from "./Components/DiamondForm";
import {ThemeProvider} from "emotion-theming";
import {Global, css, jsx} from "@emotion/core";
import StyleTest from "./Components/StyleTest";


function App() {
    const theme = {
        colors: {
            primary: '#1724ab',
            primaryTransparent: '23, 36, 171, 0.3',
            primaryHover: '23, 36, 171, 0.6',
            secondary: 'hotpink',
        }
    }
    return (
        <div className="App">
            <Global styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600&display=swap');
            body {
                font-family: 'Nunito Sans', sans-serif !important;
            }
            `}>
            </Global>
            <ThemeProvider theme={theme}>
                <DiamondForm/>
            </ThemeProvider>
        </div>
    );
}

export default App;
