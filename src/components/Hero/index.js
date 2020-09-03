import React from 'react'
import './styless.css'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'


const Hero = () => {
  return (
    <div id='containerHero'>
      <div id='hero1'>
        <h1 id='myname'>Olá, sou Lucas Alves</h1>
        <h2>Front-end Developer</h2>
        <div id='contactDiv'>
          <h1 id='contact'>Contate-me</h1>
          <p id='linksP'>
            <a href='https://www.linkedin.com/in/lucas-alves-afonso-6a799a1b2/'><FaLinkedin /></a>
            <a href='https://github.com/devlucasalaf'><FaGithub /></a>
            <a href='https://www.instagram.com/lucasalaf1/?hl=pt-br'><FaInstagram /></a>
          </p>
          <p id='emailP'>ou envie um e-mail: devlucasalaf@gmail.com</p>
        </div>
      </div>
      <div id='heroImg'>
        <img id='perfilImg' src='perfil.png' alt='imagem perfil'></img>
      </div>
    </div >
  )
}

export default Hero