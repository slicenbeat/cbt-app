import React, { useEffect } from "react";
import styled from "styled-components";
import RecordListItem from "../record-item";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecords } from "../../asyncActions/records";
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RecordList = () => {
  const dispatch = useDispatch();
  const recordsNew = useSelector((state) => state.records.records);
  useEffect(() => {
    dispatch(fetchRecords());
  }, [dispatch]);
  const records = recordsNew.map((item) => {
    const { id, ...itemProps } = item;
    return <RecordListItem key={id} id={id} {...itemProps} />;
  });
  return <Ul>{records}</Ul>;
};
export default RecordList;
