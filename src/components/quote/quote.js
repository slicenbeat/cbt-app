import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    axios.get("https://api.quotable.io/random").then(
      (result) => {
        setIsLoaded(true);
        setQuote(result.data);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);
  if (error) {
    return <div>Ошибка, ${error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка…</div>;
  } else {
    console.log(quote);
    return (
      <Wrapper>
        <WrapperForQuote>
          <blockquote>«{quote.content}»</blockquote>
          <cite>{quote.author}</cite>
        </WrapperForQuote>
      </Wrapper>
    );
  }
};

export default Quote;
