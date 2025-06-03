import {CartIcon,UserAvatar, BurgerMenu } from './components'
import {  Logo, NavBar, AuthButton } from '@/components/ui'
import styles from './Header.module.scss'
import useMedia from '@/hooks/useMedia'

const Header = () => {
	const { isDesktop }  = useMedia()

	return (
		<header className={styles.header}>
			<Logo variant='header'  />
			{isDesktop && <NavBar variant='header' />}
			<div className={styles.header__burger}>
				<CartIcon />
				<UserAvatar />
				{isDesktop && <AuthButton label="Register" variant='register' onClick={() => {}} />}
				<BurgerMenu />
			</div>
		</header>
	)
}

export default Header
