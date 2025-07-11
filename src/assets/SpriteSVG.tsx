type IconName =
	| 'closeModal'
	| 'iconCart'
	| 'users'
	| 'money'
	| 'upload'
	| 'search'
	| 'filter'
	| 'burger'
	| 'map'
	| 'phone'
	| 'instagram'
	| 'facebook'
	| 'youtube'
	| '375'
	| '768'
	| '1440'
	| 'store-card'
	| 'lightning'

export const SpriteSVG = ({ name }: { name: IconName }) => {
	switch (name) {
		case 'closeModal':
			return (
				<svg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M24 8 8 24M8 8l16 16' stroke='#fff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
				</svg>
			)
		case 'iconCart':
      return (
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" clipPath="url(#a)"><path d="M6.003 14.666a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333ZM13.33 14.666a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333ZM.664.667h2.667l1.786 8.927a1.333 1.333 0 0 0 1.334 1.073h6.48a1.333 1.333 0 0 0 1.333-1.073L15.331 4H3.997"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
      )
		case 'users':
			return (
				<svg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M15.75 15c0-1.306-1.252-2.417-3-2.83M11.25 15c0-1.658-2.014-3-4.5-3s-4.5 1.342-4.5 3m9-5.25a3 3 0 0 0 0-6m-4.5 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z'
						stroke='#1D1E21'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			)
		case 'money':
			return (
				<svg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g clipPath='url(#a)' stroke='#1D1E21' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'>
						<path d='M11.57 9.643c3.196 0 5.787-1.151 5.787-2.572 0-1.42-2.59-2.571-5.786-2.571-3.195 0-5.786 1.151-5.786 2.571 0 1.42 2.59 2.572 5.786 2.572Z' />
						<path d='M5.785 7.071v7.715c0 1.414 2.572 2.571 5.786 2.571 3.214 0 5.786-1.157 5.786-2.571V7.07' />
						<path d='M17.357 10.929c0 1.414-2.572 2.571-5.786 2.571-3.214 0-5.786-1.157-5.786-2.571m5.658-9A8.704 8.704 0 0 0 6.428.643C3.227.643.643 1.8.643 3.215c0 .758.745 1.44 1.928 1.928' />
						<path d='M2.571 12.858c-1.183-.489-1.928-1.17-1.928-1.929V3.215' />
						<path d='M2.571 9C1.388 8.51.643 7.83.643 7.07' />
					</g>
					<defs>
						<clipPath id='a'>
							<path fill='#fff' d='M0 0h18v18H0z' />
						</clipPath>
					</defs>
				</svg>
			)
		case 'upload':
			return (
				<svg width='19' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M16.306 10.631 7.87 2.194C6.463.73 4.156.73 2.694 2.138a3.6 3.6 0 0 0 0 5.175l.056.056L4.325 9l.788-.787L3.48 6.58c-.956-.956-.956-2.587 0-3.543.957-.957 2.588-1.013 3.544-.057l.056.057 8.381 8.38c1.013.957 1.013 2.588.057 3.545-.957 1.012-2.588 1.012-3.544.056l-.056-.056L7.756 10.8c-.562-.562-.506-1.462 0-1.969a1.466 1.466 0 0 1 1.969 0l2.306 2.307.788-.788-2.363-2.362a2.498 2.498 0 0 0-3.543.112c-.9.956-.9 2.475 0 3.488l4.218 4.218c1.406 1.463 3.713 1.463 5.175.057 1.463-1.407 1.463-3.77 0-5.232 0 0 0 .057 0 0Z'
						fill='#59b17a'
					/>
				</svg>
			)
		case 'search':
			return (
				<svg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9'
						stroke='#1D1E21'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			)
		case 'filter':
			return (
				<svg width='14' height='14' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M12.83 1.75H1.165l4.667 5.518v3.815l2.333 1.167V7.268l4.667-5.518Z'
						stroke='#fff'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			)
		case 'burger':
			return (
				<svg width='32' height='26' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M28.338 13.207h-24M28.338 8.007h-24M28.338 18.407h-24'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			)
		case 'map':
			return (
				<svg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M15.75 7.5c0 5.25-6.75 9.75-6.75 9.75s-6.75-4.5-6.75-9.75a6.75 6.75 0 0 1 13.5 0Z'
						stroke='#59b17a'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M9 9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z'
						stroke='#59b17a'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			)
		case 'phone':
			return (
				<svg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g clipPath='url(#a)'>
						<path
							d='M16.498 12.69v2.25a1.499 1.499 0 0 1-1.635 1.5 14.843 14.843 0 0 1-6.472-2.302 14.625 14.625 0 0 1-4.5-4.5 14.842 14.842 0 0 1-2.303-6.503A1.5 1.5 0 0 1 3.081 1.5h2.25a1.5 1.5 0 0 1 1.5 1.29 9.63 9.63 0 0 0 .525 2.108 1.5 1.5 0 0 1-.338 1.582l-.952.953a12 12 0 0 0 4.5 4.5l.952-.953a1.5 1.5 0 0 1 1.583-.337c.68.253 1.387.43 2.107.525a1.5 1.5 0 0 1 1.29 1.522Z'
							stroke='#59b17a'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</g>
					<defs>
						<clipPath id='a'>
							<path fill='#fff' d='M0 0h18v18H0z' />
						</clipPath>
					</defs>
				</svg>
			)

		case 'instagram':
			return (
				<svg width='44' height='44' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<rect x='.5' y='.5' width='43' height='43' rx='9.5' stroke='#F7F8FA' strokeOpacity='.1' />
					<g opacity='.8' fill='#F7F8FA'>
						<path d='M33.129 17.411a8.093 8.093 0 0 0-.522-2.752 5.729 5.729 0 0 0-3.275-3.27 8.23 8.23 0 0 0-2.719-.52c-1.197-.054-1.576-.07-4.613-.07-3.038 0-3.427 0-4.615.07a8.23 8.23 0 0 0-2.718.52 5.725 5.725 0 0 0-3.275 3.27 8.13 8.13 0 0 0-.522 2.714c-.053 1.196-.07 1.574-.07 4.607 0 3.032 0 3.42.07 4.607a8.18 8.18 0 0 0 .522 2.716 5.729 5.729 0 0 0 3.276 3.268c.866.338 1.785.53 2.718.56 1.198.053 1.577.069 4.615.069 3.037 0 3.427 0 4.615-.07a8.211 8.211 0 0 0 2.719-.52 5.736 5.736 0 0 0 3.275-3.27c.327-.87.502-1.785.521-2.716.054-1.194.07-1.573.07-4.607-.003-3.032-.003-3.417-.072-4.606ZM21.992 27.715a5.745 5.745 0 0 1-5.75-5.741 5.744 5.744 0 0 1 5.75-5.741c3.174 0 5.75 2.57 5.75 5.74a5.746 5.746 0 0 1-5.75 5.742Zm5.98-10.356a1.338 1.338 0 1 1 0-2.677 1.339 1.339 0 1 1 0 2.677Z' />
						<path d='M21.994 25.479a3.503 3.503 0 1 0 0-7.007 3.503 3.503 0 0 0 0 7.007Z' />
					</g>
				</svg>
			)
		case 'youtube':
			return (
				<svg width='44' height='44' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<rect x='.5' y='.5' width='43' height='43' rx='9.5' stroke='#F7F8FA' strokeOpacity='.1' />
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M29.21 13.25c-1.19-.07-3.64-.14-7.35-.14h-.49c-3.57 0-5.95.07-7.14.21-1.61.14-2.73.56-3.36 1.12-.56.49-.98 1.4-1.12 2.59-.07.77-.14 2.38-.14 4.83v.35c0 2.31.07 3.92.21 4.69.21 1.12.56 1.96 1.26 2.45.7.56 1.89.91 3.57 1.05 1.19.07 3.64.14 7.35.14h.49c3.57 0 5.95-.07 7.14-.21 1.61-.14 2.73-.56 3.36-1.12.56-.49.98-1.4 1.12-2.59.07-.77.14-2.38.14-4.83v-.35c0-2.31-.07-3.92-.21-4.69-.21-1.12-.56-1.96-1.26-2.45-.7-.56-1.89-.91-3.57-1.05Zm-2.73 8.61-7.7 4.62v-9.24l7.7 4.62Z'
						fill='#F7F8FA'
						opacity='.8'
					/>
				</svg>
			)
		case 'facebook':
			return (
				<svg width='44' height='44' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<rect x='.5' y='.5' width='43' height='43' rx='9.5' stroke='#F7F8FA' strokeOpacity='.1' />
					<path
						d='M25.08 12.06h.84v3.15h-1.05c-.42 0-.84 0-1.05.21-.21.21-.21.42-.21.91v1.12h2.31v2.66h-2.31v11.55h-3.57V20.04h-1.89v-2.66h1.89v-.91c0-1.54.21-2.66.63-3.15.63-.91 1.89-1.33 3.78-1.33.21.07.42.07.63.07Z'
						fill='#F7F8FA'
						opacity='.8'
					/>
				</svg>
			)
		case '375':
			return (
				<svg width='216' height='168' viewBox='0 0 216 168' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M48.8027 143.945C53.6821 131.868 67.4281 126.033 79.5051 130.912L263.816 205.378L246.146 249.113L61.8351 174.647C49.7581 169.767 43.9233 156.022 48.8027 143.945Z'
						fill='#59b17a'
						fillOpacity='0.08'
					/>
					<path
						d='M113.943 42.8674C118.823 30.7904 132.569 24.9556 144.646 29.835L328.956 104.301L311.286 148.036L126.976 73.5697C114.899 68.6903 109.064 54.9444 113.943 42.8674Z'
						fill='#59b17a'
						fillOpacity='0.08'
					/>
					<path
						d='M30.8349 73.1906C35.7144 61.1136 49.4603 55.2788 61.5373 60.1582L245.848 134.625L228.178 178.359L43.8673 103.893C31.7903 99.0135 25.9555 85.2676 30.8349 73.1906Z'
						fill='#59b17a'
						fillOpacity='0.08'
					/>
				</svg>
			)
		case '768':
			return (
				<svg width='266' height='263' viewBox='0 0 266 263' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M40.55 186.003C47.9321 167.732 68.7284 158.904 86.9997 166.286L365.844 278.947L339.111 345.113L60.2667 232.453C41.9954 225.071 33.1679 204.274 40.55 186.003Z'
						fill='#59b17a'
						fillOpacity='0.08'
					/>
					<path
						d='M139.101 33.0832C146.483 14.8119 167.279 5.98438 185.55 13.3665L464.395 126.027L437.662 192.193L158.818 79.5329C140.546 72.1508 131.719 51.3546 139.101 33.0832Z'
						fill='#59b17a'
						fillOpacity='0.08'
					/>
					<path
						d='M13.3664 78.9592C20.7485 60.6878 41.5448 51.8604 59.8161 59.2425L338.66 171.903L311.927 238.069L33.0831 125.409C14.8118 118.027 5.98432 97.2305 13.3664 78.9592Z'
						fill='#59b17a'
						fillOpacity='0.08'
					/>
				</svg>
			)
		case '1440':
			return (
				<svg width='279' height='257' viewBox='0 0 279 257' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M40.55 186.003C47.9321 167.732 68.7284 158.904 86.9997 166.286L365.844 278.947L339.111 345.113L60.2667 232.453C41.9954 225.071 33.1679 204.274 40.55 186.003V186.003Z'
						fill='#59b17a'
						fillOpacity='0.08'
					/>
					<path
						d='M139.101 33.0832C146.483 14.8119 167.279 5.98438 185.55 13.3665L464.395 126.027L437.662 192.193L158.818 79.5329C140.546 72.1508 131.719 51.3546 139.101 33.0832Z'
						fill='#59b17a'
						fillOpacity='0.08'
					/>
					<path
						d='M13.3664 78.9592C20.7485 60.6878 41.5448 51.8604 59.8161 59.2425L338.66 171.903L311.927 238.069L33.0831 125.409C14.8118 118.027 5.98432 97.2305 13.3664 78.9592V78.9592Z'
						fill='#59b17a'
						fillOpacity='0.08'
					/>
				</svg>
			)
			case 'store-card':
			return (
				<svg width='216' height='168' viewBox='0 0 216 168' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M48.8027 143.945C53.6821 131.868 67.4281 126.033 79.5051 130.912L263.816 205.378L246.146 249.113L61.8351 174.647C49.7581 169.767 43.9233 156.022 48.8027 143.945Z'
						fill='#59b17a'
						fillOpacity='0.08'
					/>
					<path
						d='M113.943 42.8674C118.823 30.7904 132.569 24.9556 144.646 29.835L328.956 104.301L311.286 148.036L126.976 73.5697C114.899 68.6903 109.064 54.9444 113.943 42.8674Z'
						fill='#59b17a'
						fillOpacity='0.08'
					/>
					<path
						d='M30.8349 73.1906C35.7144 61.1136 49.4603 55.2788 61.5373 60.1582L245.848 134.625L228.178 178.359L43.8673 103.893C31.7903 99.0135 25.9555 85.2676 30.8349 73.1906Z'
						fill='#59b17a'
						fillOpacity='0.08'
					/>
				</svg>
			)
			case 'lightning':
			return (
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none"><path stroke="#59B17A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.833 2.167-7.422 8.906c-.29.35-.436.524-.438.671a.417.417 0 0 0 .154.33c.115.093.342.093.796.093H10l-.834 6.667 7.422-8.907c.291-.349.436-.523.439-.67a.416.416 0 0 0-.155-.33c-.115-.093-.342-.093-.796-.093H10l.833-6.667Z"/></svg>
			)
			
		default:
			return 'SVG not found'
	}
}
