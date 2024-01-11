import '../styles/App.css'
import Nav from './modules/html/Nav'
import Hero from './modules/html/Hero'
import About from './modules/html/About'
import Projects from './modules/html/Projects'
import Contact from './modules/html/Contact'
import Footer from './modules/html/Footer'

function App() {
  return (
    <>
      <Nav/>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
