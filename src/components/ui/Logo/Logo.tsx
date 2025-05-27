import MedLogo from '@assets/icons/MedLogo.svg'
import DefaultLogo from '@assets/icons/Logo.svg'
import styles from './Logo.module.scss'

interface LogoProps {
  variant?: 'header' | 'default'
}

const Logo = ({ variant = 'default' }: LogoProps) => {
  const logoSrc = variant === 'header' ? MedLogo : DefaultLogo

  return (
    <div className={styles.logoSection}>
      <img src={logoSrc} alt='logo' className={styles.logo} />
      <span className={ variant === 'header' ?  styles.span : styles.spanFooter }>E-pharmacy</span>
    </div>
  )
}

export default Logo
