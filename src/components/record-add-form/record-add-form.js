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
    border-radius: 10px;
    align-self: center;
    border: 1px solid #919acc;
    background-color: white;
    :hover {
      border: 1px solid green;
    }
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
    situation: "",
    thoughts: "",
    emotions: "",
    physicality: "",
    rationalAnswer: "",
  });
  const dispatch = useDispatch();

  const { situation, thoughts, emotions, physicality, rationalAnswer } = record;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!situation || !thoughts || !emotions || !rationalAnswer) {
      console.log("Ошибка при отправке. Не заполнены все поля!");
    } else {
      dispatch(
        postRecord({ ...record, date: new Date().toISOString().slice(0, 10) })
      );
      setRecord({
        situation: "",
        thoughts: "",
        emotions: "",
        physicality: "",
        rationalAnswer: "",
      });
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="">Что случилось? Опиши ситуацию.</label>
        <TextArea
          placeholder="Ситуация"
          value={situation}
          id="situation"
          onChange={(e) => {
            setRecord({ ...record, situation: e.target.value });
          }}
        ></TextArea>
      </p>
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
        <label htmlFor="emotions">
          Что ты чувствуешь, когда подумал(а) об этих мыслях?
        </label>
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
      <p>
        <label htmlFor="">
          Как реагировало тело? Что происходило? Насколько интенсивно?
        </label>
        <TextArea
          placeholder="Реакция тела"
          value={physicality}
          id="physicality"
          onChange={(e) => {
            setRecord({ ...record, physicality: e.target.value });
          }}
        ></TextArea>
      </p>
      <p>
        <label htmlFor="">
          Какой рациональный ответ можешь дать? Какие когнитивные искажения
          присутствуют в твоих ранее описанных мыслях?
        </label>
        <TextArea
          placeholder="Рациональный ответ"
          value={rationalAnswer}
          id="rationalAnswer"
          onChange={(e) => {
            setRecord({ ...record, rationalAnswer: e.target.value });
          }}
        ></TextArea>
      </p>
      <button type="submit">Добавить в дневник</button>
    </Form>
  );
};
export default RecordAddForm;
