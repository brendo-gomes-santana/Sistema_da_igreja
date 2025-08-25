import styled, { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        font-family: "Ubuntu", sans-serif;
        box-sizing: border-box;
    }

    input, textarea, select {
        outline: none;
    }
`

export const Container = styled.section`
    
    padding: 0.5em;

    height: 100vh;
    min-height: 100vh;
    max-height: 100%;

    width: 100%;
`

export const GlobalFormat = {
        white: '#ffffff',
        CoffeeBrown: "#33221b",
        CinnamonBrown: "#5E3420",
        LightPeach: "#ffdac9"
}