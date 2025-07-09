import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useState } from "react";

export default function EffectSection() {
  const openModal = () => {
    setIsModalOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      <h3>Effects</h3>
      <Button onClick={openModal}>Открыть информацию</Button>
      <Modal isOpen={isModalOpen}>

        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <Button onClick={() => setIsModalOpen(false)}>Закрыть</Button>
      </Modal>
    </section>
  );
}
