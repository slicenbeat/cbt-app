import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  height: 82%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const H2 = styled.h2`
  text-align: center;
  background-color: #5e89c4;
  color: white;
  border-radius: 3px;
  border: 4px solid #5e89c4;
}
`;
const Table = styled.table`
  border-collapse: collapse;
  margin-top: 2%;
  width: 90%;
  font-size: 120%;
  th,
  td {
    border: 1px solid #5e89c4;
    padding: 10px;
  }
  th {
    background-color: #5e89c4;
    color: white;
  }
  mark {
    background-color: yellow;
  }
`;
const About = () => {
  return (
    <Wrapper>
      <H2>Инструкция: как пользоваться сервисом CBT APP?</H2>
      <Table>
        <thead>
          <tr>
            <th>Опиши ситуацию</th>
            <th>Какие у тебя были мысли?</th>
            <th>Опиши эмоцию</th>
            <th>Как реагировало тело?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Что случилось? Что <mark>спровоцировало</mark> реакцию? Что вы
              сделали в ответ?
            </td>
            <td>
              Какие <mark>мысли</mark> у вас были в тот момент? В чем проблема?
              Как звучит внутреннее раздражение или протест?
            </td>
            <td>
              Опишите ваши <mark>чувства</mark> в тот момент, что было с
              настроением? Может, было несколько эмоций?
            </td>
            <td>
              Что происходило <mark>с телом</mark>? Как оно реагировало? Где
              именно? Насколько интенсивно?
            </td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
};
export default About;
