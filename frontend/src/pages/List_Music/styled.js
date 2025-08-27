import styled from "styled-components";

export const Form = styled.form`

    width: 100%;
    max-width: 1080px;
    margin: 1em auto;
    display: flex;
    gap: 0.5em;
    
    justify-content: center;

    input, select, button{
        height: 40px;
        width: 400px;
        padding: 0 0.5em;
        font-size: 15px;
        border-radius: 13px;
        
        border: 1px solid ${props => props.theme.CinnamonBrown};
    }

    button{
        width: 100px;
        border: none;
        background-color: ${props => props.theme.CinnamonBrown};
        color: ${props => props.theme.white};
        font-weight: bold;
        cursor: pointer;
    }
`;
export const Cards = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;

`;
export const Card = styled.div`

    display: flex;
    align-items: center;
    transition: all 0.3s ease;

    padding: 1em 0;

    figure{
        flex: 1;
        display: flex;
        align-items: center;
        gap: 1em;

        cursor: pointer;

        img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
    div{
        flex: 1;
        text-align: end;
        
        img{
            width: 50px;
            height: 50px;
            border-radius: 13px;
            margin: 0 0.5em;
        }
    }

    &:not(:last-child){
        border-bottom: 1px solid ${props => props.theme.LightPeach};
    }

    &:hover{
        background-color: ${props => props.theme.LightPeach};
        transform: scale(1.01);
        box-shadow: 5px 5px 20px rgba(0,0,0,0.3);
        padding: 1em;
    }
`;