import { SpriteSVG } from '@assets/SpriteSVG'
import styles from './CartIcon.module.scss'

const CartIcon = () => {
  return (
    <div className={styles.icon}>
      <div className={styles.counter}>
        <span>0</span>
      </div>
      <SpriteSVG name='iconCart'/>
    </div>
  )
}

export default CartIcon