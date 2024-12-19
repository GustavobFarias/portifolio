import Sidebar from './contsainers/Sidebar'
import Sobre from './contsainers/Sobre'
import Projetos from './contsainers/projetos'
import EstiloGlobal from './styles'
import { Container } from './styles'

function App() {
    return (
      <>
        <EstiloGlobal />
        <Container>
          <Sidebar />
          <main>
            <Sobre />
            <Projetos />
          </main>
        </Container>
      </>
    )
}

export default App
