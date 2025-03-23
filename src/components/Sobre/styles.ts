import styled from 'styled-components'
import { colors } from '../../styles'

export const Sobre = styled.div`
  height: 90vh;
  animation: appear 1s;

  @keyframes appear {
    from {
      opacity: 0;
      translate: -2vw 0;
    }

    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  .container {
    height: 80vh;
  }
`

export const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 2rem;
`

export const Title = styled.div`
  color: ${colors.corDoTexto};
  font-family: 'DM Sans', sans-serif;
  font-size: 2rem;

  .nome {
    color: ${colors.corSecundaria};
    font-size: 2.7rem;
  }

  .front {
    font-size: 1.3rem;
    color: ${colors.corDofront};
    margin-bottom: 16px;
  }
`

export const Logo = styled.div`
  margin-right: 32px;

  img {
    height: 300px;
    width: 300px;
    border-radius: 50%;
    border: 2px solid #000;
    box-shadow: 1px 2px 30px ${colors.corSecundaria};
    transition: all ease 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const Button = styled.a`
  text-decoration: none;
  padding: 8px 18px;
  background-color: ${colors.corSecundaria};
  color: ${colors.corDoDownload};
  font-family: 'Blinker', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 18px;
  transition: all ease-in-out 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${colors.corSecundariaEscura};
    color: ${colors.corDoTexto};
  }
`

export const TitleSobre = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 1.8rem;
  color: ${colors.corSecundaria};
  text-align: center;
  margin-bottom: 16px;
`

export const Text = styled.p`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: ${colors.corDoTexto};
`
