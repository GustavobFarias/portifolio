import styled from 'styled-components'
import { colors } from '../../styles'

export const Habilidade = styled.section`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes habilidades {
    from {
      opacity: 0;
      translate: -50vw 0;
    }

    to {
      opacity: 1;
      translate: 0 0;
    }
  }
`

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin-top: 13rem;
`

export const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  color: ${colors.corSecundaria};
  text-align: center;
  margin: 62px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  border: 1px solid ${colors.corSecundaria};
  padding: 18px 0;
  border-radius: 8px;
`

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    height: 56px;
    transition: all ease-in-out 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }

  span {
    display: block;
    color: ${colors.corDoTexto};
    font-family: 'Blinker', sans-serif;
    margin-bottom: 18px;
  }
`
