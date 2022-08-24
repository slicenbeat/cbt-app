import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import RecordList from "../record-list";
import RecordAddForm from "../record-add-form";
const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <RecordList />
      <RecordAddForm />
    </div>
  );
};
export default App;
