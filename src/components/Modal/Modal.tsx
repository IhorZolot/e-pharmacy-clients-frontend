import { createPortal } from 'react-dom';
import { ReactNode, useEffect } from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
  children: ReactNode
  onClose: () => void
}
const Modal = ({children, onClose}: ModalProps) => {

  useEffect(() => {
  document.body.style.overflow = 'hidden'
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }
  window.addEventListener('keydown', handleKeyDown)
  return () => {
    document.body.style.overflow = 'unset';
    window.removeEventListener('keydown', handleKeyDown)
  }
}, [onClose])

const modalRoot = document.getElementById('modal');
  if (!modalRoot) return null;

const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
  if (e.target === e.currentTarget) {
    onClose()
  }
}
  return createPortal(
    <div className={styles.modalOverlay} onClick={onBackdropClick}>
      {children}
    </div>,
     modalRoot
  )
}

export default Modal