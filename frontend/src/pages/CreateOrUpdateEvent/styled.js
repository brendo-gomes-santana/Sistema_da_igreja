import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    max-width: 1440px;
    margin: 2em auto;

    display: flex;
    flex-direction: column;
    gap: 1em;

    input:not([type="checkbox"]), 
    select, 
    textarea{
        width: 100%;
        height: 50px;
        padding: 1em;
        font-size: 15px;
    }

    textarea{
        height: 20vh;
        resize: none;
    }

    #btn-submit {
        height: 50px;
        margin: 1em 0;

        background-color: ${props => props.theme.CinnamonBrown};
        color: ${props => props.theme.white};
        font-weight: bold;

        border: none;
        cursor: pointer;
    }

`

export const ContainerAddMusic = styled.article`
    
    display: flex;

    #div-container-music-seach{
        flex: 1;
        padding: 0.5em;
        height: 50vh;
        overflow-y: auto;
        

        #divSearch{
            display: flex;
            gap: 0.5em;
            margin-bottom: 1em;
            button{
                width: 100%;
                background-color: ${props => props.theme.CinnamonBrown};
                color: ${props => props.theme.white};
                font-weight: bold;
                font-size: 15px;
                border: none;
                cursor: pointer;
            }
        }


        div:not(:first-child){
            display: flex;
            align-items: center;
                
            margin: 1em 0;
            width: 100%;
            img{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                margin-right: 0.5em;
            }
            a{
                color: ${props => props.theme.black};
                width: 100%;
            }

            #containerbtn{
                display: flex;
                justify-content: end;
                button{
                    padding: 0.5em 1em;
                    border-radius: 13px;
                    background-color: ${props => props.theme.CinnamonBrown};
                    color: ${props => props.theme.white};
                    font-weight: bold;
                    font-size: 15px;
                    border: none;
                    margin-left: 1em;
                }
            }
        }
        
    }

    #div-container-music{
        flex: 1;
    }

`
export const SelectMusicContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    div{
        flex: 1;
        margin: 1em;

        display: flex;
        align-items: center;
        gap: 1em;
        img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }

        &:last-child{
            justify-content: flex-end;
            button{
                background-color: ${props => props.theme.CinnamonBrown};
                color: ${props => props.theme.white};
                border: none;
                border-radius: 13px;
                padding: 0.5em 2em;
                font-size: 15px;
                font-weight: bold;
            }
        }
    }
`

export const ContainerAddLevites = styled.article`
    #search-levite{
        display: flex;
        gap: 1em;

        select, button{
            flex: 1;
        }

        button{
            background-color: ${props => props.theme.CinnamonBrown};
            color: ${props => props.theme.white};
            font-weight: bold;
            border: none;
            cursor: pointer;
        }

    }

    #list-levites{
        margin: 1em 0;
        display: flex;
        gap: 1em;
        flex-direction: column;

        div{
            display: flex;
            justify-content: space-between;
            align-items: center;

            div{
                display: flex;
                align-items: center;
                gap: 0.5em;
            }

            button{
                background-color: ${props => props.theme.CinnamonBrown};
                color: ${props => props.theme.white};
                font-weight: bold;
                border: none;
                cursor: pointer;
                padding: 1em 2em;
                border-radius: 13px;
            }
        }
    }
`