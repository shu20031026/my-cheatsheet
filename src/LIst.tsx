import React from "react";
import style from "styled-components";

const Container = style.div`
    width: 80%;
    margin: 0 auto;
    max-width: 500px;
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
      <Sheet>
        <How>create-react-app</How>
        <Code>create-react-app YOUR_APP_NAME</Code>
      </Sheet>
      <Sheet>
        <How>a</How>
        <Code>aksojinvknlsvknlk</Code>
      </Sheet>
    </Container>
  );
};
