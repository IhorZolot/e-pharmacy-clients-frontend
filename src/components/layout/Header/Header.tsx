import { CartIcon, UserAvatar, BurgerMenu } from './components'
import { Logo, NavBar, AuthButton } from '@/components/ui'
import styles from './Header.module.scss'
import useMedia from '@/hooks/useMedia'
import useModal from '@/hooks/useModal'
import Modal from '@/components/Modal/Modal'
import MobileMenu from '@/components/MobileMenu/MobileMenu'

const Header = () => {
	const { isDesktop } = useMedia()
	const [isOpen, toggleModal] = useModal()

	return (
		<header className={styles.header}>
			<Logo variant='header' />
			{isDesktop && <NavBar variant='header' />}
			<div className={styles.header__burger}>
				<CartIcon />
				<UserAvatar />
				{isDesktop && <AuthButton label='Register' variant='register' onClick={() => {}} />}
				<BurgerMenu openModal={toggleModal} />
			</div>
			{isOpen && (
				<Modal onClose={toggleModal}>
					<MobileMenu onClose={toggleModal} />
				</Modal>
			)}
		</header>
	)
}

export default Header
