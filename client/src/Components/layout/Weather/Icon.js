import React from "react";
import styled from "styled-components";

const Image = styled.img`
  color: #0a090c;
  width: 60px;
  padding: auto;
  margin: auto auto 10px auto;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
`;

export default function Icon(props) {
  const icon = "";

  switch (props.icon) {
    case "clear":
      icon = "http://openweathermap.org/img/wn/01d@2x.png";
      break;

    case "clouds":
      icon = "http://openweathermap.org/img/wn/03d@2x.png";
      break;

    case "shower":
      icon = "http://openweathermap.org/img/wn/09d@2x.png";
      break;

    case "rain":
      icon = "http://openweathermap.org/img/wn/10d@2x.png";
      break;

    case "thunderstorm":
      icon = "http://openweathermap.org/img/wn/11d@2x.png";
      break;

    case "snow":
      icon = "http://openweathermap.org/img/wn/13d@2x.png";
      break;

    case "mist":
      icon = "http://openweathermap.org/img/wn/50d@2x.png";
      break;

    default:
      break;
  }

  return (
    <>
      <Image className="icon" src={icon} alt="Weather Icon" />
    </>
  );
}
