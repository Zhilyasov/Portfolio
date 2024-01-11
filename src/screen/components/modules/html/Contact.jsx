import { IconBrandTelegram, IconMail, IconMapSearch } from '@tabler/icons-react'
import '../../../styles/Contact.css'

function Contact() {
	return (
		<section id='contact' className='contact'>
			<div className='container'>
				<div className='contact__content'>
					<div className='contact__title'>
						<p>contact</p>
						<h3>Don't be shy! Hit me up! 👇</h3>
					</div>
					<div className='contact__icons'>
						<div className='contact__icon-box'>
							<span>
								<IconMapSearch width={30} height={30} />
							</span>
							<div className='contact__info'>
								<h3>Location</h3>
								<p>Russia, Moscow</p>
							</div>
						</div>
						<div className='contact__icon-box'>
							<span>
								<IconMail width={30} height={30} />
							</span>
							<div className='contact__info'>
								<h3>Mail</h3>
								<a href='mailto:zhilyasovit@gmail.com'>zhilyasovit@gmail.com</a>
							</div>
						</div>
						<div className='contact__icon-box'>
							<span>
								<IconBrandTelegram width={30} height={30} />
							</span>
							<div className='contact__info'>
								<h3>Telegram</h3>
								<a href='https://t.me/Zhilyasov' target='_blank' rel="noreferrer">
									@Zhilyasov
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
