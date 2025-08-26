import styled from "styled-components";

export const Cards = styled.article`

    margin: 2em 0;

    p{
        font-size: 15px;
        margin: 2em 0;
    }

    hr{
        margin-bottom: 1em;
    }

    ul {

        list-style-type: none;

        li{
            margin: 0.2em 0;

            strong{
                font-size: 20px;
                font-style: italic;
            }
        }
    }
`

export const List = styled.li`

    width: 100%;
    display: flex;
    align-items: center;

    justify-content: space-between;

    
    a{
        color: ${props => props.theme.black};
    }

    div{
        display: flex;
        gap: 1em;
        img{
            width: 50px;
            height: 50px;

            box-shadow: 5px 5px 10px rgba(0,0,0,0.5);

            border-radius: 13px;
        }
    }

    transition: all 0.2s ease;

    &:hover{
        background-color: ${props => props.theme.LightPeach};
        padding: 0.3em 0.5em;
        border-radius: 13px;
    }

`