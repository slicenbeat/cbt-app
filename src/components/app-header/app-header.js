import { Link } from "react-router-dom";
import styled from "styled-components";
const AppHeaderWrapper = styled.header`
  height: 18%;
  background-color: #5e89c4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 18px;
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

const AppHeader = ({ onChange }) => {
  function enableFlex() {
    onChange(true);
  }
  function disableFlex() {
    onChange(false);
  }
  return (
    <AppHeaderWrapper>
      <h1>
        <Link to="cbt-app/">CBT APP</Link>
      </h1>
      <div>
        <Link to="cbt-app/record-list" onClick={disableFlex}>
          Записи
        </Link>
        <Link to="cbt-app/record-add-form" onClick={disableFlex}>
          Сделать запись
        </Link>
        <Link to="cbt-app/quote" onClick={enableFlex}>
          Вдохновиться
        </Link>
      </div>
    </AppHeaderWrapper>
  );
};
export default AppHeader;
