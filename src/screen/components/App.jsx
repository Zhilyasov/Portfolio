import '../styles/App.css'
import About from './modules/html/About'
import Contact from './modules/html/Contact'
import Footer from './modules/html/Footer'
import Hero from './modules/html/Hero'
import Nav from './modules/html/Nav'
import Projects from './modules/html/Projects'

function App() {
	return (
		<>
			<Nav />
			<Hero />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</>
	)
}

export default App
