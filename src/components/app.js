import React, { Component } from 'react';
import SearchBarContainer from '../containers/search_bar_container';
import WeatherContainer from '../containers/weather_container';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBarContainer/>
        <WeatherContainer/>
      </div>
    )
  }
}
