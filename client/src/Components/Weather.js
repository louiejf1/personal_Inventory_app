import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: rgba(255, 255, 255, 0.75);
`;

export default function Weather() {
  return <Wrapper className="card"></Wrapper>;
}
