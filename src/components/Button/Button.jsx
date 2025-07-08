import "./Button.css";

export default function Button({ children, onClick, isActive }) {
  const className = isActive ? "button active" : "button";

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
