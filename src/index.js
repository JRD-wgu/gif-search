import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GifSearch from './components/Gif_search';

class App extends Component{
	handleQueryUpdate(query) {
		console.log(query);
	}
	render() {
		return(<div>
			<GifSearch onQueryUpdate={this.handleQueryUpdate} />
		</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('App'));
