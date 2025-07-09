import StarIcon from '@mui/icons-material/Star'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'

import styles from './StoreCard.module.scss'
import OverlayCard from '@ui/OverlayCard/OverlayCard'
import { Store } from '@/features/store/types'

interface StoreCardProps {
	store: Store
}
const StoreCard = ({ store }: StoreCardProps) => {
	
	const { name, address, city, phone, rating, work } = store
	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<h3 className={styles.title}>{name}</h3>
				<div className={styles.headerInfo}>
					<div className={styles.rating}>
						<StarIcon className={styles.star} />
						<span>{rating}</span>
					</div>
					<div className={styles.status}>{work}</div>
				</div>
			</div>
			<div className={styles.info}>
				<LocationOnIcon className={styles.icon} />
				<div>
					<p className={styles.text}>{address}</p>
					<p className={styles.text}>{city}</p>
				</div>
			</div>
			<div className={styles.info}>
				<PhoneIcon className={styles.icon} />
				<span className={styles.text}>{phone}</span>
			</div>
      <OverlayCard />
		</div>
	)
}

export default StoreCard
