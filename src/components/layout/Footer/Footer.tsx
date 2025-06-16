import { PrivacyPolicy, SocialNetwork } from './components'
import { Logo, NavBar } from '@/components/ui'
import styles from './Footer.module.scss' 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <p>Get the medicine to help you feel better, get back to your active life, and enjoy every moment.</p>
      <NavBar />
        <SocialNetwork />
        <PrivacyPolicy />
    </footer>
  )
}

export default Footer