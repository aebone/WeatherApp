import React, { Component } from 'react';

class GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        // i  can use this.refs.map in any part of this component to reference this
        return <div ref="map"></div>
    }
}

export default GoogleMap;