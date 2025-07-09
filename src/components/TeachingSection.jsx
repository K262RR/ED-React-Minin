import { ways } from "./data";
import WayToLearn from "./WayToTeach";

export default function TeachingSection() {
  return (
    <section>
      <h3>Наш подход к обучению</h3>
      <ul>
        {ways.map((way) => (
          <WayToLearn {...way} key={way.title} />
        ))}
      </ul>
    </section>
  );
}
