import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import RecordList from "../record-list";
import RecordAddForm from "../record-add-form";

import styled from "styled-components";
const AppBlock = styled.div`
  margin: 0;
  max-width: 800px;
  height: 300px;
  border: 1px solid black;
`;
const App = () => {
  const data = [
    { thoughts: "Он некрасивый", emotions: "Грусть", id: "123" },
    { thoughts: "Я ничего не стою", emotions: "Злость", id: "312" },
    { thoughts: "Я всего добьюсь", emotions: "Спокойствие", id: "421" },
  ];
  return (
    <AppBlock>
      <AppHeader />
      <SearchPanel />
      <RecordList data={data} />
      <RecordAddForm />
    </AppBlock>
  );
};
export default App;
