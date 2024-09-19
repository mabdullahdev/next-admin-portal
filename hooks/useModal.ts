import { useState } from 'react';
interface ModalHooks{
  isOpen: boolean;
  open: () => void;
  close: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const useModal = (): ModalHooks => {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return {
    isOpen,
    open,
    close,
    setIsOpen,
  };
}

export default useModal;
