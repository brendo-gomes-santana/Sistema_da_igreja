import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cards = styled.section`
    display: flex;
    flex-direction: column;
    
    a{
        border-bottom: 1px solid ${props => props.theme.LightPeach};

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 2em 1em;
        color: ${props => props.theme.CoffeeBrown};
        transition: all 0.3s;
        &:last-child{
            border: none;
        }

        &:hover{
            background-color: ${props => props.theme.LightPeach};
        }
    }
`

export const LinkNewEvent = styled(Link)`
    align-self: flex-end;

    background-color: ${props => props.theme.CinnamonBrown};
    color: ${props => props.theme.white};
    padding: 1em;
    border-radius: 13px;
    margin-bottom: 1em;

    font-weight: bold;
`