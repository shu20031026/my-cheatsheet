import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { List } from "./LIst";
import { Home } from "./Home";
import { Form } from "./Form";
import { IItem, mockData } from "./Structure";

const FormButton = styled.div`
  color: #61dafb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px solid #61dafb;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-weight: 900;
  float: right;
  margin-right: 20px;
`;

const Line = styled.hr`
  background-color: #61dafb;
  border-color: #61dafb;
`;

const Mount = styled.div`
  background-color: #222e39;
`;

const Heading = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 60px;
  background-color: #222e39;
  justify-content: space-around;
`;

const Homebutton = styled.div`
  font-size: 40px;
  color: #61dafb;
  font-family: "Alata", sans-serif;
  background-color: #222e39;
  border: none;
  height: 60px;
  cursor: pointer;
  outline: none;
  margin: 0.5em 0;
  padding: 0;
  appearance: none;
  overflow: auto;
`;

function App() {
  const [page, setPage] = useState<string>("home");
  const [data, setData] = useState<IItem[]>(mockData);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Mount>
      <Heading>
        <Homebutton onClick={() => setPage("home")}>MyCheatSheet</Homebutton>
        <FormButton onClick={() => setShowModal(true)}>+</FormButton>
        {showModal && (
          <Form
            data={data}
            setData={setData}
            close={() => setShowModal(false)}
          />
        )}
      </Heading>
      <Line />
      {page === "home" ? (
        <Home goList={(pageTitle: string) => setPage(pageTitle)} data={data} />
      ) : (
        <List selecrtedGroup={page} data={data} setData={setData} />
      )}
    </Mount>
  );
}

export default App;
