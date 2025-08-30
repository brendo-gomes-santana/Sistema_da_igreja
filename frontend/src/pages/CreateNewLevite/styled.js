import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    max-width: 1080px;

    margin: 1em auto;

    display: flex;
    flex-direction: column;

    gap: 1em;

    input[type='text']{
        height: 50px;
        padding: 1em;
        font-size: 15px;
    }

    div{        
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        div{
            margin: 1em;
        }
    }

    button{
        color: ${props => props.theme.white};
        background-color: ${props => props.theme.CinnamonBrown};
        border: none;
        height: 50px;
        font-weight: bold;
        width: 50%;
        align-self: center;
    }

`

export const ContainerCheckbox = styled.div``