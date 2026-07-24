import type { ReactNode } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";
interface ModalProps {
  title?: string;
  children: ReactNode;
  onClose: () => void;
}
const modalRoot = document.getElementById("modal-root");
export default function Modal({ title, children, onClose }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  if (!modalRoot) return null;
  return createPortal(
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={css.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>
        {title && <h2 className={css.title}>{title}</h2>}
        <div className={css.content}>{children}</div>
      </div>
    </div>,
    modalRoot,
  );
}
