import styled from "styled-components";

export const ContainerMusic = styled.article`
    display: flex;
    flex-wrap: wrap-reverse;
    gap: 1em;

    margin: 3em 0;
    div{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 1em;

        iframe{
            width: 100%;     
            min-height: 400px;
            max-width: 1080px;
            height: 50vh;
        }

        img {
            width: 100px;
            height: 100px;
        }
    }
    p{
        flex: 1;
        white-space: pre-line; 
        font-size: 25px;
        margin-bottom: 2em;
    }

    @media (max-width: 1108px){
        flex-direction: column-reverse;
    }
`
export const ContainerLinks = styled.div`
    
    width: 100%;
    margin: 1em 0;
    h2{
        margin: 0.5em 0;
    }
    span{
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        a{
            padding: 0.5em 1em;
            border: 1px solid ${props => props.theme.black};
            border-radius: 13px;
            color: ${props => props.theme.black};
        }
    }

`