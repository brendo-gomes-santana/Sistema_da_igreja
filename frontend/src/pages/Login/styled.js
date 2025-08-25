import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    max-width: 1080px;
    

    border-radius: 13px;
    border: 1px solid #ddd;

    display: flex;
    flex-direction: column;
    gap: 1em;

    box-shadow: 1px 1px 20px rgba(0,0,0,0.3);

    background-color: ${props => props.theme.white};

    section {
        background-color: ${props => props.theme.CinnamonBrown};
        color: ${props => props.theme.white};

        padding: 1.5em;
        border-radius: 13px 13px 0 0;
        font-size: 20px;
        margin-bottom: 1em;
    }

    button{
        background-color: ${props => props.theme.CinnamonBrown};
        color: ${props => props.theme.white};
        margin: 1em auto;

        border-radius: 13px;
        border: none;
        height: 50px;
        
        font-size: 18px;
        font-weight: bold;

        max-width: 500px;
        width: 90%;
        cursor: pointer;
    }
`

export const Label = styled.label`
    padding: 0 1em;
    font-size: 18px;

    input{
        display: block;
        width: 100%;
        height: 40px;
        border-radius: 7px;
        border: 1px solid ${props => props.theme.CinnamonBrown};

        padding: 0.5em;
        font-size: 18px;
        margin: 5px 0;
    }
`;