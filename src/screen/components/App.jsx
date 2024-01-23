import { useState } from 'react'
import { IntlProvider } from 'react-intl'
import { LOCALES } from '../../i18n/locales'
import { messages } from '../../i18n/messages'
import '../styles/App.css'
import About from './modules/html/About'
import Contact from './modules/html/Contact'
import Footer from './modules/html/Footer'
import Hero from './modules/html/Hero'
import Nav from './modules/html/Nav'
import Projects from './modules/html/Projects'

function App() {
	const [currentLocale, setCurrentLocale] = useState(getInitialLocale())

	const def_lang = navigator.language || navigator.userLanguage
	let lang = LOCALES.ENGLISH
	if (def_lang === 'ru') {
		lang = LOCALES.RUSSIAN
	} else {
		lang = LOCALES.ENGLISH
	}

	const handleChange = ({ target: { value } }) => {
		setCurrentLocale(value)
		// сохраняем локацию в хранилище
		localStorage.setItem('locale', value)
	}

	function getInitialLocale() {
		// получаем сохраненные данные
		const savedLocale = localStorage.getItem('locale')
		return savedLocale || lang
	}

	return (
		<IntlProvider
			messages={messages[getInitialLocale()]}
			locale={getInitialLocale()}
			defaultLocale={lang}
		>
			<div>
				<Nav currentLocale={currentLocale} handleChange={handleChange} />
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
