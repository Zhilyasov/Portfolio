import { IconBrandTelegram, IconMail, IconMapSearch } from '@tabler/icons-react'
import '../../../styles/Contact.css'
import { FormattedMessage } from 'react-intl'

function Contact() {
	return (
		<section id='contact' className='contact'>
			<div className='container'>
				<div className='contact__content'>
					<div className='contact__title'>
						<p>
							<FormattedMessage id='contact_subtitle' />
						</p>
						<h3>
							<FormattedMessage id='contact_title' />
						</h3>
					</div>
					<div className='contact__icons'>
						<div className='contact__icon-box'>
							<span>
								<IconMapSearch width={30} height={30} />
							</span>
							<div className='contact__info'>
								<h3>
									<FormattedMessage id='location_title' />
								</h3>
								<p>
									<FormattedMessage id='location_subtitle' />
								</p>
							</div>
						</div>
						<div className='contact__icon-box'>
							<span>
								<IconMail width={30} height={30} />
							</span>
							<div className='contact__info'>
								<h3>
									<FormattedMessage id='mail_title' />
								</h3>
								<a href='mailto:zhilyasovit@gmail.com'>
									<FormattedMessage id='mail_subtitle' />
								</a>
							</div>
						</div>
						<div className='contact__icon-box'>
							<span>
								<IconBrandTelegram width={30} height={30} />
							</span>
							<div className='contact__info'>
								<h3>
									<FormattedMessage id='telegram_title' />
								</h3>
								<a
									href='https://t.me/Zhilyasov'
									target='_blank'
									rel='noreferrer'
								>
									<FormattedMessage id='telegram_subtitle' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
