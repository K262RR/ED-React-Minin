import logo from '../../public/vite.svg';

export default function Header() {
  const now = new Date();
  return (
    <header>
      <img src={logo} alt="logo" />
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
}
