import '../../../styles/Projects.css'
import  ProBox from './ProBox.jsx'

const CarRental = 'https://www.stefantopalovic.com/static/media/car-rental-full.c58b37da333d73238fdd.webp'
const CoinDom = 'https://www.stefantopalovic.com/static/media/coindom-full.c5fef9ca2f47e52897f8.png'
const Gymate = 'https://www.stefantopalovic.com/static/media/gymate-home.52d00d03c15713c601c4.webp'
const Raouf = 'https://www.stefantopalovic.com/static/media/ecom.f10b3cdd799be85c19da.webp'


const Projects = () => {
	return (
		<section className='projects' id='projects'>
			<div className='container'>
				<div className='project-content'>
					<p>portfolio</p>
					<h3>Each project is a unique piece of development 🧩</h3>
					<div class='projects-grid'>
						<ProBox
							title="Car Rental"
							img={CarRental}
							date="(February 2023)"
							description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
							techno1="React"
							techno2="SCSS"
							code="https://github.com/stefvndev/car-rental"
							demo="https://car-rental-ten.vercel.app/"
							scrollY="-83%"
							icon="🚗"
						/>

						<ProBox
							title="Coindom"
							date="(February 2023)"
							img={CoinDom}
							description="Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time."
							techno1="React"
							techno2="SCSS"
							code="https://github.com/stefvndev/coindom-crypto"
							demo="https://coindom-crypto-search.vercel.app/"
							scrollY="-74%"
							icon="🪙"
							cName="reversed-proj"
						/>

						<ProBox
							title="Gymate"
							date="(January 2023)"
							img={Gymate}
							description="A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
							techno1="React"
							techno2="Tailwind CSS"
							code="https://github.com/stefvndev/Gymate"
							demo="https://gymate-iota.vercel.app/"
							scrollY="-89%"
							icon="🏋️"
						/>

						<ProBox
							title="Ecommerce"
							date="(December 2022)"
							img={Raouf}
							description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
							techno1="React"
							techno2="Vanila CSS"
							code="https://github.com/stefvndev/Minimalist-E-commerce"
							demo="https://minimalist-e-commerce.vercel.app/"
							scrollY="-71%"
							icon="🛒"
							cName="reversed-proj"
            />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects