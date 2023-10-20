import {BrowserRouter} from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects'
import MinProjects from './components/MinProjects'
import Skills from './components/Skills' 
import Contact from './components/Contact'; 

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Home />
      <Projects />
      <MinProjects />
      <Skills />
      <Contact />
    </BrowserRouter>
  )
}

export default App;