import { createGlobalStyle } from 'styled-components'

export const colors = {
  corPrincipal: '#022A26',
  corDoTexto: '#fff',
  corSecundaria: '#17EDD4',
  corSecundariaEscura: '#0e9585',
  corDofront: '#ccc',
  corDoDownload: '#000'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background-color: ${colors.corPrincipal};
  }

  .container {
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
  }
`
