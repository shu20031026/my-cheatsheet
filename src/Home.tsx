import React from "react";
import style from "styled-components";

const Language = style.div`
  font-size:40px;
  color: #61dafb;
  margin: 0.5em 0;
  padding: 0.3em;
  overflow: auto;
  text-align: center;
`;

export const Home = () => {
  return (
    <div>
      <Language>JavaScript</Language>
      <Language>React</Language>
      <Language>TypeScript</Language>
      <Language>html css</Language>
      <Language>Git</Language>
      <Language>SQL</Language>
      <Language>LinuxCommand</Language>
      <Language>Shortcut</Language>
    </div>
  );
};
