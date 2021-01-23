import React from "react";
import style from "styled-components";
import { mockData } from "./Structure";

const Container = style.div`
  background-color: #222e39;
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: block;
  overflow: scroll;
  margin-top: 60px;
`;

const Sheet = style.div`
    display: block;
    flex-direction: column;
`;

const Code = style.div`
    background-color: #2e3e4d;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
    color: #c5c8c6;
    white-space: pre-wrap;
    text-align: left;
`;

const How = style.h3`
    color: #61dafb;
    font-size: 30px;
`;

interface Props {
  goHome: () => void;
  selecrtedGroup: string;
}

export const List = ({ goHome, selecrtedGroup }: Props) => {
  console.log(goHome, selecrtedGroup);
  return (
    <Container>
      {mockData
        .filter((group) => group.name === selecrtedGroup)
        .map((group) =>
          group.contents.map((contents) => (
            <Sheet>
              <How>{contents.title}</How>
              <Code>{contents.article}</Code>
              <button>delete</button>
            </Sheet>
          ))
        )}
    </Container>
  );
};
