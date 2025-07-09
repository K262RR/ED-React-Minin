import logo from "../../../public/vite.svg";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import "./Header.module.css";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
`;

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <span>Время сейчас: {time.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
