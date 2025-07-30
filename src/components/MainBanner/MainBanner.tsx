import { BurgerMenu } from '@/components/layout/Header/components'
import { Logo } from '@/components/ui'
import styles from './MainBanner.module.scss'
import Modal from '../Modal/Modal'
import MobileMenu from '../MobileMenu/MobileMenu'
import useModal from '@/hooks/useModal'
const MainBanner = () => {
	const [isOpen, toggleModal] = useModal()
	return (
		<section
		 className={styles.mainBanner}>
			<div className={styles.topBar}>
				<Logo />
				<BurgerMenu variant='white' openModal={toggleModal} />
			</div>
			<div className={styles.content}>
				<h1 className={styles.title}>Your medication delivered</h1>
				<p className={styles.subtitle}>Say goodbye to all your healthcare worries with us</p>
			</div>
			{isOpen && (
				<Modal onClose={toggleModal}>
					<MobileMenu onClose={toggleModal} />
				</Modal>
			)}

		</section>
	)
}

export default MainBanner
