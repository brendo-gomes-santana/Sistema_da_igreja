import styled from "styled-components";

export const FormAddMusic = styled.form`
    margin: 1em auto;
    width: 100%;
    max-width: 1080px;

    display: flex;
    gap: 1em;

    select {
        flex: 1;
        padding: 0 0.5em;
    }

    div{
        display: flex;
        align-items: center;
    }

    button{
        color: ${props => props.theme.white};
        background-color: ${props => props.theme.CinnamonBrown};
        border: none;
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
`