const GET_QUOTE = "GET_QUOTE";
const defaultState = {
  author: "Anonymous",
  content: "The programming is life",
};
export const quoteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return {
        ...state,
        author: action.payload.author,
        content: action.payload.content,
      };
    default:
      return state;
  }
};

export const getQuoteAction = (payload) => ({
  type: GET_QUOTE,
  payload,
});
