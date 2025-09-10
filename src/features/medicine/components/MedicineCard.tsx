import { Button } from '@/components'
import styles from './MedicineCard.module.scss'
import { Medicine } from '../types'
import { getImageSrc } from '@utils/getImageSrc'

interface MedicineCardProps {
	medicine: Medicine
}
const MedicineCard = ({medicine}: MedicineCardProps) => {
const { name, photo, category, price} = medicine
const imgSrc = getImageSrc(photo);
  return (
   <div className={styles.medicineCard }>
			<img src={imgSrc}  alt={name || 'Product'} className={styles.imgMedicine} loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = '/src/assets/images/ImgNotFound.png';
        }} />
			<div className={styles.infoMedicineBox}>
				<div className={styles.titleMedicineBox}>
					<div className={styles.titleBox}>
						<h4 className={styles.titleMedicine}>{name}</h4>
						<p className={styles.suppliersMedicine}>{category}</p>
					</div>
					<p className={styles.priceMedicine}>{price}</p>
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