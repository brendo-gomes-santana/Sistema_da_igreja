import styled from "styled-components";

export const ContainerInfor = styled.article`
    margin: 3em auto;

    width: 100%;
    max-width: 1440px;

    p{
        margin-bottom: 1em;
        text-align: center;
        font-size: 18px;
        color: #9f9f9fff;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1080px;

    margin: 1em auto;

    gap: 1em;

    input, select, textarea, button{
        height: 50px;
        padding: 0.5em;
        font-size: 15px;
        border-radius: 7px;
        border: 1px solid ${props => props.theme.back};
    }

    textarea{
        height: 500px;
        resize: none;
    }

    button{
        cursor: pointer;
        border: none;
        background-color: ${props => props.theme.CinnamonBrown};
        color: ${props => props.theme.white};
        font-weight: bold;
    }

`

export const SearchYoutube = styled.button`
    width: 100px;
    height: 100px;
    border-radius: 13px;
    border: none;
    cursor: pointer;

    margin: 2em auto; 
    display: block; 
        
    img{
        width: 100%;
        height: 100%;
        border-radius: 13px;
        border: none;
    }

    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.05);
        box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
    }
`;

export const ListMusicsYoutube = styled.article`
    display: flex;
    flex-direction: column;
`

export const CardMusic = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2em 0;

    &:not(:last-child){
        border-bottom: 1px solid ${props => props.theme.CinnamonBrown};
    }

    figure{
        display: flex;
        align-items: center;
        gap: 1em;

        img{
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
    }

    div{

        display: flex;
        align-items: center;
        gap: 1em;
        img{
            width: 50px;
            height: 50px;
        }

        button{
        padding: 1em 2em;
        border: none;
        background-color: ${props => props.theme.CinnamonBrown};
        color: ${props => props.theme.white};
        font-weight: bold;
        border-radius: 13px;
        cursor: pointer;
    }
    }
`