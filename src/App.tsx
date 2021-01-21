import React from "react";
import "./App.css";
import style from "styled-components";
import { List } from "./LIst";
import { Home } from "./Home";
import { useState } from "react";
import { mockData } from "./Structure";

const Container = style.div`
  background-color: #222e39;
  height: 100vh;
  width: 100vw;
  top: 0;
  text-align: center;
  display: block;
  overflow: scroll;
`;

const Top = style.div`
  flex-direction: column;
  padding: .4em .8em;
  text-align: center;
  display: block;
  flex-direction: column;
`;

const Box = style.div`

`;

const Language = style.button`
  font-size:40px;
  color: #61dafb;
  text-align: center;
  font-family: 'Alata', sans-serif;
  background-color: #00000000;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0.5em 0;
  padding: 0;
  appearance: none;
  overflow: auto;
`;

function App() {
  return (
    <div>
      <List />
      <Container>
        <Top>
          {/* mapを使って表したい */}
          <Box>
            <Language>{mockData[0].name}</Language>
          </Box>
          <Box>
            <Language>{mockData[1].name}</Language>
          </Box>
          <Box>
            <Language>{mockData[2].name}</Language>
          </Box>
          <Box>
            <Language>{mockData[3].name}</Language>
          </Box>
          <Box>
            <Language>{mockData[4].name}</Language>
          </Box>
          <Box>
            <Language>{mockData[5].name}</Language>
          </Box>
          <Box>
            <Language>{mockData[6].name}</Language>
          </Box>
          <Box>
            <Language>{mockData[7].name}</Language>
          </Box>
        </Top>
      </Container>
    </div>
  );
}

export default App;
