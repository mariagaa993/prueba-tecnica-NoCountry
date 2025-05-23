import React, { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title: string;
};

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 px-2"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
            tabIndex={-1}>
            <div className="bg-white rounded-lg max-w-xl w-full ps-4 pt-4 pb-8 max-h-[96vh]"
                onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 id="modal-title" className="text-md font-semibold">{title}</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar modal"
                        className="text-gray-500 hover:text-gray-700 cursor-pointer me-4">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                <div className="overflow-y-auto max-h-[80vh] pr-4 md:pt-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
