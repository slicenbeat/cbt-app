import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import RecordList from "../record-list";
import RecordAddForm from "../record-add-form";
const App = () => {
  const data = [
    { thought: "Он некрасивый", emotion: "Грусть" },
    { thought: "Я ничего не стою", emotion: "Злость" },
    { thought: "Я всего добьюсь", emotion: "Спокойствие" },
  ];
  return (
    <>
      <AppHeader />
      <SearchPanel />
      <RecordList data={data} />
      <RecordAddForm />
    </>
  );
};
export default App;
