import React from "react";
import RecordListItem from "../record-item";
const RecordList = ({ data }) => {
  const records = data.map((item) => {
    return <RecordListItem thoughts={item.thought} emotions={item.emotion} />;
  });
  return <ul>{records}</ul>;
};
export default RecordList;
