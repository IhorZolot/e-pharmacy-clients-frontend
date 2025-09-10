import MedicineCard from './MedicineCard'
import styles from './MedicineList.module.scss'
const MedicineList = () => {
  return (
    <div className={styles.medicineList} > 
    <div>Filter</div>
      <MedicineCard />
      </div>
  )
}

export default MedicineList