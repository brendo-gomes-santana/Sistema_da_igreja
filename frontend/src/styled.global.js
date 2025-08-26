import styled, { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`
    
    
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