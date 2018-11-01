import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import SearchBarView from '../views/search_bar_view';
import IndexService from '../services/index_service';

class SearchBarContainer extends Component {

    constructor(props) {
        super(props);

        this.state = { city: '' };

        // bind functions so they can use this.
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeatherForCity(this.state.city); // should call service, not action
        this.setState({ city: '' })
    }

    onInputChange(event) {
        this.setState( {city: event.target.value} );
    }

    render() {
        return(
            <SearchBarView onSubmit={ this.onFormSubmit } value={ this.state.term } onChange={ this.onInputChange } />
        )
    }
}

function mapDispatchToProps(dispatch) {
  return {
      fetchWeatherForCity: city => {
          dispatch(new IndexService(city))
      }
  }
}

export default connect(null, mapDispatchToProps)(SearchBarContainer);