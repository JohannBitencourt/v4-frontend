import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }


  body {
    background: ${props => props.theme.colors.background};
    transition: all 0.2s;
    color: ${props => props.theme.colors.cardDescription};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Open Sans';
    letter-spacing: 0.5px;
    padding: 0;
    border: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
    &:hover {
    filter: brightness(90%);
  }
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }

`
