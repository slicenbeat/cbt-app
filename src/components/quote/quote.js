import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchQuote } from "../../asyncActions/quote";
const Quote = () => {
  const WrapperForQuote = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 600px;
  padding: 20px;
  background-color: #bcc4ef;
  border: 1px solid black;
  font-size: 30px;
    blockquote {
      line-height: 1.5;
      color: black;
      background-color: #bcc4ef;
      margin-bottom: 20px;
    }
    cite {
      background-color: #bcc4ef;
      align-self: center;
    }
  }
  `;
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
  `;
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);
  console.log(quote);
  return (
    <Wrapper>
      <WrapperForQuote>
        <blockquote>«{quote.content}»</blockquote>
        <cite>{quote.author}</cite>
      </WrapperForQuote>
      <button onClick={() => dispatch(fetchQuote())}>Генерация цитаты</button>
    </Wrapper>
  );
};

export default Quote;
