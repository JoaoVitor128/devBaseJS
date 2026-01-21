import './About.css'

import beginner from "../assets/beginner.png"

const About = () => {
  return (
    <div className='about'>
      <img src={beginner} alt="" />
      <div className="text">
        <div>
          <h1>🎯Objetivo🎯</h1>
          <h2>
            O <span>Beginner Programming</span> é um projeto criado para ajudar iniciantes na programação, promovendo aprendizado colaborativo e troca de conhecimento.
            O que começou como um simples grupo de conversa evoluiu para uma comunidade, onde pessoas com diferentes níveis de experiência se ajudam a crescer.
            Embora ainda não sejamos uma comunidade grande, estamos em constante crescimento e desenvolvimento.
          </h2>
        </div>
        <div>
          <h1>📜História📜</h1>
          <h2>
            O <span>Beginner Programming</span> surgiu com a ideia de criar um espaço onde iniciantes em programação pudessem aprender, tirar dúvidas e evoluir juntos.
            O que começou como um simples grupo de conversa cresceu e se transformou em uma comunidade focada em aprendizado,
            colaboração e desenvolvimento técnico.
          </h2>
        </div>

      </div>
    </div>
  )
}

export default About