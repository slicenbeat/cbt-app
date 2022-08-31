import { getQuoteAction } from "../store/quoteReducer";
import axios from "axios";

export const fetchQuote = () => {
  return function (dispatch) {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => dispatch(getQuoteAction(response.data)));
  };
};
