import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherView from '../views/weather_view'

class WeatherContainer extends Component {
    render() {
        return (
            <WeatherView cityData={ this.props.weather }/>
        )
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherContainer);