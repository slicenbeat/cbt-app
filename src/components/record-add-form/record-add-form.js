import React from "react";

const RecordAddForm = () => {
  return (
    <form>
      <input type="text" placeholder="Мысли" />
      <input type="text" placeholder="Чувства" />
      <button type="submit">Добавить в дневник</button>
    </form>
  );
};
export default RecordAddForm;
