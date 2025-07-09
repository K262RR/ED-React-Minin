import Button from "./Button/Button";
import { useState } from "react";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [select, setSelect] = useState("1");
  const [hasError, setHasError] = useState(false);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() === "") {
      console.log("hasError");
      setHasError(true);
    } else {
      console.log("no hasError");
      setHasError(false);
    }
  };
  const reasonChangeHandler = (e) => {
    setReason(e.target.value);
  };

  const selectChangeHandler = (e) => {
    setSelect(e.target.value);
  };

  const toggleError = () => {
    setHasError((prev) => !prev);
  };

  return (
    <section>
      <h3>Обратная связь</h3>
      <Button onClick={() => toggleError()}>Toggle Error</Button>
      <form>
        <label htmlFor="name">Представьтесь</label>
        <input
          type="text"
          id="name"
          placeholder="Представьтесь"
          value={name}
          onChange={nameChangeHandler}
        />
        <label htmlFor="reason">Причина остановки</label>
        <input
          type="text"
          id="reason"
          placeholder="Причина остановки"
          value={reason}
          onChange={reasonChangeHandler}
        />
        <select id="select" value={select} onChange={selectChangeHandler}>
          <option value="1">Тонировка</option>
          <option value="2">Сплошная</option>
          <option value="3">Ремень</option>
          <option value="4">Спросить за диски</option>
        </select>
        <Button disabled={hasError}>Отправить</Button>
      </form>
    </section>
  );
}
