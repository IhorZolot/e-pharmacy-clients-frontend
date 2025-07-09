import { SpriteSVG } from '@/assets/SpriteSVG'
import featuresData from '@/data/features-data'
import { images } from '@assets/images'
import styles from './PromoSection.module.scss'
import { AuthButton } from '../ui'

const PromoSection = () => {
	return (
		<section className={styles.promoSection} >
			<div className={styles.promoSectionContent}>
				<h1>Add the medicines you need online now</h1>
				<p>
					Enjoy the convenience of having your prescriptions filled from home by connecting with your community pharmacy
					through our online platform.
				</p>
				<AuthButton label='Buy medicine' variant='register' onClick={() => {}} />
				<img src={images.promo} alt='promo' />
			</div>
			<div className={styles.featuresList}>
				{featuresData.map(({ id, title }) => (
					<ul key={id} >
						<li className={styles.feature}>
							<SpriteSVG name='lightning' />
							{title}
						</li> 
					</ul>
				))}
			</div>
		</section>
	)
}

export default PromoSection
