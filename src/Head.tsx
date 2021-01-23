import React from "react";
import style from "styled-components";
import { Home } from "./Home";

const Heading = style.div`
  width: 100%;
  margin: 0 auto;
  height: 100px;
  background-color: #222e39;
  justify-content: space-between;
`;

const Buttonbox = style.div`
  align-content: right;
  flex-direction: column;
`;

const Homebutton = style.button`
  font-size:60px;
  color: #61daf;
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

export const Head = () => {
  return (
    <Heading>
      <div>
        <Homebutton>MyCheatSheet</Homebutton>
      </div>
      <Buttonbox>
        <NewText>Form</NewText>
        <Sarchform>検索バー</Sarchform>
      </Buttonbox>
    </Heading>
  );
};
