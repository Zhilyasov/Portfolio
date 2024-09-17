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
	const [switchLocale, setSwitchLocale] = useState('false')
	const [currentLocale, setCurrentLocale] = useState(getInitialLocale())

	const handleChange = ({ target: { value } }) => {
		setCurrentLocale(value)
		setSwitchLocale('true')
		// сохраняем локацию в хранилище
		localStorage.setItem('locale', value)
	}

	function getInitialLocale() {
		// получаем сохраненные данные
		const savedLocale = localStorage.getItem('locale')
		let lang = LOCALES.ENGLISH
		const def_lang = navigator.language || navigator.userLanguage
		if (def_lang === 'ru-RU') {
			lang = LOCALES.RUSSIAN
		} else {
			lang = LOCALES.ENGLISH
		}
		return switchLocale === 'true' ? savedLocale : lang
	}

	return (
		<IntlProvider
			messages={messages[getInitialLocale()]}
			locale={getInitialLocale()}
			defaultLocale={LOCALES.ENGLISH}
		>
			<div>
				<Nav currentLocale={currentLocale} handleChange={handleChange} />
				<Hero />
				<About />
				<Projects />
				<Contact />
				<Footer currentLocale={currentLocale} handleChange={handleChange} />
			</div>
		</IntlProvider>
	)
}

export default App
