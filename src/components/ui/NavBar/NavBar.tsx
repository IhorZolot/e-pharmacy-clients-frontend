import { Link } from 'react-router-dom'
import linksData from '@/data/nav-link-data'
import styles from './NavBar.module.scss'

interface LogoProps {
	variant?: 'header' | 'default'
}

const NavBar = ({ variant = 'default' }: LogoProps) => {
	return (
		<nav className={ variant === 'header' ? styles.navBar : styles.navBarFooter}>
			{linksData.map(link => (
				<Link
					key={link.name}
					to={link.name}
					className={variant === 'header' ? styles.linkNavBar : styles.linkNavBarFooter}
				>
					<span>{link.name}</span>
				</Link>
			))}
		</nav>
	)
}

export default NavBar
