import React from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import { async } from 'q';

const API_KEY = '6cee859b3813df8444fb9147a15ddbb8'

class App extends React.Component{

  state = {
    temprature : undefined,
    city:undefined,
    country:undefined,
    humidity : undefined,
    description : undefined,
    error : undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if(city && country) {
      console.log(data)

      this.setState({
        temprature :data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        error : ''
      })
    }else {
      this.setState({
        temprature : undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error : 'Please fill all the fields.'
      })
    }
  }

  render(){
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
        temprature={this.state.temprature}
        city={this.state.city}
        country={this.state.country}
        humidity ={this.state.humidity}
        description={this.state.description}
        error={this.state.error} />
      </div>
    );
  }
}

export default App;