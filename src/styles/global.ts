import { createGlobalStyle, css } from 'styled-components'

export const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// a font padrão é 16px font-size: 16px (Desktop)
html {
  @media(max-width: 1080px) {
   font-size: 93.75%; // 15px
  }
  @media(max-width: 720px){
   font-size: 87.5%; // 14px
  }
}


body, input, textarea,  button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1,h2,h3,h4,h5,h6, strong {
  font-weight: 600;
}

${({ theme }) => css`
  body {
    background: ${theme.colors.background};
    /* -webkit-font-smoothing: antialiased; */
  }
`}


button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
 
 `
