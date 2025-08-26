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