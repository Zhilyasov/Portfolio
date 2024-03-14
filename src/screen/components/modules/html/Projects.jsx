import { FormattedMessage } from 'react-intl'
import '../../../styles/Projects.css'
import ProBox from './ProBox'

const CarRental = '/CarRental.jpeg'
const CoinDom = '/coindom-crypto.jpeg'
// const Gymate = '/gymate.jpeg'
const Raouf = '/e-commerce.jpeg'
const CreateX = '/createx.jpeg'

const Projects = () => {
	return (
		<section className='project' id='projects'>
			<div className='container'>
				<div className='project-content'>
					<p>
						<FormattedMessage id='portfolio_title' />
					</p>
					<h3>
						<FormattedMessage id='portfolio_subtitle' />
					</h3>
					<div className='projects-grid'>
						<ProBox
							title='Car Rental'
							img={CarRental}
							date={<FormattedMessage id='car_rental_date' />}
							description={<FormattedMessage id='car_rental_desc' />}
							techno1='React'
							techno2='SCSS'
							code='https://github.com/Zhilyasov/car-rental-main'
							demo='https://car-rental-blgrd.vercel.app/'
							scrollY='-83%'
							icon='🚗'
						/>

						<ProBox
							title='Coindom'
							img={CoinDom}
							date={<FormattedMessage id='coindom_date' />}
							description={<FormattedMessage id='coindom_desc' />}
							techno1='React'
							techno2='SCSS'
							code='https://github.com/Zhilyasov/coindom-crypto-main'
							demo='https://coindom-crypto-search.vercel.app/'
							scrollY='-74%'
							icon='🪙'
							cName='reversed-proj'
						/>

						{/* <ProBox
							title='Gymate'
							img={Gymate}
							date={<FormattedMessage id='gymate_date' />}
							description={<FormattedMessage id='gymate_desc' />}
							techno1='React'
							techno2='Tailwind CSS'
							code='https://github.com/Zhilyasov/Gymate'
							demo='https://gymate-iota.vercel.app/'
							scrollY='-89%'
							icon='🏋️'
						/> */}

						<ProBox
							title='Ecommerce'
							img={Raouf}
							date={<FormattedMessage id='ecommerce_date' />}
							description={<FormattedMessage id='ecommerce_desc' />}
							techno1='React'
							techno2='Vanila CSS'
							code='https://github.com/Zhilyasov/Minimalist-E-commerce-main'
							demo='https://minimalist-e-commerce-nine.vercel.app/'
							scrollY='-71%'
							icon='🛒'
						/>

						<ProBox
							title='CreateX'
							img={CreateX}
							date={<FormattedMessage id='createx_date' />}
							description={<FormattedMessage id='createx_desc' />}
							techno1='HTML'
							techno2='Jquery'
							code='https://github.com/Zhilyasov/First-Site-Lending'
							demo='https://createx-self.vercel.app/'
							scrollY='-71%'
							icon='📚'
							cName='reversed-proj'
						/>
					</div>
				</div>
				{/* <h2 className='new-projects'>
					<FormattedMessage id='portfolio_no_projects' />
				</h2> */}
			</div>
		</section>
	)
}

export default Projects
