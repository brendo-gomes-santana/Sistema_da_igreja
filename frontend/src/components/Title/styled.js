import styled from "styled-components";

export const Container = styled.article`
    width: 100%;

    display: flex;
    align-items: center;
    
    flex-wrap: wrap;

    gap: 1em;
    
    h1{
        font-size: 20px;
        color: ${props => props.theme.CinnamonBrown};
    }
    a{
        background-color: ${props => props.theme.CinnamonBrown};
        color: ${props => props.theme.white};
        padding: 1em 2em;
        border-radius: 13px;
        font-weight: bold;
    }

    p{
        margin-left: auto;
    }

    @media (max-width: 688px){
        flex-direction: column;
        align-items: center;

        a{
            width: 50%;
        }
    }
`