import Habilidade from './components/Habilidade'
import Header from './components/Header/Header'
import Projetos from './components/Projetos'
import Sobre from './components/Sobre'
import { GlobalCss } from './styles'

function App() {
  return (
    <div>
      <GlobalCss />
      <div className="container">
        <Header />
        <Sobre />
        <Habilidade />
        <Projetos />
      </div>
    </div>
  )
}

export default App
