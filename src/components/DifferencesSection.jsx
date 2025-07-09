import { differences } from "./data";
import Button from "./Button/Button";
import { useState } from "react";

export default function DifferencesSection() {
  const [contentType, setContentType] = useState(null);
  const handleClick = (contentType) => setContentType(contentType);

  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>
      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Цена
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Концентрация
      </Button>

      {contentType ? <p>{differences[contentType]}</p> : <p>Нажми на кнопку</p>}
    </section>
  );
}
