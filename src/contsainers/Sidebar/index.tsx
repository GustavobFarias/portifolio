import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/paragrafo'
import Titulo from '../../components/Titulo/index'

import { Descricao } from './styles'
import { BotaoTema } from './styles'
import { SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Gustavo Farias</Titulo>
      <Paragrafo tipo='secundario' fontSize={16}>GustavobFarias</Paragrafo>
      <Descricao tipo='principal' fontSize={12}>Engenheiro Front-end</Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
