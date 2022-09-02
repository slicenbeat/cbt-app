import React from "react";
import styled from "styled-components";
import trash from "../../assets/icons/trash.svg";
import edit from "../../assets/icons/edit.svg";
import check from "../../assets/icons/check.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editRecord, deleteRecord } from "../../asyncActions/records";
const Li = styled.li`
  list-style-type: none;
`;
const RecordListBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #919acc;
  width: 800px;
  padding: 20px;
  margin: 5px;
  background-color: #ffffff;
  p {
    background-color: #ffffff;
    color: #3f3a3a;
  }
`;
const TextBlock = styled.div``;
const ButtonBlock = styled.div`
  align-self: center;
  margin-left: 5px;
  background-color: transparent;
  img,
  button {
    background-color: transparent;
    width: 16px;
  }
  button {
    border: none;
`;
const ButtonsBlock = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
`;
const TextArea = styled.textarea`
  padding-top: 100px;
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
const RecordListItem = ({ thoughts, emotions, id }) => {
  const dispatch = useDispatch();
  const [isEditMode, setEditMode] = useState(false);
  const [editedThoughts, setEditedThoughts] = useState(thoughts);
  const [editedEmotions, setEditedEmotions] = useState(emotions);
  return (
    <Li>
      <RecordListBlock>
        <TextBlock>
          <p>
            Мысли:&nbsp;
            {isEditMode ? (
              <TextArea
                value={editedThoughts}
                onChange={(e) => {
                  setEditedThoughts(e.target.value);
                }}
              ></TextArea>
            ) : (
              <span>{editedThoughts}</span>
            )}
          </p>
          <p>
            Эмоции:&nbsp;
            {isEditMode ? (
              <input
                type={"text"}
                value={editedEmotions}
                onChange={(e) => {
                  setEditedEmotions(e.target.value);
                }}
              />
            ) : (
              <span>{editedEmotions}</span>
            )}
          </p>
        </TextBlock>
        <ButtonsBlock>
          <ButtonBlock>
            {isEditMode ? (
              <button
                onClick={() => {
                  setEditMode(!isEditMode);
                  dispatch(
                    editRecord({
                      thoughts: editedThoughts,
                      emotions: editedEmotions,
                      id: id,
                    })
                  );
                }}
              >
                <img src={check} alt="Иконка для сохранения" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditMode(!isEditMode);
                }}
              >
                <img src={edit} alt="Иконка для редактирования" />
              </button>
            )}
          </ButtonBlock>
          <ButtonBlock>
            <button
              onClick={() => {
                if (window.confirm("Вы уверены, что хотите удалить запись?")) {
                  dispatch(deleteRecord(id));
                }
              }}
            >
              <img src={trash} alt="Иконка для удаления" />
            </button>
          </ButtonBlock>
        </ButtonsBlock>
      </RecordListBlock>
    </Li>
  );
};
export default RecordListItem;
