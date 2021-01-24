import { useState } from "react";
import styled from "styled-components";
import { IItem, mockData } from "./Structure";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Formbackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 4;
  padding: 20px;
  background-color: #232e38;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  border: 2px solid #61dafb;
`;

const SelectLang = styled.select`
  background-color: #1e2a33;
  color: #61dafb;
  border: 2px solid #61dafb;
  margin: 15px;
`;

const SubmitButtton = styled.div`
  background-color: #1e2a33;
  color: #61dafb;
  border: 2px solid #61dafb;
  margin: 20px;
  border-radius: 10px;
  text-align: center;
`;

const NewTitle = styled.textarea`
  border: 2px solid #61dafb;
  border-radius: 0.67em;
  padding: 0.5em;
  background-color: #151e25;
  width: 20em;
  height: 120px;
  font-size: 1em;
  line-height: 1.2;
  outline: none;
  color: white;
  margin-bottom: 15px;
`;
const NewArticle = styled.textarea`
  border: 2px solid #61dafb; /* 枠線 */
  border-radius: 0.67em; /* 角丸 */
  padding: 0.5em; /* 内側の余白量 */
  background-color: #151e25; /* 背景色 */
  width: 20em; /* 横幅 */
  height: 120px; /* 高さ */
  font-size: 1em; /* 文字サイズ */
  line-height: 1.2; /* 行の高さ */
  outline: none;
  color: white;
`;
interface Props {
  data: IItem[];
  setData: (newData: IItem[]) => void;
  close: () => void;
}

export function Form({ data, setData, close }: Props) {
  const [lang, setLang] = useState<string>(mockData[0].name);
  const [title, setTitle] = useState<string>("");
  const [article, setArticle] = useState<string>("");

  const options = mockData.map((lang) => <option>{lang.name}</option>);

  const addItem = () => {
    const editedGroup = [...data];

    const editGroupIndex = editedGroup.findIndex(
      (group) => group.name === lang
    );

    editedGroup.splice(editGroupIndex, 1, {
      ...editedGroup[editGroupIndex],
      contents: [
        ...editedGroup[editGroupIndex].contents,
        {
          title: title,
          article: article,
        },
      ],
    });

    setData(editedGroup);
    close();
  };

  return (
    <>
      <ModalBackground onClick={close} />
      <Formbackground>
        <div>
          <SelectLang value={lang} onChange={(e) => setLang(e.target.value)}>
            {options}
          </SelectLang>
        </div>
        <div>
          <NewTitle
            placeholder="Prease write commentary"
            value={title}
            onChange={(t) => setTitle(t.target.value)}
          />
        </div>
        <div>
          <NewArticle
            placeholder="Prease write code"
            value={article}
            onChange={(a) => setArticle(a.target.value)}
          />
        </div>
        <SubmitButtton onClick={addItem}>submit</SubmitButtton>
      </Formbackground>
    </>
  );
}
