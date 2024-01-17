import { IconBrandGithub, IconBrandTelegram } from '@tabler/icons-react'
import '../../../styles/Footer.css'
import { FormattedMessage } from 'react-intl'

function Footer() {
	return (
		<footer>
			<div className='container'>
				<div className='footerc'>
					{/* <h3>
						Copyright © {new Date().getFullYear()}. All rights are reserved
					</h3> */}
					<h3>
						<FormattedMessage id='text' />
					</h3>
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
