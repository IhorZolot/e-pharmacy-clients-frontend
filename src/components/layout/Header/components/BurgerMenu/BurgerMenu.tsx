import { SpriteSVG } from '@/assets/SpriteSVG'
import styles from './BurgerMenu.module.scss'

interface BurgerMenuProps {
  variant?: 'green' | 'white' 
}

const BurgerMenu = ( {variant = 'green'}: BurgerMenuProps) => {
  const burgerClass = variant === 'green' ? styles.burgerGreen : styles.burgerWhite
  return (
    <button className={burgerClass} >
      <SpriteSVG name='burger'/>
    </button>
  )
}

export default BurgerMenu