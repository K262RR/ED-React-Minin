import { createPortal } from "react-dom";
import "./Modal.css";
import { useRef, useEffect } from "react";

export default function Modal({ children, isOpen }) {
  const dialog = useRef();

  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById("modal")
  );
}
