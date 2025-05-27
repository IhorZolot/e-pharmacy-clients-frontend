import {CartIcon,UserAvatar, BurgerMenu } from './components'
import { LogoutButton, Logo, NavBar } from '@/components/ui'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo variant='header'  />
			<NavBar variant='header' />
			<div className={styles.header__burger}>
				<CartIcon />
				<UserAvatar />
				<LogoutButton />
				<BurgerMenu />
			</div>
		</header>
	)
}

export default Header
