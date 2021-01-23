import React, { useState } from "react";
import "./App.css";
import style from "styled-components";
import { List } from "./LIst";
import { Home } from "./Home";
import { Head } from "./Head";

function App() {
  const [page, setPage] = useState<string>("home");
  return (
    <div>
      <Head />
      {page === "home" ? (
        <Home goList={(pageTitle: string) => setPage(pageTitle)} />
      ) : (
        <List goHome={() => setPage("home")} selecrtedGroup={page} />
      )}
    </div>
  );
}

export default App;
