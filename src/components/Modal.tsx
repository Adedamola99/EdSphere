import { ReactNode } from 'react';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
