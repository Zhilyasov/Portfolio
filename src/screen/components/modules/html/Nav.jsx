import { IconMenu2, IconX } from '@tabler/icons-react'
import { useState } from 'react'
import '../../../styles/Nav.css'
import { LOCALES } from '../../../../i18n/locales'

const Nav = ({ currentLocale, handleChange }) => {
	const [hamburger, setHamburger] = useState(false)

	const hamburgerMenu = () => {
		setHamburger(!hamburger)
	}

	const pageUp = () => {
		window.scrollTo({ top: (0, 0), behavior: 'smooth' })
	}

	const navlinks = [
		{
			name: 'Home',
			link: '#home',
		},
		{
			name: 'About',
			link: '#about',
		},
		{
			name: 'Projects',
			link: '#projects',
		},
		{
			name: 'Contact',
			link: '#contact',
		},
	]

	const languages = [
		{ name: 'English', code: LOCALES.ENGLISH },
		{ name: 'Русский', code: LOCALES.RUSSIAN }
	]

	return (
		<>
			<nav>
				<h3 onClick={pageUp} className='logo'>
					Zhilyasov.dev
				</h3>
				<ul>
					{navlinks.map(item => (
						<li key={item.name}>
							<a href={item.link}>{item.name}</a>
						</li>
					))}
					<li onClick={() => hamburgerMenu()}>
						<IconMenu2 className='mobile-menu' width={30} height={30} />
					</li>
				</ul>
				<div className='switcher'>
					{/* Выпадающий список для выбора языка */}
					<select onChange={handleChange} value={currentLocale}>
						{languages.map(({ name, code }) => (
							<option key={code} value={code}>
								{name}
							</option>
						))}
					</select>
				</div>
			</nav>

			{/* mobile nav */}
			<div className={`mobile-nav ${hamburger ? 'open-menu' : 'closed-menu'}`}>
				<span onClick={() => hamburgerMenu()}>
					<IconX width={30} height={30} />
				</span>

				<ul>
					{navlinks.map(item => (
						<li key={item.name} onClick={() => hamburgerMenu()}>
							<a href={item.link}>{item.name}</a>
						</li>
					))}
				</ul>

				<div className='switcherM'>
					{/* Выпадающий список для выбора языка */}
					<select onChange={handleChange} value={currentLocale}>
						{languages.map(({ name, code }) => (
							<option key={code} value={code}>
								{name}
							</option>
						))}
					</select>
				</div>

			</div>
		</>
	)
}

export default Nav
