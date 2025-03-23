import * as S from './styles'

function Header() {
  return (
    <S.Header>
      <S.Container className="container">
        <S.Title>Portifólio</S.Title>
        <nav>
          <ul>
            <li id="item">
              <S.Links id="links" href="#sobre">
                Sobre
              </S.Links>
            </li>
            <li id="item">
              <S.Links id="links" href="#habilidade">
                Habilidade
              </S.Links>
            </li>
            <li id="item">
              <S.Links id="links" href="#projetos">
                Projetos
              </S.Links>
            </li>
            <li id="item">
              <S.Links id="links" href="#">
                Contato
              </S.Links>
            </li>
          </ul>
        </nav>
      </S.Container>
    </S.Header>
  )
}

export default Header
