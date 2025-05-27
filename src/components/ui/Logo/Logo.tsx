import MedLogo from '@assets/icons/MedLogo.svg'
import styles from './Logo.module.scss'
const Logo = () => {
  return (
    <div className={styles.logoSection}>
      <img src={MedLogo} alt="logo" className={styles.logo} />
      <span className={styles.span}>E-pharmacy</span>
    </div>
  )
}

export default Logo