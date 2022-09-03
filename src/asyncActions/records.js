import {
  addRecordAction,
  getManyRecordsAction,
  removeRecordAction,
} from "../store/recordReducer";
import axios from "axios";

export const fetchRecords = () => {
  return function (dispatch) {
    axios
      .get(
        "https://my-json-server.typicode.com/slicenbeat/cbt-app-server/records"
      )
      .then((response) => dispatch(getManyRecordsAction(response.data)));
  };
};
export const postRecord = (data) => {
  return function (dispatch) {
    axios
      .post(
        "https://my-json-server.typicode.com/slicenbeat/cbt-app-server/records",
        data
      )
      .then((response) => dispatch(addRecordAction(response.data)));
  };
};
export const editRecord = (data) => {
  return function (dispatch) {
    axios
      .put(
        `https://my-json-server.typicode.com/slicenbeat/cbt-app-server/records/${data.id}`,
        data
      )
      .then((response) => dispatch(editRecord(response.data)));
  };
};
export const deleteRecord = (id) => {
  return function (dispatch) {
    axios
      .delete(
        `https://my-json-server.typicode.com/slicenbeat/cbt-app-server/records/${id}`
      )
      .then((response) => {
        dispatch(removeRecordAction(id));
      });
  };
};