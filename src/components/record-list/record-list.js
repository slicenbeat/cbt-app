import React from "react";
import styled from "styled-components";
import RecordListItem from "../record-item";

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RecordList = ({ data }) => {
  const records = data.map((item) => {
    const { id, ...itemProps } = item;
    return <RecordListItem key={id} {...itemProps} />;
  });
  return <Ul>{records}</Ul>;
};
export default RecordList;
