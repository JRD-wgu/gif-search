import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GifSearch from './components/Gif_search';
import GifList from './components/GifList';
//import 'axios';
import request from 'superagent';


//const axios = require('axios');

class App extends Component {

	constructor() {
		super();
		this.state = {
			gifs: []
		};
		this.handleQueryUpdate = this.handleQueryUpdate.bind(this);
	}

	componentDidMount() {
		const randomGifs = [];
		for (let i = 0; i < 3; i++) {
			request.get("https://api.giphy.com/v1/gifs/random?api_key=L80T6AbTm5TWhPsG1N2k9CVWup8R8JJv", (err, res) => {
				randomGifs.push(res.body.data);
				this.setState({gifs: randomGifs})
			})
			}

	}

	handleQueryUpdate(query) {
		console.log(query);
		let queryString = Object.values(query).toString();
		queryString = queryString.replace(/\s/g, '+');
		let url = `https://api.giphy.com/v1/gifs/search?api_key=L80T6AbTm5TWhPsG1N2k9CVWup8R8JJv&q=${queryString}&limit=9`;

		if (queryString === "") {
			this.componentDidMount();
		} else {
			request.abort();
			request.get(url, (err, res) => {
				console.log(res.body.data);
				this.setState({gifs: res.body.data});
			})
		}
	}
				// axios.get(url)
				// 	.then = (res) => {
				// 		// this.setState({gifs: res.data.data});
				// 		console.log(res.data.data);
				//
				// }




	render() {

		return (
			<div>
				<div id={"header"}>
					<h1 id={"title"}> Giphy Grabber</h1>
				</div>
					<div>
					<GifSearch onQueryUpdate={query => this.handleQueryUpdate(query)}/>
				</div>
					<GifList gifs={this.state.gifs}/>
			</div>
		);
		}
}


ReactDOM.render(<App />, document.getElementById('App'))
