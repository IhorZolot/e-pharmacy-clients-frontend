import { useState } from 'react'

type UseModalReturn = [boolean, () => void];

const useModal = (): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(prev => !prev);

  return [isOpen, toggleModal];
};

export default useModal;