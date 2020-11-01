import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
      //  this.props.onFormSubmit(this.state.term)
    };

    // onFormSubmit = event => {
    //     event.preventDefault();

    //     this.props.onFormSubmit(this.state.term);
    // };

    render() {
        return (
        <div className="search-bar ui segment">
            <form onSubmit={this.props.onFormSubmit(this.state.term)} className="ui form">
                <div className="field">
                    <label>User Search</label>
                    <input
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                </div>
                {/* <div className="field">
                    <input type="submit" value="Find" />
                </div> */}
            </form>
        </div>
        );
    }
}

export default SearchBar;
