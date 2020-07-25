import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: rgba(193, 238, 255, 0.7);
  text-align: center;
  color: #53599a;
  margin-bottom: 25px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export default function Jumbotron() {
  return (
    <Wrapper>
      <h1>Hello, I am PIA</h1>
      <p>Your Personal Inventory Assistant. Let me help you get organized.</p>
    </Wrapper>
  );
}
