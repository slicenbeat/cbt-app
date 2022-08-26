import React from "react";
import styled from "styled-components";
const Quote = () => {
  const WrapperForQuote = styled.div`
  display: flex;
  align-self: center;
  width: 400px;
  padding: 20px;
  background-color: #bcc4ef;
    blockquote {
      color: black;
      background-color: #bcc4ef;
      &::before,
      &::after {
        content: "“";
        font-size: 40px;
      }
    }
  }
  `;
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  `;
  return (
    <Wrapper>
      <WrapperForQuote>
        <blockquote>
          Что разум человека может постигнуть и во что он может поверить, того
          он способен достичь
        </blockquote>
      </WrapperForQuote>
    </Wrapper>
  );
};

export default Quote;
