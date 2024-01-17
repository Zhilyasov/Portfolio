import '../../../styles/About.css'

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
							src='%PUBLIC_URL%/about-img.webp'
							alt='mee'
							className='img-side__main-img'
						/>
						<span>
							<img
								src='https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg'
								alt='text'
							/>
						</span>
					</div>
					<div className='text-side'>
						<h3>About me</h3>
						<h4>
							A dedicated Front-end Developer <br /> based in Moscow 📍
						</h4>
						<p>
							As a Front-End Developer, I possess an impressive arsenal of
							skills in HTML, CSS, SASS/SCSS, Tailwind, JavaScript, React, Redux
							Toolkit, React Query, Bootstrap, Webpack/Vite, TypeScript and some
							backend like Node.js + Express.js. I excel in designing and
							maintaining responsive websites that offer a smooth user
							experience. My expertise lies in crafting dynamic, engaging
							interfaces through writing clean and optimized code and utilizing
							cutting-edge development tools and techniques. I am also a team
							player who thrives in collaborating with cross-functional teams to
							produce outstanding web applications.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
