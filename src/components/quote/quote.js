import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchQuote } from "../../asyncActions/quote";
const WrapperForQuote = styled.div`
display: flex;
flex-direction: column;
align-self: center;
width: 600px;
padding: 20px;
margin-bottom: 10px;
background-color: #5e89c4;
color: white;
border-radius: 5px;
font-size: 30px;
  blockquote {
    line-height: 1.5;
    background-color: #5e89c4;
    margin-bottom: 20px;
  }
  cite {
    background-color: #5e89c4;
    align-self: center;
  }
}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
`;
const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: #5e89c4;
  color: white;
  border: none;
  border-radius: 5px;
`;
const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);
  return (
    <Wrapper>
      <WrapperForQuote>
        <blockquote>«{quote.content}»</blockquote>
        <cite>{quote.author}</cite>
      </WrapperForQuote>
      <Button onClick={() => dispatch(fetchQuote())}>Генерация цитаты</Button>
    </Wrapper>
  );
};

export default Quote;
