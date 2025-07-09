import Button from "./Button/Button";
import { useState, useRef } from "react";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setShow(true);
    }
  };

  console.log(input);

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input ref={input} type="text" onKeyDown={handleKeyDown} />
    </div>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    reason: "",
    select: "1",
    hasError: false,
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
      hasError: e.target.value.trim().length === 0,
    }));
  };

  return (
    <section>
      <h3>Обратная связь</h3>
      <Button onClick={() => setForm({ ...form, hasError: !form.hasError })}>
        Toggle Error
      </Button>
      <form>
        <label htmlFor="name">Представьтесь</label>
        <input
          type="text"
          id="name"
          placeholder="Представьтесь"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="reason">Причина остановки</label>
        <input
          type="text"
          id="reason"
          placeholder="Причина остановки"
          value={form.reason}
          onChange={handleChange}
        />
        <select id="select" value={form.select} onChange={handleChange}>
          <option value="1">Тонировка</option>
          <option value="2">Сплошная</option>
          <option value="3">Ремень</option>
          <option value="4">Спросить за диски</option>
        </select>
        <Button disabled={form.hasError}>Отправить</Button>

        <hr />
        <StateVsRef />
      </form>
    </section>
  );
}
