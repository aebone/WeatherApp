import React, { Component } from 'react';
import GoogleMap from '../components/google_map';
import Chart from '../components/chart';
import _ from 'lodash';

class WeatherView extends Component {

    render() {        
        if (_.isEmpty(this.props.cityData)) {
            console.log("estou aqui");
            return (
                <div>Type a city</div>
            )
        }

        const name = this.props.cityData.city.name;
        const temps = this.props.cityData.list.map((weather) => weather.main.temp);
        const pressures = this.props.cityData.list.map((weather) => weather.main.pressure);
        const humidities = this.props.cityData.list.map((weather) => weather.main.humidity);
        const { lon, lat } = this.props.cityData.city.coord;

        return (
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
                            <tr key={ name }>
                            <td><GoogleMap lon={lon} lat={lat}/></td>
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
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default WeatherView;