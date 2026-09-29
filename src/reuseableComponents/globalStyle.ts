import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

a{
    text-decoration: none;
}

ul{
    list-style-type: none;

}

body {
    background-color: ${({ theme }) => theme.colors.primary1};
    background-image: radial-gradient(
        60rem 40rem at 85% -10%,
        rgba(203, 159, 85, 0.08),
        transparent 60%
      ),
      radial-gradient(
        50rem 30rem at -10% 110%,
        rgba(203, 159, 85, 0.05),
        transparent 60%
      );
    background-attachment: fixed;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.secondary3};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.secondary1};
}

::selection {
    background: ${({ theme }) => theme.colors.tertiary2};
    color: ${({ theme }) => theme.colors.primary1};
}

::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
}

::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primary1};
}

::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.tertiary1};
    border-radius: 1rem;
}

`;
