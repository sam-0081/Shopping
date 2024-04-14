import React, {useEffect} from 'react';

const Modal = ({isOpen, onClose, children}) => {
    useEffect(() => {
        if (isOpen) {
            // Блокируем скролл страницы, но разрешаем скролл для модального окна
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '17px'; // Компенсируем ширину полосы прокрутки
        } else {
            // Разблокируем скролл страницы и удаляем компенсацию ширины
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0';
        }
    }, [isOpen]);

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}/>
            <div className="bg-white p-8 rounded-lg z-10">
                {children}
            </div>
        </div>
    );
};

export default Modal;