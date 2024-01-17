import '../../../styles/About.css'
import { FormattedMessage } from 'react-intl'

const About = () => {
	return (
		<section className='about' id='about'>
			<div className='container'>
				<div className='about-content'>
					<div className='img-side'>
						<p>
							<span className='work-emoji' id='copy-emoji'>
								👨🏻&zwj;💻
							</span>
						</p>
						<img
							src='/about-img.webp'
							alt='mee'
							className='img-side__main-img'
						/>
						<span>
							<img
								src='/text.svg'
								alt='text'
							/>
						</span>
					</div>
					<div className='text-side'>
						<h3>
							<FormattedMessage id='about_title' />
						</h3>
						<h4>
							<FormattedMessage id='about_subtitle' />
						</h4>
						<p>
							<FormattedMessage id='about_desc' />
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
