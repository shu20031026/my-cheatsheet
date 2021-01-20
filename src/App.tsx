import React from "react";
import "./App.css";
import style from "styled-components";
import { List } from "./LIst";
import { Home } from "./Home";
import { useState } from "react";

const Top = style.header`
  flex-direction: column;
`;

const Container = style.div`
  background-color: #222e39;
  height: 100vh;
  width: 100vw;
`;

const UseLang = style.h1`
  color: #61dafb;
  font-size: 50px;
  font-family: 'Alata', sans-serif;
`;

const HomeButton = style.button`
right: 28px;
top: 90px;
padding: 10px 20px;
background: #3f4249;
color: #75777c;
align-items: center;
border-radius: 5px;
cursor: pointer;
border: 1px solid transparent;
font-size: 14px;
font-weight: bold;
text-align: right;
display: flex;
`;

function App() {
  const [state, setstate] = useState(<List />);
  const changeState = () => {
    setstate(<Home />);
  };

  return (
    <Container>
      <Top>
        <UseLang>React CheatSheet</UseLang>
        <HomeButton onClick={changeState}>home</HomeButton>
      </Top>
      {state}
    </Container>
  );
}

export default App;
