import SaleBanners from '@/data/sale-banners-data'
import styles from './SaleSector.module.scss'

const SaleSector = () => {
	return (
		<div className={styles.saleSector}>
			{SaleBanners.map(({ id, title, rate, text }) => (
				<div key={id} className={styles.bannerCard}>
					<div className={styles.circle}>{id}</div>
					<h2 className={styles.title}>{title}</h2>
					<p className={styles.rate}>{rate}</p>
					<button className={styles.text}>{text}</button>
				</div>
			))}
		</div>
	)
}

export default SaleSector
