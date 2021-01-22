import React from "react";
import style from "styled-components";
import { mockData } from "./Structure";
import { useState } from "react";

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

export const Home = () => {
  const [lang, setLang] = useState<string>("");

  return (
    <Container>
      <Top>
        {/* mapを使って表したい */}
        {mockData.map((group) => (
          <Box>
            <Language onClick={() => setLang(group.name)}>
              {group.name}
            </Language>
          </Box>
        ))}
        <h1>{setLang}</h1>
      </Top>
    </Container>
  );
};
