import React from "react";
import Title from "./components/Title"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "d3df97f9890cae03f5ff3203916e31bd";

class App extends React.Component {

  state = {
    temprature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: ""
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}s&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        err: ""
      });
    } else {
      this.setState({
        temprature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value"
      });
    }
  }
  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather
          temprature={this.state.temprature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
};


export default App;