export default function WayToLearn({ way }) {
  return (
    <li>
      <p>
        <strong>{way.title}</strong>
        <br />
        {way.description}
      </p>
    </li>
  );
}