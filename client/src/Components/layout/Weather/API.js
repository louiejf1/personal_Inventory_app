import React, { Component } from "react";
import Temp from "./Temp";
import Icon from "./Icon";
import City from "./City";
import Location from "./Location";
import Condition from "./Condition";

class weatherResp extends Component {
  constructor() {
    // API call
    super();
    this.state = {
      data: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const city = "Los Angeles";
    const location = "California";
    const id = "fa4500306ed9b5b17ead3f67dca48f5f";

    const weatherResp = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${location}&units=imperial&appid=${id}`
      // "http://api.openweathermap.org/data/2.5/weather?q=Miami,%20Florida&units=imperial&appid=fa4500306ed9b5b17ead3f67dca48f5f"
    );
    const weatherRespJSON = await weatherResp.json();

    if (weatherRespJSON) {
      this.setState({
        data: weatherRespJSON,
        loading: false,
      });
    }
  } // API call to GitHub End

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div> Loading...</div>;
    }
    return (
      <div>
        <City city="" />
        <Location location="" />
        <Temp temp={" " + data.main.temp} />
        {/* <Icon Icon={data.weather[0].main} /> */}
        <Condition condition={" " + data.weather[0].main} />
      </div>
    );
  }
}

export default weatherResp;
