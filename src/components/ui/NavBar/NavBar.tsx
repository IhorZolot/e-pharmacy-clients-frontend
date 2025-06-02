import { Link } from 'react-router-dom'
import linksData from '@/data/nav-link-data'
import styles from './NavBar.module.scss'

interface LogoProps {
	variant?: 'header' | 'mobile' | 'default'
}

const NavBar = ({ variant = 'default' }: LogoProps) => {
	const navClass =
		variant === 'header'
			? styles.navBar
			: variant === 'mobile'
			? styles.navBarMobile
			: styles.navBarFooter

	const linkClass =
		variant === 'header'
			? styles.linkNavBar
			: variant === 'mobile'
			? styles.linkNavBarMobile
			: styles.linkNavBarFooter
	return (
		<nav className={ navClass}>
			{linksData.map(link => (
				<Link
					key={link.name}
					to={link.path}
					className={linkClass}
				>
					<span>{link.name}</span>
				</Link>
			))}
		</nav>
	)
}

export default NavBar
