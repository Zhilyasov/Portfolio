import { IconBrandGithub, IconBrandTelegram } from '@tabler/icons-react'
import { FormattedMessage } from 'react-intl'
import '../../../styles/Footer.css'
import { LOCALES } from '../../../../i18n/locales'

function Footer({ currentLocale, handleChange }) {
	const languages = [
		{ name: 'English', code: LOCALES.ENGLISH },
		{ name: 'Русский', code: LOCALES.RUSSIAN },
	]

	return (
		<footer>
			<div className='container'>
				<div className='footerc'>
					<h3>
						<FormattedMessage id='footer1' />
						{new Date().getFullYear()}
						<FormattedMessage id='footer2' />
					</h3>
					<select onChange={handleChange} value={currentLocale}>
						{languages.map(({ name, code }) => (
							<option key={code} value={code}>
								{name}
							</option>
						))}
					</select>
					<div className='footerc__socials'>
						<a
							aria-label='telegram'
							target='_blank'
							rel='noreferrer'
							href='https://t.me/Zhilyasov'
						>
							<IconBrandTelegram width={32} height={32} />
						</a>
						<a
							aria-label='github'
							target='_blank'
							rel='noreferrer'
							href='https://github.com/Zhilyasov'
						>
							<IconBrandGithub width={32} height={32} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
