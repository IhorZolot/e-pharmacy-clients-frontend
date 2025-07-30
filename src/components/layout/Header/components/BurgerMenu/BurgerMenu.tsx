import { SpriteSVG } from '@/assets/SpriteSVG'
import styles from './BurgerMenu.module.scss'

interface BurgerMenuProps {
  variant?: 'green' | 'white' 
  openModal: () => void;
}
const BurgerMenu = ( {openModal , variant = 'green'}: BurgerMenuProps) => {
  const burgerClass = variant === 'green' ? styles.burgerGreen : styles.burgerWhite
  return (
    <button className={burgerClass} onClick={openModal} >
      <SpriteSVG name='burger'/>
    </button>
  )
}

export default BurgerMenu