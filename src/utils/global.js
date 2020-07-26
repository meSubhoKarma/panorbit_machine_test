import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
      outline: none;
      box-sizing: inherit;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    html {
      font-size: 62.5%; //1rem = 10px
      box-sizing: border-box;
      line-height: 1.15;
      --color-primary: ${(props) => props.theme.colors.primary};
      --color-secondary: ${(props) => props.theme.colors.secondary};
      --color-advance: ${(props) => props.theme.colors.advance};
      --color-strong: ${(props) => props.theme.colors.strong};
      --color-mild: ${(props) => props.theme.colors.mild};
      --color-light: ${(props) => props.theme.colors.light};
      --lightGrey: rgba(240,240,240,1);
      --shadow-color-light: rgba(255, 255, 255, 0.8);
      --shadow-color: rgba(45, 45, 45, 0.12);
      --border-color: linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(210,210,210,1) 50%, rgba(240,240,240,1) 100%);
      --shadow-color-dark: rgba(45, 45, 45, 0.2);
      --speed: 500ms;
      --lightWhite: rgba(255, 255, 255, 0.4);
      --subWhite: rgba(255, 255, 255, 0.6);
      --white: rgba(255, 255, 255, 1);

      @media ${(props) => props.theme.mediaQueries.largest} {
          font-size: 60%;
      }

      @media ${(props) => props.theme.mediaQueries.large} {
          font-size: 57.5%;
      }

      @media ${(props) => props.theme.mediaQueries.small} {
          font-size: 55%;
      }
    }
    body {
      background-color: #fff;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: visible;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }
    form,
    input,
    textarea,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    button {
      outline: none;
      cursor: pointer;
    }
`
