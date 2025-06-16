type IconName = 'first' | 'second' | 'tertiary'

export const SpriteSVG2 = ({ name }: { name: IconName }) => {
	switch (name) {
		case 'first':
			return (
				<svg xmlns='http://www.w3.org/2000/svg' width='59' height='91' fill='none'>
					<path
						fill='#59B17A'
						fill-opacity='.08'
						d='M1.97 11.403C5.63 2.344 15.94-2.033 25 1.627l138.256 55.86-13.254 32.806-138.257-55.86c-9.059-3.66-13.436-13.97-9.776-23.03Z'
					/>
				</svg>
			)
		case 'second':
			return (
				<svg xmlns='http://www.w3.org/2000/svg' width='121' height='87' fill='none'>
					<path
						fill='#59B17A'
						fill-opacity='.08'
						d='M1.628 11.15c3.66-9.06 13.97-13.437 23.03-9.777l138.256 55.86-13.254 32.806L11.404 34.18c-9.06-3.66-13.437-13.971-9.776-23.03Z'
					/>
				</svg>
			)
		case 'tertiary':
			return (
				<svg xmlns='http://www.w3.org/2000/svg' width='108' height='34' fill='none'>
					<path
						fill='#59B17A'
						fill-opacity='.08'
						d='M2.107 11.224c3.66-9.06 13.971-13.437 23.03-9.776l138.257 55.859-13.255 32.806L11.883 34.254c-9.06-3.66-13.436-13.971-9.776-23.03Z'
					/>
				</svg>
			)
		default:
			return 'SVG not found'
	}
}
