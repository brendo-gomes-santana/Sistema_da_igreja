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

export const ListMusics = styled.article`
    
    display: flex;
    flex-direction: column;
    gap: 1em;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
        transition: all 0.2s;

        a{
            color: ${props => props.theme.black};
        }
        span{
            display: flex;
            align-items: center;
            gap: 0.5em;

            button{
                border: none;
                color: ${props => props.theme.white};
                background-color: ${props => props.theme.CinnamonBrown};
                padding: 1em 2em;
                border-radius: 13px;
            }
        }

        &:hover{
            background-color:  ${props => props.theme.LightPeach};

        }
    }
`;