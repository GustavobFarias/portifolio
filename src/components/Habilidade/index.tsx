import html from '../assets/icons/html-5.png'
import css from '../assets/icons/css-3.png'
import javaScript from '../assets/icons/javascript.png'
import jquery from '../assets/icons/jquery.png'
import bootstrap from '../assets/icons/bootstrap.png'
import sass from '../assets/icons/sass.png'
import gulp from '../assets/icons/gulp.png'
import less from '../assets/icons/less.png'
import grunt from '../assets/icons/grunt.png'
import typeScript from '../assets/icons/typescript.png'
import vue from '../assets/icons/vuejs.svg'
import react from '../assets/icons/react-original.svg'
import redux from '../assets/icons/redux.svg'
import jest from '../assets/icons/jest.svg'
import git from '../assets/icons/git.png'
import gitHub from '../assets/icons/github.png'
import vscode from '../assets/icons/vscode.svg'
import figma from '../assets/icons/figma.svg'
import * as S from './styles'

function Habilidade() {
  return (
    <>
      <S.Habilidade>
        <S.Container>
          <S.Title>Habilidade</S.Title>
          <S.List>
            <S.Item>
              <img src={html} alt="Icon HTML" />
              <span>HTML</span>
            </S.Item>
            <S.Item>
              <img src={css} alt="Icon CSS" />
              <span>CSS</span>
            </S.Item>
            <S.Item>
              <img src={javaScript} alt="Icon JavaScript" />
              <span>JavaScript</span>
            </S.Item>
            <S.Item>
              <img src={jquery} alt="Icon Jquery" />
              <span>Jquery</span>
            </S.Item>
            <S.Item>
              <img src={sass} alt="Icon Sass" />
              <span>Sass</span>
            </S.Item>
            <S.Item>
              <img src={gulp} alt="Icon Gulp" />
              <span>Gulp</span>
            </S.Item>
            <S.Item>
              <img src={less} alt="Icon Less" />
              <span>Less</span>
            </S.Item>
            <S.Item>
              <img src={grunt} alt="Icon Grunt" />
              <span>Grunt</span>
            </S.Item>
            <S.Item>
              <img src={typeScript} alt="Icon TypeScript" />
              <span>TypeScript</span>
            </S.Item>
            <S.Item>
              <img src={vue} alt="Icon Vue" />
              <span>Vue</span>
            </S.Item>
            <S.Item>
              <img src={react} alt="Icon React" />
              <span>React</span>
            </S.Item>
            <S.Item>
              <img src={redux} alt="Icon Redux" />
              <span>Redux</span>
            </S.Item>
            <S.Item>
              <img src={jest} alt="Icon Jest" />
              <span>Jest</span>
            </S.Item>
            <S.Item>
              <img src={git} alt="Icon Git" />
              <span>Git</span>
            </S.Item>
            <S.Item>
              <img src={gitHub} alt="Icon GitHub" />
              <span>gitHub</span>
            </S.Item>
            <S.Item>
              <img src={vscode} alt="Icon VsCode" />
              <span>VsCode</span>
            </S.Item>
            <S.Item>
              <img src={figma} alt="Icon Figma" />
              <span>Figma</span>
            </S.Item>
          </S.List>
        </S.Container>
      </S.Habilidade>
    </>
  )
}

export default Habilidade
