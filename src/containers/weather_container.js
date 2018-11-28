import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherView from '../views/weather_view'

class WeatherContainer extends Component {
    render() {
        return (
            <WeatherView cityData={ this.props.weather } error={this.props.error} />
        )
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather,
        error: state.error
    }
}

export default connect(mapStateToProps)(WeatherContainer);