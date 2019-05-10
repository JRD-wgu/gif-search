import React, {Component} from 'react';
import '../styles/App.css';


class GifSearch extends Component {
    // eslint-disable-next-line react/no-typos

    constructor() {
        super();
        this.state = { query: '' }
    }
    onInputChange(query) {
        this.setState({query});
        this.props.onQueryUpdate({query});
    }





    render() {
        return (
            <div className="search">
                <input id="input" onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default GifSearch;

