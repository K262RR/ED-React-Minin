import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useState, useEffect, useCallback } from "react";
import useInput from "../hooks/useInput";

export default function EffectSection() {
  const input = useInput();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const openModal = () => {
    setIsModalOpen(true);
  };

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
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type="text" {...input} />
          <h3>{input.value}</h3>
          <ul>
            {users
              .filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase()))
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
