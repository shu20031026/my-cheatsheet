export interface IItem {
  name: string;
  contents: {
    title: string;
    article: string;
  }[];
  color: string;
}

export const mockData: IItem[] = [
  {
    name: "React",
    contents: [
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
      {
        title: "Stateless component",
        article: `import React from 'react'

      const YourComponent = () => <div>aaa</div>
      
      export default YourComponent`,
      },
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
    ],
    color: "#61dafb",
  },
  {
    name: "JavaScript(ES6)",
    contents: [
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
    ],
    color: "",
  },
  {
    name: "TypeScript",
    contents: [
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
    ],
    color: "",
  },
  {
    name: "HTML5/CSS3",
    contents: [
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
    ],
    color: "",
  },
  {
    name: "GitHub",
    contents: [
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
    ],
    color: "",
  },
  {
    name: "MySQL",
    contents: [
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
    ],
    color: "",
  },
  {
    name: "LinuxCommand",
    contents: [
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
    ],
    color: "",
  },
  {
    name: "Go",
    contents: [
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
      { title: "create-react-app", article: "create-react-app YOUR_APP_NAME" },
    ],
    color: "",
  },
];
