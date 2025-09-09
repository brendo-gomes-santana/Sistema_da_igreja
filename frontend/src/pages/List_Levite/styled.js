import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    width: 100%;

    align-items: center;
    padding: 1em 0;

    h4,div{
        flex: 1
    }

    #container-types{
        display: flex;
        justify-content: flex-start;
        gap: 1em;
        flex-wrap: wrap;
        p{
            color: ${props => props.theme.CinnamonBrown};
            border: 1px solid ${props => props.theme.CinnamonBrown};

            padding: 0.5em;
            border-radius: 13px;

        }
    }

    button {
        background-color:  ${props => props.theme.CinnamonBrown};
        color: ${props => props.theme.white};
        font-weight: bold;
        border: none;
        padding: 1em 2em;
        border-radius: 13px;
    }
    
    &:not(:last-child){
        border-bottom: 1px solid ${props => props.theme.CinnamonBrown};
    }

    @media (max-width: 768px){
       flex-direction: column;
       gap: 1em;

        #container-types{
            align-items: center;
            justify-content: center;
        }
    }

`;