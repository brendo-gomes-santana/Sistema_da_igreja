import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  flex-direction: column;
    p{
        color: ${props => props.theme.CinnamonBrown}
    }
  #loader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 6rem;
    height: 6rem;

    margin: 1rem 0;
  }

  #loader::before,
  #loader::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    filter: drop-shadow(0 0 1rem rgba(94, 52, 32, 0.75));
    animation: pulsOut 1.8s ease-in-out infinite;
  }

  #loader::before {
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 1rem ${props => props.theme.CinnamonBrown};
    animation-name: pulsIn;
  }

  #loader::after {
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    box-shadow: 0 0 0 0 ${props => props.theme.CinnamonBrown};
  }

  @keyframes pulsIn {
    0% {
      box-shadow: inset 0 0 0 1rem ${props => props.theme.CinnamonBrown};
      opacity: 1;
    }
    50%,
    100% {
      box-shadow: inset 0 0 0 0 ${props => props.theme.CinnamonBrown};
      opacity: 0;
    }
  }

  @keyframes pulsOut {
    0%,
    50% {
      box-shadow: 0 0 0 0 ${props => props.theme.CinnamonBrown};
      opacity: 0;
    }
    100% {
      box-shadow: 0 0 0 1rem ${props => props.theme.CinnamonBrown};
      opacity: 1;
    }
  }
`;
