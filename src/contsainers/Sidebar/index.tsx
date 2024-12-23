import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/paragrafo'
import Titulo from '../../components/Titulo/index'
import { Descricao, BotaoTema, SidebarContainer} from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Gustavo Farias</Titulo>
      <Paragrafo tipo='secundario' fontSize={16}>GustavobFarias</Paragrafo>
      <Descricao tipo='principal' fontSize={12}>Engenheiro Front-end</Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
