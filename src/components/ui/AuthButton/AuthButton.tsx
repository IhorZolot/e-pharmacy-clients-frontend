import styles from './AuthButton.module.scss'

interface AuthButtonProps {
	label: string
	onClick: () => void
	variant?: 'logout' | 'register' | 'login'
}
const AuthButton = (props: AuthButtonProps) => {
	const { label, onClick, variant = 'register' } = props
	return (
		<button
		onClick={onClick}
		 className={`${styles.authButton} ${styles[variant]}`}>
			<span>{label}</span>
		</button>
	)
}

export default AuthButton
