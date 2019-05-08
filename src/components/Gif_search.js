import React, {Component} from 'react';

class GifSearch extends Component {
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
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default GifSearch;