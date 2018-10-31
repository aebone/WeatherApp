import React from 'react';

class SearchBarView extends React.Component {

    render() {
        return (
            <form onSubmit={ this.props.onSubmit } className="form-horizontal">
                <div className="row">
                    <div className="col-md-10">
                        <div className="form-group">
                            <input type="text" value={ this.props.value } onChange={ this.props.onChange } className="form-control" placeholder="Type a city name"></input>
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

export default SearchBarView;