import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GifSearch from './components/Gif_search';
import GifList from './components/GifList';
<<<<<<< HEAD

=======
import './styles/App.css';
>>>>>>> 89043635daa9ac3142c874278af7e9c47aaaf8c6
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

<<<<<<< HEADc
	componentDidMount() {
	 	request.get("https://api.giphy.com/v1/gifs/trending?api_key=L80T6AbTm5TWhPsG1N2k9CVWup8R8JJv&limit=25&rating=R", (err, res) => {
	 		this.setState({gifs: res.body.data})})
	}
=======
	// componentDidMount() {
	// 	request.get("https://api.giphy.com/v1/gifs/random?api_key=L80T6AbTm5TWhPsG1N2k9CVWup8R8JJv", (err, res) => {
	// 		this.setState({gifs: res.body.data})})
	// }
>>>>>>> 89043635daa9ac3142c874278af7e9c47aaaf8c6

	handleQueryUpdate(query) {
		console.log(query);
		let queryString = Object.values(query).toString();
		queryString = queryString.replace(/\s/g, '+');
		const url = `https://api.giphy.com/v1/gifs/search?api_key=L80T6AbTm5TWhPsG1N2k9CVWup8R8JJv&q=${queryString}&limit=9`;

<<<<<<< HEAD



=======
		if (queryString === null) {
			let url = `https://api.giphy.com/v1/gifs/random?api_key=L80T6AbTm5TWhPsG1N2k9CVWup8R8JJv&tag=random&rating=R`;
			request.get(url, (err, res) => {
				this.setState({gifs: res.body.data});
				console.log(query)
			})
		} else {
>>>>>>> 89043635daa9ac3142c874278af7e9c47aaaf8c6
			request.get(url, (err, res) => {
				console.log(res.body.data);

				this.setState({gifs: res.body.data});
			})
		}
<<<<<<< HEAD

=======
	}
>>>>>>> 89043635daa9ac3142c874278af7e9c47aaaf8c6
				// axios.get(url)
				// 	.then = (res) => {
				// 		// this.setState({gifs: res.data.data});
				// 		console.log(res.data.data);
				//
				// }




	render() {

<<<<<<< HEAD
		// this.setState({gifs: ""});
=======
>>>>>>> 89043635daa9ac3142c874278af7e9c47aaaf8c6
		return (
			<div>
				<div id={"header"}>
					<h1> Giphy Grabber</h1>
					<GifSearch onQueryUpdate={query => this.handleQueryUpdate(query)}/>
				</div>
				<div>

					<GifList gifs={this.state.gifs}/>
				</div>
			</div>
		);
		}
}


ReactDOM.render(<App />, document.getElementById('App'))