import { Button } from '@/components'
import styles from './MedicineCard.module.scss'

const MedicineCard = () => {
  return (
   <div className={styles.medicineCard }>
			<img  alt='Product' className={styles.imgMedicine} />
			<div className={styles.infoMedicineBox}>
				<div className={styles.titleMedicineBox}>
					<div className={styles.titleBox}>
						<h4 className={styles.titleMedicine}>Name</h4>
						<p className={styles.suppliersMedicine}>Category</p>
					</div>
					<p className={styles.priceMedicine}>$Price</p>
				</div>
				<div className={styles.buttonMedicineBox}>
					<Button >Add to card</Button>
          <Button variant='outline' >Details</Button>
				</div>
			</div>
		</div>
)
}
export default MedicineCard