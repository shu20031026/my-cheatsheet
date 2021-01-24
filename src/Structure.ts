export interface IItem {
  name: string;
  contents: {
    title: string;
    article: string;
  }[];
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
    ],
  },
  {
    name: "JavaScript(ES6)",
    contents: [
      {
        title: "Arrow function",
        article: `const sum = (a, b) => a + b

      console.log(sum(2, 6)) // prints 8`,
      },
    ],
  },
  {
    name: "TypeScript",
    contents: [{ title: "install", article: "yarn add global typescript" }],
  },
  {
    name: "HTML5/CSS3",
    contents: [
      {
        title: "Text tag",
        article: `<h1> </h1> --> <h6> </h6>
      Creates headlines -- H1=largest, H6=smallest
      `,
      },
    ],
  },
  {
    name: "GitHub",
    contents: [{ title: "commit", article: `git commit -m "commit massage"` }],
  },
  {
    name: "MySQL",
    contents: [
      {
        title: "Query data in columns c1, c2 from a table",
        article: `SELECT c1, c2 FROM t;`,
      },
    ],
  },
  {
    name: "LinuxCommand",
    contents: [{ title: "current directry", article: `cd` }],
  },
  {
    name: "Go",
    contents: [
      { title: "Shortcut of above (Infers type)", article: `msg := "Hello"` },
    ],
  },
];
