import styles from './OverlayCard.module.scss'
import { SpriteSVG2 } from '@/assets/SpriteSVG2'

const OverlayCard = () => {
	return (
		<div  className={styles.svgDecorations}>
			<SpriteSVG2 name='first' />
			<SpriteSVG2 name='second' />
			<SpriteSVG2 name='tertiary' />
		</div>
	)
}

export default OverlayCard
