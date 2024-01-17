import { IconBrandGithub, IconBrandTelegram } from '@tabler/icons-react'
import '../../../styles/Hero.css'

const skillsIcons = [
	{
		img: 'https://skillicons.dev/icons?i=html,css',
		id: 1,
	},
	{
		img: 'https://skillicons.dev/icons?i=js,ts',
		id: 2,
	},
	{
		img: 'https://skillicons.dev/icons?i=react,redux',
		id: 3,
	},
	{
		img: 'https://skillicons.dev/icons?i=tailwind,scss',
		id: 4,
	},
	{
		img: 'https://skillicons.dev/icons?i=nodejs,sqlite',
		id: 5,
	},
	{
		img: 'https://skillicons.dev/icons?i=vite,webpack',
		id: 6,
	},
	{
		img: 'https://skillicons.dev/icons?i=tailwind,scss',
		id: 7,
	},
	{
		img: 'https://skillicons.dev/icons?i=tailwind,scss',
		id: 8,
	},
]

const Hero = () => {
	return (
		<section id='home' className='hero'>
			<div className='container'>
				<div className='content'>
					<div className='hero-main'>
						<div className='hero-text'>
							<h1>Front-End React Developer</h1>
							<img
								src='%PUBLIC_URL%/hand.png'
								alt='waving_hand'
							/>
							<p>
								Hi, I'm Aydamir Zhilyasov. A passionate Front-end React
								Developer based in Moscow. 📍
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
						<p>Tech Stack</p>
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
								<li>
									<img src={skillsIcons[6].img} alt='skill-icon' />
								</li>
								<li>
									<img src={skillsIcons[7].img} alt='skill-icon' />
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
