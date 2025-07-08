import Header from "./components/Header";
import { ways, differences } from "./components/data";
import WayToLearn from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { useState } from "react";

export default function App() {
  const [contentType, setContentType] = useState(null);

  const handleClick = (contentType) => setContentType(contentType);

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>
          <ul>
            {ways.map((way) => (
              <WayToLearn {...way} key={way.title} />
            ))}
          </ul>
        </section>
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

          {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Нажми на кнопку</p>
          )}
        </section>
      </main>
    </div>
  );
}
