import React from "react";
import styled from "styled-components";

const Li = styled.li`
  list-style-type: none;
`;

const RecordListItem = ({ thoughts, emotions }) => {
  return (
    <Li>
      Мысли: {thoughts}, Чувства: {emotions}
    </Li>
  );
};
export default RecordListItem;
