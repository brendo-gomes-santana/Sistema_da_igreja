import styled from "styled-components";

export const CreateLink = styled.form`
    margin: 2em 0;
    width: 100%;
    display: flex;
    
    flex-direction: column;
    h2{
        text-align: center;

    }
    hr{
        margin-bottom: 1em;
    }
    div{
        display: flex;
        
        gap: 1em;
        margin-bottom: 1em;
        input, select{
            flex: 1;
            height: 50px;
            padding: 0 0.5em;
            font-size: 15px;
        }
        button{
            width: 50px;
            border: none;
            background-color: ${props => props.theme.CinnamonBrown};
            cursor: pointer;
        
            svg{
                color: ${props => props.theme.white};
            }
        }
    }
    #container-links{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        span{
            border: 1px solid red;
            display: flex;
            align-items: center;
            gap: 1em;
            padding: 0.5em 1em;
            border-radius: 13px;
            a{
                color: red;
                font-weight: bold;
            }
            button{
                width: 50px;
                height: 50px;
                border-radius: 50%;

                background-color: red;
                color: ${props => props.theme.white};
               
            }
        }
    }

`