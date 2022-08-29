import React, { useState } from "react";
import AppHeader from "../app-header";
import RecordList from "../record-list";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecordAddForm from "../record-add-form";
import Quote from "../quote";

const Wrapper = styled.div`
  height: 100vh;
  ${(props) =>
    props.quote ? "display:flex; flex-direction: column;  " : "display:block"};
`;
const GlobalStyle = createGlobalStyle`
  * {
  background: #f6faff;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
html {
  height: 100%;
}
`;
const App = () => {
  const data = [
    { thoughts: "Он некрасивый", emotions: "Грусть", id: "123" },
    { thoughts: "Я ничего не стою", emotions: "Злость", id: "312" },
    { thoughts: "Я всего добьюсь", emotions: "Спокойствие", id: "421" },
  ];
  const [flag, setFlag] = useState(false);

  const handleStyleChange = (flag) => {
    setFlag(flag);
    console.log(flag);
  };

  return (
    <BrowserRouter>
      <Wrapper quote={flag}>
        <AppHeader onChange={handleStyleChange} />
        <Routes>
          <Route
            path="/record-list"
            element={<RecordList data={data} />}
          ></Route>
          <Route path="/record-add-form" element={<RecordAddForm />}></Route>
          <Route path="/quote" element={<Quote></Quote>}></Route>
        </Routes>
        <GlobalStyle />
      </Wrapper>
    </BrowserRouter>
  );
};
export default App;
