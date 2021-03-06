import React from "react";
import styled from "styled-components";
import { IItem } from "./Structure";

const Container = styled.div`
  background-color: #222e39;
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: block;
  overflow: scroll;
  margin-top: 60px;
`;

const Sheet = styled.div`
  display: block;
  flex-direction: column;
`;

const Code = styled.div`
  background-color: #2e3e4d;
  margin: 0.5em 0;
  padding: 1em;
  overflow: auto;
  color: #c5c8c6;
  white-space: pre-wrap;
  text-align: left;
`;

const How = styled.h3`
  color: #61dafb;
  font-size: 30px;
`;

const DeleteButton = styled.button`
  font-size: 25px;
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
  selecrtedGroup: string;
  data: IItem[];
  setData: (newData: IItem[]) => void;
}

export const List = ({ selecrtedGroup, data, setData }: Props) => {
  console.log(data);
  const deleting = (unnecessaryContentsTitle: string) => {
    const editedGroup = [...data];

    const editGroupIndex = editedGroup.findIndex(
      (group) => group.name === selecrtedGroup
    );

    editedGroup.splice(editGroupIndex, 1, {
      ...editedGroup[editGroupIndex],
      contents: editedGroup[editGroupIndex].contents.filter(
        (contents) => contents.title !== unnecessaryContentsTitle
      ),
    });

    if (window.confirm("delete")) {
      setData(editedGroup);
      const jsonData = JSON.stringify(editedGroup);
      localStorage.setItem("MY_CHEATSHEET", jsonData);
    }
  };
  return (
    <Container>
      {data
        .filter((group) => group.name === selecrtedGroup)
        .map((group) =>
          group.contents.map((content) => (
            <Sheet>
              <How>{content.title}</How>
              <Code>{content.article}</Code>
              <DeleteButton onClick={() => deleting(content.title)}>
                delete
              </DeleteButton>
            </Sheet>
          ))
        )}
    </Container>
  );
};
