import Header from "./components/Header";
import { ways } from "./components/data";
import WayToLearn from "./components/WayToTeach";
import Button from "./components/Button/Button";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>
          <ul>
            {ways.map((way) => (
              <WayToLearn key={way.title} way={way} />
            ))}
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button>Подход</Button>
          <Button><strong>Доступность</strong></Button>
          <Button>Концентрация</Button>
        </section>
      </main>
    </div>
  );
}
