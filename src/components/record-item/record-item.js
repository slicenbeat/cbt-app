import React from "react";
import styled from "styled-components";

const Li = styled.li`
  list-style-type: none;
`;
const RecordListBlock = styled.div`
  border: 1px solid #919acc;
  width: 1000px;
  padding: 20px;
  margin: 5px;
  background-color: #ffffff;
  p {
    background-color: #ffffff;
    color: #3f3a3a;
  }
`;

const RecordListItem = ({ thoughts, emotions }) => {
  return (
    <Li>
      <RecordListBlock>
        <p>Мысли: {thoughts}</p>
        <p>Эмоции: {emotions}</p>
      </RecordListBlock>
    </Li>
  );
};
export default RecordListItem;
