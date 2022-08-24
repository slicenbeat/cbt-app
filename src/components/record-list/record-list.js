import React from "react";
import RecordListItem from "../record-item";
const RecordList = ({ data }) => {
  const records = data.map((item) => {
    const { id, ...itemProps } = item;
    return <RecordListItem key={id} {...itemProps} />;
  });
  return <ul>{records}</ul>;
};
export default RecordList;
