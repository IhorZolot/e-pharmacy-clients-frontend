import StarIcon from '@mui/icons-material/Star'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'

import styles from './StoreCard.module.scss'
const StoreCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<h3 className={styles.title}>Huge Sale</h3>
				<div className={styles.headerInfo}>
					<div className={styles.rating}>
						<StarIcon className={styles.star} />
						<span>2</span>
					</div>
					<div className={styles.status}>OPEN</div>
				</div>
			</div>
			<div className={styles.info}>
				<LocationOnIcon className={styles.icon} />
				<div>
					<p className={styles.text}>Address</p>
					<p className={styles.text}>City</p>
				</div>
			</div>
			<div className={styles.info}>
				<PhoneIcon className={styles.icon} />
				<span className={styles.text}>Phone</span>
			</div>
		</div>
	)
}

export default StoreCard
