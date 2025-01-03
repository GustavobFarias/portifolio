import { useState } from 'react'
import  { ThemeProvider } from 'styled-components'

import Projetos from './contsainers/projetos'
import Sidebar from './contsainers/Sidebar'
import Sobre from './contsainers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }
    return (
      <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
        <EstiloGlobal />
        <Container>
          <Sidebar trocaTema={trocaTema} />
          <main>
            <Sobre />
            <Projetos />
          </main>
        </Container>
      </ThemeProvider>
    )
}

export default App
