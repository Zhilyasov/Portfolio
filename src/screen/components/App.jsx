import '../styles/App.css'
import Nav from './modules/html/Nav'
import MobileNav from './modules/html/MobileNav'
import Hero from './modules/html/Hero'
import About from './modules/html/About'
import Projects from './modules/html/Projects'

function App() {
  return (
    <>
      <Nav/>
      <MobileNav />
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;
