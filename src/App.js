import React from "react";
import Title from "./components/Title"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "d3df97f9890cae03f5ff3203916e31bd";

class App extends React.Component{

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=California,Us&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <Title />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;