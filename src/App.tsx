import React, { useState } from "react";
import "./App.css";
import style from "styled-components";
import { List } from "./LIst";
import { Home } from "./Home";
import { Head } from "./Head";

const Mount = style.div`
  background-color: #222e39;
`;

const Heading = style.div`
  width: 100%;
  margin: 0 auto;
  height: 60px;
  background-color: #222e39;
  justify-content: space-between;
`;

const Homebutton = style.button`
  font-size:60px;
  color: #61dafb;
  font-family: 'Alata', sans-serif;
  background-color: #222e39; 
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0.5em 0;
  padding: 0;
  appearance: none;
  overflow: auto;
`;

const NewText = style.button`
  font-size:25px;
  color: #61dafb;
  text-align: right;
  font-family: 'Alata', sans-serif;
  background-color: #222e39; 
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0.5em 0;
  padding: 0;
  appearance: none;
  overflow: auto;
`;

const Sarchform = style.button`
  font-size:25px;
  color: #61dafb;
  text-align: right;
  font-family: 'Alata', sans-serif;
  background-color: #222e39; 
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0.5em 0;
  padding: 0;
  appearance: none;
  overflow: auto;
`;

function App() {
  const [page, setPage] = useState<string>("home");
  return (
    <Mount>
      <Heading>
        <div>
          <Homebutton onClick={() => setPage("home")}>MyCheatSheet</Homebutton>
        </div>
        <div>
          <NewText>Form</NewText>
        </div>
        <div>
          <Sarchform>検索バー</Sarchform>
        </div>
      </Heading>

      {page === "home" ? (
        <Home goList={(pageTitle: string) => setPage(pageTitle)} />
      ) : (
        <List goHome={() => setPage("home")} selecrtedGroup={page} />
      )}
    </Mount>
  );
}

export default App;
