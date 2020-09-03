import React from 'react';
import Hero from './components/Hero'
import About from './components/About'
import GitStats from './components/GitStats';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='divPai'>
      <Hero />
      <About />
      <GitStats />
      <Footer />
    </div>
  )
}

export default App;
