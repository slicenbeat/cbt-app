import React from "react";
import styled from "styled-components";
const AppHeaderWrapper = styled.div`
  align-items: flex-end;
  justify-content: space-between;
`;

const H1 = styled.h1`
  font-family: "Roboto";
`;
const H2 = styled.h2`
  font-family: "Consolas";
`;
const AppHeader = () => {
  return (
    <AppHeaderWrapper>
      <H1>Damir Ivaev</H1>
      <H2>Сделано три записи</H2>
    </AppHeaderWrapper>
  );
};
export default AppHeader;
