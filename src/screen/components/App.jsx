import { IntlProvider } from 'react-intl'
import '../styles/App.css'
import About from './modules/html/About'
import Contact from './modules/html/Contact'
import Footer from './modules/html/Footer'
import Hero from './modules/html/Hero'
import Nav from './modules/html/Nav'
import Projects from './modules/html/Projects'
import { LOCALES } from '../../i18n/locales'
import { messages } from '../../i18n/messages'
import { useState } from 'react'


function App() {
	const locale = LOCALES.ENGLISH
	const [currentLocale, setCurrentLocale] = useState(locale)
	
	const handleChange = ({ target: { value } }) => {
    setCurrentLocale(value)
  }

	return (
		<IntlProvider messages={{}} locale='en' defaultLocale='en'>
			<div>
				<Nav currentLocale={currentLocale} handleChange={handleChange}/>
				<Hero />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</IntlProvider>
	)
}

export default App
