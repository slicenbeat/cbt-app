const GET_MANY_RECORDS = "GET_MANY_RECORDS";
const REMOVE_RECORD = "REMOVE_RECORD";
const ADD_RECORD = "ADD_RECORD";
const EDIT_RECORD = "EDIT_RECORD";
const defaultState = {
  records: [],
};
export const recordReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MANY_RECORDS:
      return { ...state, records: [...action.payload] };
    case ADD_RECORD:
      return { ...state, records: [...state.records, action.payload] };
    case REMOVE_RECORD:
      return {
        ...state,
        records: state.records.filter((record) => record.id !== action.payload),
      };
    case EDIT_RECORD:
      return {
        ...state,
        records: state.records.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    default:
      return state;
  }
};

export const getManyRecordsAction = (payload) => {
  return {
    type: GET_MANY_RECORDS,
    payload,
  };
};

export const addRecordAction = (payload) => {
  return {
    type: ADD_RECORD,
    payload,
  };
};
export const editRecordAction = (payload) => {
  return {
    type: EDIT_RECORD,
    payload,
  };
};

export const removeRecordAction = (payload) => {
  return {
    type: REMOVE_RECORD,
    payload,
  };
};
