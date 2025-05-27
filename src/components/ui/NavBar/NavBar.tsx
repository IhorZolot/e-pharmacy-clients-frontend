import { Link } from 'react-router-dom'
import linksData from '@/data/nav-link-data'
import styles from './NavBar.module.scss'

const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			{linksData.map(link => (
				<Link key={link.name} to={link.name} className={styles.linkNavBar}>
					<span>{link.name}</span>
				</Link>
			))}
		</nav>
	)
}

export default NavBar
