import React from "react";
const RecordListItem = ({ thoughts, emotions }) => {
  return (
    <li>
      Мысли: {thoughts}, Чувства: {emotions}
    </li>
  );
};
export default RecordListItem;
