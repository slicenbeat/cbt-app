import React from "react";
import AppHeader from "../app-header";
import RecordList from "../record-list";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecordAddForm from "../record-add-form";

const AppBlock = createGlobalStyle`
* {
  background: #f6faff;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
`;

const App = () => {
  const data = [
    { thoughts: "Он некрасивый", emotions: "Грусть", id: "123" },
    { thoughts: "Я ничего не стою", emotions: "Злость", id: "312" },
    { thoughts: "Я всего добьюсь", emotions: "Спокойствие", id: "421" },
  ];
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path="/record-list" element={<RecordList data={data} />}></Route>
        <Route path="/record-add-form" element={<RecordAddForm />}></Route>
      </Routes>
      <AppBlock />
    </BrowserRouter>
  );
};
export default App;
