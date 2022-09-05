import {
  addRecordAction,
  editRecordAction,
  getManyRecordsAction,
  removeRecordAction,
} from "../store/recordReducer";
import axios from "axios";

export const fetchRecords = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/records")
      .then((response) => dispatch(getManyRecordsAction(response.data)));
  };
};
export const postRecord = (data) => {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/records", data)
      .then((response) => dispatch(addRecordAction(response.data)));
  };
};
export const editRecord = (data) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:3001/records/${data.id}`, data)
      .then((response) => dispatch(editRecordAction(response.data)));
  };
};
export const deleteRecord = (id) => {
  return function (dispatch) {
    axios.delete(`http://localhost:3001/records/${id}`).then((response) => {
      dispatch(removeRecordAction(id));
    });
  };
};
