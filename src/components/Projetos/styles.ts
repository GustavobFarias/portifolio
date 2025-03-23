import styled from 'styled-components'
import { colors } from '../../styles'

export const Projetos = styled.section`
  height: 90vh;
`

export const Title = styled.h2`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: ${colors.corSecundaria};
  font-size: 1.8rem;
  margin: 62px 0;
`

export const Table = styled.tr`
  tr {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  td {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
  }
`

export const Text = styled.p`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: ${colors.corDoTexto};
  z-index: 1000;
  transition: opacity 0.5s ease;
  cursor: pointer;

  div {
    display: block;
    img {
      height: 26px;
      margin-top: 5px;
    }
  }
`

export const ContainerProjeto = styled.div`
  position: relative;
  display: inline-block;
  width: 450px;
  height: 250px;
  overflow: hidden;

  &:hover ${Text} {
    opacity: 0;
  }
`

export const FotoProjeto = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  filter: brightness(40%);
  transition: all ease 0.5s;
  cursor: pointer;

  ${ContainerProjeto}:hover & {
    transform: scale(1.1);
    filter: brightness(100%);
  }
`
