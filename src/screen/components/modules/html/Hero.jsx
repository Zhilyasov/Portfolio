import { IconBrandGithub, IconBrandTelegram } from '@tabler/icons-react'
import '../../../styles/Hero.css'
import { FormattedMessage } from 'react-intl'

const skillsIcons = [
	{
		img: 'https://skillicons.dev/icons?i=js,react',
		id: 1,
	},
	{
		img: 'https://skillicons.dev/icons?i=html,css',
		id: 2,
	},
	{
		img: 'https://skillicons.dev/icons?i=tailwind,scss',
		id: 3,
	},
	{
		img: 'https://skillicons.dev/icons?i=vite,webpack',
		id: 4,
	},
]

const Hero = () => {
	return (
		<section id='home' className='hero'>
			<div className='container'>
				<div className='content'>
					<div className='hero-main'>
						<div className='hero-text'>
							<h1>
								<FormattedMessage id='hero_proffesion' />
							</h1>
							<img
								src='/hand.png'
								alt='waving_hand'
							/>
							<p>
								<FormattedMessage id='hero_desc' />
							</p>
							<span>
								<a
									aria-label='linkedin'
									rel='noreferrer'
									target='_blank'
									href='https://t.me/Zhilyasov'
								>
									<IconBrandTelegram width={32} height={32} />
								</a>
								<a
									aria-label='github'
									rel='noreferrer'
									target='_blank'
									href='https://github.com/Zhilyasov'
								>
									<IconBrandGithub width={32} height={32} />
								</a>
							</span>
						</div>
						<div className='hero-img'></div>
					</div>
					<div className='skills'>
						<p>
							<FormattedMessage id='hero_stack' />
						</p>
						<div className='logos'>
							<ul className='icons'>
								<li>
									<img src={skillsIcons[0].img} alt='skill-icon' />
								</li>
								<li>
									<img src={skillsIcons[1].img} alt='skill-icon' />
								</li>
								<li>
									<img src={skillsIcons[2].img} alt='skill-icon' />
								</li>
								<li>
									<img src={skillsIcons[3].img} alt='skill-icon' />
								</li>
								<li>
									<img src={skillsIcons[4].img} alt='skill-icon' />
								</li>
								<li>
									<img src={skillsIcons[5].img} alt='skill-icon' />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
