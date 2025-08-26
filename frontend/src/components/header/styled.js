import styled from "styled-components";

export const Container = styled.header`

    background-color: ${props => props.theme.CinnamonBrown};
    color: ${props => props.theme.white};
    width: 100%;
    height: 10vh;


    display: flex;
    align-items: center;

    gap: 1em;

    padding: 0 1em 0 ${props => props.open ? '13em' : '1em'}; //13em vai ser aberto o nav
    transition: all 0.3s ease;

    button{
        background: transparent;
        border: none;
        color: ${props => props.theme.white};
        font-size: 20px;



        display: flex;
        align-items: center;
        gap: 0.1em;
        cursor: pointer;
    }

`

export const ContainerLink = styled.nav`

    background-color: ${props => props.theme.CinnamonBrown};

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;

    padding: 2em 0;

    display: flex;
    flex-direction: column;
    
    width: 200px;

    transition: all 0.3s;
    transform: ${
        props => props.open ? 'translateX(0em)' : 'translateX(-15em)'
    };


    a{
        color: ${props => props.theme.white};
        font-size: 20px;
        padding: 1em 0.5em;

        transition: all 0.3s;

        &:hover{
            background-color: ${props => props.theme.CoffeeBrown};

        }
    }

    button {
        position: absolute;
        bottom: 10px;
        padding: 0.5em;

    }
`;