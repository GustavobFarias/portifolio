import Foto from '../../components/assets/images/foto-gustavo.jpg'
import * as S from './styles'

function Sobre() {
  return (
    <>
      <S.Sobre>
        <div className="container">
          <S.Intro>
            <S.Title>
              <h1 className="dizOla">Olá, eu sou o</h1>
              <span className="nome">Gustavo Farias</span>
              <p className="front">Desenvolvedor Front-end</p>
              <S.Button as="a" href='/curriculo.pdf' download>Download CV</S.Button>
            </S.Title>
            <S.Logo>
              <a
                href="https://github.com/GustavobFarias"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Foto} alt="" />
              </a>
            </S.Logo>
          </S.Intro>
          <div>
            <S.TitleSobre>Sobre mim</S.TitleSobre>
            <S.Text>
              Olá! Meu nome é Gustavo Farias, tenho 19 anos e estou no primeiro
              ano de Engenharia de Software na UniCesumar. Além disso, estou
              cursando Full Stack Python na EBAC, onde já concluí a parte de
              front-end. Atualmente, busco oportunidades no mercado para
              praticar minhas habilidades e aprofundar meus conhecimentos.
            </S.Text>
          </div>
        </div>
      </S.Sobre>
    </>
  )
}

export default Sobre
