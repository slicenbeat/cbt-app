import React from "react";
import styled from "styled-components";

const RecordAddForm = () => {
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
  return (
    <Form>
      <p>
        <label htmlFor="thoughts">Что ты думаешь по этому поводу?</label>
        <Input type="text" placeholder="Мысли" id="thoughts" />
      </p>
      <p>
        <label htmlFor="emotions">Что ты чувствуешь, когда подумала?</label>
        <Input type="text" placeholder="Чувства" id="emotions" />
      </p>
      <button type="submit">Добавить в дневник</button>
    </Form>
  );
};
export default RecordAddForm;
