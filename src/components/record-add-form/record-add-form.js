import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postRecord } from "../../asyncActions/records";
const Form = styled.form`
  font-size: 20px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 50px 30px 50px;
  }
  button {
    width: 200px;
    height: 50px;
    align-self: center;
    border: 1px solid #919acc;
  }
`;
const Input = styled.input`
  margin-left: 30px;
  width: 600px;
  height: 50px;
  padding: 10px;
  border: 1px solid #919acc;
  ::placeholder {
    text-align: center;
  }
  &:active {
    border: 1px solid #919acc;
  }
  &:focus {
    border: 1px solid #919acc;
    outline: none;
  }
`;
const TextArea = styled.textarea`
  margin-left: 30px;
  max-width: 600px;
  min-width: 600px;
  min-height: 50px;
  max-height: 150px;
  padding: 10px;
  border: 1px solid #919acc;
  ::placeholder {
    text-align: center;
  }
  &:active {
    border: 1px solid #919acc;
  }
  &:focus {
    border: 1px solid #919acc;
    outline: none;
  }
`;
const RecordAddForm = () => {
  const [record, setRecord] = useState({
    thoughts: "",
    emotions: "",
  });
  const dispatch = useDispatch();

  const { thoughts, emotions } = record;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!thoughts || !emotions) {
      console.log("Ошибка при отправке. Не заполнены все поля!");
    } else {
      dispatch(postRecord(record));
      setRecord({
        thoughts: "",
        emotions: "",
      });
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="thoughts">Что ты думаешь по этому поводу?</label>
        <TextArea
          placeholder="Мысли"
          value={thoughts}
          id="thoughts"
          onChange={(e) => {
            setRecord({ ...record, thoughts: e.target.value });
          }}
        ></TextArea>
      </p>
      <p>
        <label htmlFor="emotions">Что ты чувствуешь, когда подумала?</label>
        <Input
          type="text"
          placeholder="Чувства"
          id="emotions"
          value={emotions}
          onChange={(e) => {
            setRecord({ ...record, emotions: e.target.value });
          }}
        />
      </p>
      <button type="submit">Добавить в дневник</button>
    </Form>
  );
};
export default RecordAddForm;
