import React, { Component } from "react";
import { timeDate } from "./utils/time-date.js";
import "./App.css";
import Image1 from "./image/morning.jpeg";
import Image2 from "./image/noon.jpeg";
import Image3 from "./image/night.jpeg";
import Image4 from "./image/sunset.jpeg";

class App extends Component {
  state = {};

  componentDidMount() {
    this.interval = setInterval(() => this.setTime(), 1000);
  }
  setTime = () => {
    this.setState({});
  };
  componentWillMo() {
    clearInterval(this.interval);
  }
  weatherImage = () => {
    let timeNow = new Date().getHours();
    switch (true) {
      case timeNow <= 12:
        // return "Now it is morning";
        return (
          <div>
            <h1 className="moment">Good Morning! {"Name"}</h1>
            <img src={Image1} alt={"moring"} />;
          </div>
        );
      case timeNow <= 16:
        return (
          <div>
            <h1 className="moment"> Good Afternoon! {"Atik"}</h1>
            <img src={Image2} alt={"Noon"} />;
          </div>
        );
      case timeNow <= 18:
        return (
          <div>
            <h1 className="moment"> Good Afternoon! {"Atik"}</h1>
            <img src={Image4} alt={"Noon"} />;
          </div>
        );

      case timeNow <= 24:
        return (
          <div>
            <h1 className="moment">Good Night! {"Name"} </h1>
            <img src={Image3} alt={"Night"} />;
          </div>
        );

      default:
        return "No one know about wather";
    }
  };
  render() {
    return (
      <div className="main-container">
        <h1 className="date"> {timeDate()}</h1>
        <div className="weatherImageContainer">{this.weatherImage()}</div>
      </div>
    );
  }
}

export default App;
