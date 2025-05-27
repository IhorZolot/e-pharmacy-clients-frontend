import { SpriteSVG } from '@/assets/SpriteSVG'
import styles from './BurgerMenu.module.scss'

const BurgerMenu = () => {
  return (
    <button className={styles.burger} >
      <SpriteSVG name='burger'/>
    </button>
  )
}

export default BurgerMenu