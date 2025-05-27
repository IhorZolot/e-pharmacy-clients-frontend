import Logo from '../../ui/Logo/Logo'
import CartIcon from './CartIcon/CartIcon'
import UserAvatar from './UserAvatar/UserAvatar'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<div className={styles.header}>
			<Logo />
			<div className={styles.header__burger}>
				<CartIcon />
				<UserAvatar />
				<BurgerMenu />
			</div>
		</div>
	)
}

export default Header
