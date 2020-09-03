import React from 'react'
import './styless.css'

const About = () => {
  return (
    <div id='containerAbout'>
      <div id='aboutMe'>
        <p>Sou entusiasta das tecnologias relacionadas ao Javascript. Desenvolvedor especializado em front-end, focado em entregar aplicações dinâmicas e sofisticadas,
        fornecendo ao cliente uma excelente experiência de usuário. Domino as tecnologias do ReactJS, NodeJS e Javascript.
        </p>
      </div>
      <h1 id='formationH1'>Formação</h1>
      <div id='formation'>
        <div className='grad' id='graduation1'>
          <h1>Graduação</h1>
          <h2>Engenharia de Produção</h2>
          <h3>UCAM - Universidade Cândido Mendes</h3>
        </div>
        <div className='grad' id='graduation2'>
          <h1>Curso</h1>
          <h2>Fullstack Master</h2>
          <h3>Devpleno</h3>
        </div>
      </div>
    </div>
  )
}

export default About