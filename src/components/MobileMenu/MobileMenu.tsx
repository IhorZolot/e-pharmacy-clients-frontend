import { SpriteSVG } from '@/assets/SpriteSVG'
import { AuthButton, NavBar } from '../ui'
import styles from './MobileMenu.module.scss'

const MobileMenu = ({ onClose }) => {
	return (
		<div className={styles.mobileSector}>
			<button className={styles.closeButton} onClick={onClose}>
				<SpriteSVG name='closeModal' />
			</button>
			<NavBar variant='mobile' onClose={onClose} />
			<div className={styles.authButtons}>
				<AuthButton label='Register' variant='register' onClick={() => {}} />
				<AuthButton label='Login' variant='login' onClick={() => {}} />
			</div>
		</div>
	)
}

export default MobileMenu
