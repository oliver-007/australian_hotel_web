"use client";

import { X } from "lucide-react";
import React, { ReactNode, useEffect, useRef } from "react";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalComponent = ({ isOpen, onClose, children }: IModalProps) => {
  if (!isOpen) return null;

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleModalClose = (e: MouseEvent) => {
      modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        onClose();
    };

    window.addEventListener("mousedown", handleModalClose, { passive: true });
    return () => {
      window.removeEventListener("mousedown", handleModalClose);
    };
  }, [onClose]);

  return (
    //   ----------- 1st layer bg black ------------
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      {/* ------ 2nd layer  ------ */}
      <div
        ref={modalRef}
        className=" lg:w-[80%] lg:h-[80%] flex items-center justify-center p-5 shadow-lg bg-white "
      >
        {children}
      </div>
    </div>
  );
};

export default ModalComponent;
