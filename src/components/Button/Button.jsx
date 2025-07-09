import classes from "./Button.module.css";

export default function Button({ children, isActive, ...props }) {
  const className = isActive ? `${classes.button} ${classes.active}` : classes.button;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
