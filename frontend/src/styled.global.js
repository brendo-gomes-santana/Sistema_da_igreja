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

    a{
        text-decoration: none;
    }
`

export const Container = styled.section`
    
    padding: 5em;

    height: 90vh;
    min-height: 90vh;
    max-height: 100%;

    width: 100%;

    @media(max-width: 425px){
        padding: 1em;
    }
`

export const GlobalFormat = {
    black: "#000000",
    white: '#ffffff',
    CoffeeBrown: "#33221b",
    CinnamonBrown: "#5E3420",
    LightPeach: "#ffdac9"
}