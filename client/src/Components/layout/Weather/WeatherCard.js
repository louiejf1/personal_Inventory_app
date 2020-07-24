import React from "react";
import styled from "styled-components";
import API from "./API";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background: linear-gradient(to bottom, #7e85c9, #53599a);
  width: auto;
  height: auto;
  border-radius: 10px;
  color: white;
`;

const WeatherCard = (props) => {
  return (
    <Wrapper className="weatherCard">
      <API />
    </Wrapper>
  );
};

export default WeatherCard;
