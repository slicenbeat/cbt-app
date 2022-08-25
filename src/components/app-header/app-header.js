import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const AppHeaderWrapper = styled.header`
  height: 120px;
  background-color: #5e89c4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;
  div {
    background-color: #5e89c4;
    margin-left: 15px;
  }
  h1 {
    color: white;
    background-color: #5e89c4;
    margin: 15px;
  }
  a {
    align-self: flex-end;
    background-color: #5e89c4;
    color: white;
    text-decoration: none;
    margin-right: 5px;
  }
`;

const AppHeader = () => {
  return (
    <AppHeaderWrapper>
      <h1>CBT App</h1>
      <div>
        <Link to="/record-list">Дневник</Link>
        <Link to="/record-add-form">Сделать запись</Link>
      </div>
    </AppHeaderWrapper>
  );
};
export default AppHeader;
