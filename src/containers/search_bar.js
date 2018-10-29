import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import the action
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };

        // bind onInputChange
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' })
    }

    onInputChange(event) {
        this.setState( {term: event.target.value} );
    }

    render() {
        return(
            <form onSubmit={ this.onFormSubmit } className="form-horizontal">
                <div className="row">
                    <div className="col-md-10">
                        <div className="form-group">
                            <input type="text" value={ this.state.term } onChange={ this.onInputChange } className="form-control" placeholder="Type a city name"></input>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-primary btn-block float-right">Search</button>
                    </div>
                </div>
            </form>
        )
    }
}

// anything returned from this function will endup as props
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, the result should be passed
    // to all of reducers through dispatch
    return bindActionCreators({ fetchWeather }, dispatch) // selectBook imported
}

export default connect(null, mapDispatchToProps)(SearchBar);