import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/paragrafo"
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quia reprehenderit corporis, inventore fugiat dolore deleniti sit accusantium! Autem libero dolorum sequi, qui ex in? Nihil totam similique nemo excepturi.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=GustavobFarias&theme=radical&hide_border=true&include_all_commits=false&count_private=false" alt="" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=GustavobFarias&theme=radical&hide_border=true&include_all_commits=false&count_private=false&layout=compact" alt="" />
    </GithubSecao>
  </section>
)

export default Sobre
