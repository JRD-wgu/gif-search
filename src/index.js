import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GifSearch from './components/Gif_search';
import GifList from './components/GifList';
import request from 'superagent';
//import Throttle from 'superagent-throttle';


// Commented out the throttle below as it is more efficient/performant to throttle the updating of "query" state

// let queryLimiter = new Throttle({
//   active: true,     // set false to pause queue
//   rate: 1,          // how many requests can be sent every `ratePer`
//   ratePer: 500,   // number of ms in which `rate` requests may be sent
//   concurrent: 3     // how many requests can be sent concurrently
// })
class App extends Component {
    // gifs state is an array holding the ID and the mp4 img source of the searched for gifs
    constructor() {
        super();
        this.state = {
            gifs: []
        };
        this.handleQueryUpdate = this.handleQueryUpdate.bind(this);
    }
    // this function runs as soon as the page loads, returning 3 random Gifs.
    // Loops through an array 3 times, as random gif API endpoint only returns a single gif
    componentDidMount() {
        const randomGifs = [];
        for (let i = 0; i < 3; i++) {
            request.get("https://api.giphy.com/v1/gifs/random?api_key=L80T6AbTm5TWhPsG1N2k9CVWup8R8JJv", (err, res) => {
                randomGifs.push(res.body.data);
                this.setState({gifs: randomGifs})
            })
        }
    }
    // handleQueryUpdate runs every time the content of the searchbar changes.
    handleQueryUpdate(query) {

        // Access the value of the argument passed, and convert to string
        let queryString = Object.values(query).toString();

        // replace the spaces in the search with '+' and pass into the query string to make the API request
        queryString = queryString.replace(/\s/g, '+');
        let url = `https://api.giphy.com/v1/gifs/search?api_key=L80T6AbTm5TWhPsG1N2k9CVWup8R8JJv&q=${queryString}&limit=9`;

        // if the string has been erased or the page reloaded, get 3 random Gifs
        if (queryString === "") {
            this.componentDidMount();

        //make a request based on user's search and store the response in gifs
        } else {
            request
            .get(url) 
            .end((err, res) => {
                //console.log(res.body.data);
                this.setState({gifs: res.body.data});
            })
        
            
        }
    }


    render() {

        return (
            <div>
                <div id={"header"}>
                    <h1 id={"title"}> Giphy Grabber</h1>
                </div>
                <div>
                    <GifSearch onQueryUpdate={query => this.handleQueryUpdate(query)} />
                </div>
                <GifList gifs={this.state.gifs}/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('App'));