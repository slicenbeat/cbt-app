import React, { useState } from "react";
import AppHeader from "../app-header";
import RecordList from "../record-list";
import styled, { createGlobalStyle } from "styled-components";
import { HashRouter, Route, Routes } from "react-router-dom";
import RecordAddForm from "../record-add-form";
import Quote from "../quote";
import About from "../about/";

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
  const [flag, setFlag] = useState(false);

  const handleStyleChange = (flag) => {
    setFlag(flag);
  };

  return (
    <HashRouter>
      <Wrapper quote={flag}>
        <AppHeader onChange={handleStyleChange} />
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/record-list" element={<RecordList />}></Route>
          <Route path="/record-add-form" element={<RecordAddForm />}></Route>
          <Route path="/quote" element={<Quote></Quote>}></Route>
        </Routes>
        <GlobalStyle />
      </Wrapper>
    </HashRouter>
  );
};
export default App;
