import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import SearchBarView from '../views/search_bar_view';

class SearchBarContainer extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };

        // bind functions so they can use this.
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term); // call the action
        this.setState({ term: '' })
    }

    onInputChange(event) {
        this.setState( {term: event.target.value} );
    }

    render() {
        return(
            <SearchBarView onSubmit={ this.onFormSubmit } value={ this.state.term } onChange={ this.onInputChange } />
        )
    }
}

// anything returned from this function will endup as props
function mapDispatchToProps(dispatch) {
    // whenever fetchWeather is called, the result should be passed
    // to all of reducers through dispatch
    return bindActionCreators({ fetchWeather }, dispatch) // fetchWeather imported
}

export default connect(null, mapDispatchToProps)(SearchBarContainer);