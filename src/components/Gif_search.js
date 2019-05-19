import React, {Component} from 'react';
import '../styles/App.css';
import _ from 'underscore';

// This component creates the searchbar
class GifSearch extends Component {
    constructor() {
        super();
        // initialize query as an empty string which is used to return random gifs when page is loaded
        // or when search is backspaced
        this.state = { query: '' }
    }
        // assign the state of "query" to the value of the input in the searchbar
        // pass the value of state : query to index.js to make API requests
        // this function depends on debounceQuery
    onInputChange(query) {
        this.setState({query : query});
        this.props.onQueryUpdate({query});
    }
        // Sets a timer every time input changes
        // calls onInputChange after timeout has expired, with last argument passed to it.
        // timer resets with each invocation. It prevents large amounts of requests in a short period of time
    debounceQuery = _.debounce((this.onInputChange), 350);



    render() {
        return (
            <div className="search">
                <input id="input" onChange={event => this.debounceQuery(event.target.value)} />
            </div>
        );
    }
}

export default GifSearch;

