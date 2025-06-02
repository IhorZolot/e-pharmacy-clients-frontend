import { ClockLoader } from 'react-spinners'
import styles from './Loader.module.scss'
const Loader = () => {
  return (
    <div className={styles.loader}><ClockLoader color="#36d7b7" size={50} /></div>
  )
}

export default Loader