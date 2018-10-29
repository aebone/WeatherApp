import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(cityData) {

        const temps = cityData.list.map((weather) => weather.main.temp);
        const pressures = cityData.list.map((weather) => weather.main.pressure);
        const humidities = cityData.list.map((weather) => weather.main.humidity);

        return (
            <tr key={ cityData.city.name }>
                <td>{ cityData.city.name }</td>
                <td>
                    <Chart data={temps} color="red" unit="K"/>
                </td>
                <td>
                    <Chart data={pressures} color="green" unit="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="brown" unit="%"/>
                </td>
            </tr>
        )
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>City</th>
                                <th>Temperature (K)</th>
                                <th>Pressure (hPa)</th>
                                <th>Humidity (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.weather.map(this.renderWeather) }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherList);