import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };

        // bind onInputChange
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState( {term: event.target.value} );
    }

    render() {
        return(
            <form className="form-horizontal">
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

export default SearchBar;