import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px 0;
  background-color: ${colors.corPrincipal};
  border-bottom: 1px solid ${colors.corSecundaria};
  z-index: 1000;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    display: inline;
    padding: 0 8px;
  }
`

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: ${colors.corSecundaria};
  font-size: 1.8rem;
`

export const Links = styled.a`
  text-decoration: none;
  font-size: 1.4rem;
  color: ${colors.corSecundaria};
  font-family: 'Blinker', sans-serif;
  position: relative;

  &::after {
    content: ' ';
    width: 0%;
    height: 2px;
    background-color: ${colors.corSecundaria};
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all ease-in-out 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`
