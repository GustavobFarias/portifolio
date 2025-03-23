import boruto from '../assets/images/boruto.png'
import html from '../assets/icons/html-5.png'
import css from '../assets/icons/css-3.png'

import * as S from './styles'

function Projetos() {
  return (
    <>
      <S.Projetos>
        <div>
          <S.Title>Projetos</S.Title>
          <div>
            <S.Table>
              <tr>
                <td>
                  <S.ContainerProjeto>
                    <S.FotoProjeto src={boruto} alt="" />
                    <div>
                      <S.Text>
                        boruto naruto next generations
                        <div>
                          <img src={html} alt="" />
                          <img src={css} alt="" />
                        </div>
                      </S.Text>
                    </div>
                  </S.ContainerProjeto>
                </td>
              </tr>
            </S.Table>
          </div>
        </div>
      </S.Projetos>
    </>
  )
}

export default Projetos
