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
  width: 900px;
  padding: 20px;
  margin: 5px;
  background-color: #ffffff;
  p {
    background-color: #ffffff;
    color: #3f3a3a;
  }
  div > span {
    font-size: 12px;
    color: grey;
  }
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 10px;
  }
  p: has( > textarea), p: has( > input) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;
const ButtonBlock = styled.div`
  align-self: center;
  margin-left: 5px;
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
const Input = styled(TextArea)`
  max-height: 50px;
`;
const RecordListItem = ({
  thoughts,
  emotions,
  situation,
  physicality,
  rationalAnswer,
  id,
  date,
}) => {
  const dispatch = useDispatch();
  const [isEditMode, setEditMode] = useState(false);
  const [editedSituation, setEditedSituation] = useState(situation);
  const [editedThoughts, setEditedThoughts] = useState(thoughts);
  const [editedEmotions, setEditedEmotions] = useState(emotions);
  const [editedPhysicality, setEditedPhysicality] = useState(physicality);
  const [editedRationalAnswer, setEditedRationalAnswer] =
    useState(rationalAnswer);
  return (
    <Li>
      <RecordListBlock>
        <TextBlock>
          <p>
            ????????????????:&nbsp;
            {isEditMode ? (
              <TextArea
                value={editedSituation}
                onChange={(e) => {
                  setEditedSituation(e.target.value);
                }}
              ></TextArea>
            ) : (
              <span>{editedSituation}</span>
            )}
          </p>
          <p>
            ??????????:&nbsp;
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
            ????????????:&nbsp;
            {isEditMode ? (
              <Input
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
          <p>
            ?????????????? ????????:&nbsp;
            {isEditMode ? (
              <TextArea
                value={editedPhysicality}
                onChange={(e) => {
                  setEditedPhysicality(e.target.value);
                }}
              ></TextArea>
            ) : (
              <span>{editedPhysicality}</span>
            )}
          </p>
          <p>
            ???????????????????????? ??????????:&nbsp;
            {isEditMode ? (
              <TextArea
                value={editedRationalAnswer}
                onChange={(e) => {
                  setEditedRationalAnswer(e.target.value);
                }}
              ></TextArea>
            ) : (
              <span>{editedRationalAnswer}</span>
            )}
          </p>
          <span>{date}</span>
        </TextBlock>
        <ButtonsBlock>
          <ButtonBlock>
            {isEditMode ? (
              <button
                onClick={() => {
                  setEditMode(!isEditMode);
                  dispatch(
                    editRecord({
                      situation: editedSituation,
                      thoughts: editedThoughts,
                      emotions: editedEmotions,
                      physicality: editedPhysicality,
                      rationalAnswer: editedRationalAnswer,
                      id: id,
                      date: date,
                    })
                  );
                }}
              >
                <img src={check} alt="???????????? ?????? ????????????????????" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditMode(!isEditMode);
                }}
              >
                <img src={edit} alt="???????????? ?????? ????????????????????????????" />
              </button>
            )}
          </ButtonBlock>
          <ButtonBlock>
            <button
              onClick={() => {
                if (window.confirm("???? ??????????????, ?????? ???????????? ?????????????? ?????????????")) {
                  dispatch(deleteRecord(id));
                }
              }}
            >
              <img src={trash} alt="???????????? ?????? ????????????????" />
            </button>
          </ButtonBlock>
        </ButtonsBlock>
      </RecordListBlock>
    </Li>
  );
};
export default RecordListItem;
