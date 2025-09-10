import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import MedicineCard from './MedicineCard'
import styles from './MedicineList.module.scss'
import { selectMedicine } from '../medicineSelectors'
import { useEffect } from 'react'
import { fetchMedicines } from '../operations'
import { Filter } from '@/components'
const MedicineList = () => {
  const dispatch = useAppDispatch()
  const medicines = useAppSelector(selectMedicine)

useEffect(() => {
  dispatch(fetchMedicines())
}, [dispatch])

  return (
    <section className={styles.medicineList} > 
    <Filter/>
    {medicines.map(medicine => (
        <MedicineCard key={medicine._id} medicine={medicine} />
      ))}
      </section>
  )
}

export default MedicineList