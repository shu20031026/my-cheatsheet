import React from "react";
import style from "styled-components";
import { mockData } from "./Structure";

const Container = style.div`
    width: 80%;
    margin: 0 auto;
`;

const Sheet = style.div`
    display: block;
    flex-direction: column;
    max-width: 1000px;
    height: 100%;
    padding: 20px;
`;

const Code = style.div`
    background-color: #2e3e4d;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
    color: #c5c8c6;
`;

const How = style.h3`
    color: #61dafb;
    font-size: 30px;
`;

export const List = () => {
  return (
    <Container>
      {mockData.map((group) => {
        {
          group.contents.map((contents) => (
            <Sheet>
              <How>{contents.title}</How>
              <Code>{contents.article}</Code>
            </Sheet>
          ));
        }
      })}
    </Container>
  );
};
