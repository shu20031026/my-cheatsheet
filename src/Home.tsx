import React from "react";
import styled from "styled-components";
import { IItem } from "./Structure";

const Container = styled.div`
  background-color: #222e39;
  height: 100vh;
  width: 100vw;
  top: 0;
  text-align: center;
  display: block;
  overflow: scroll;
  margin-top: 60px;
`;

const Top = styled.div`
  flex-direction: column;
  padding: 0.4em 0.8em;
  text-align: center;
  display: block;
  flex-direction: column;
`;

const Box = styled.div``;

const Language = styled.button`
  font-size: 40px;
  color: #61dafb;
  text-align: center;
  font-family: "Alata", sans-serif;
  background-color: #00000000;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0.5em 0;
  padding: 0;
  appearance: none;
  overflow: auto;
`;

interface Props {
  goList: (groupTitle: string) => void;
  data: IItem[];
}

export const Home = ({ goList, data }: Props) => {
  return (
    <Container>
      <Top>
        {data.map((group) => (
          <Box>
            <Language onClick={() => goList(group.name)}>{group.name}</Language>
          </Box>
        ))}
      </Top>
    </Container>
  );
};
