import { BurgerMenu } from '@/components/layout/Header/components'
import { Logo } from '@/components/ui'
import styles from './MainBanner.module.scss'
const MainBanner = () => {
	return (
		<section
		 className={styles.mainBanner}>
			<div className={styles.topBar}>
				<Logo />
				<BurgerMenu variant='white' />
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>Your medication delivered</h2>
				<p className={styles.subtitle}>Say goodbye to all your healthcare worries with us</p>
			</div>
		</section>
	)
}

export default MainBanner
