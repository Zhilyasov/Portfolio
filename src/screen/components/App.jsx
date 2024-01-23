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
	const [currentLocale, setCurrentLocale] = useState(getInitialLocale())

	const handleChange = ({ target: { value } }) => {
  setCurrentLocale(value)
  // сохраняем локацию в хранилище
  localStorage.setItem('locale', value)
}

	function getInitialLocale() {
		// получаем сохраненные данные
		const savedLocale = localStorage.getItem('locale')
		return savedLocale || LOCALES.ENGLISH
	}

	// let lang = navigator.language || navigator.userLanguage
	console.log(navigator.language)
	console.log(navigator.userLanguage)
	return (
		<IntlProvider
      messages={messages[getInitialLocale()]}
      locale={getInitialLocale()}
      defaultLocale={LOCALES.ENGLISH}
    >
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
