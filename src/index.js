import React, { Component } from 'react';
import ReactDOM from 'react';
import Search from './components/Search';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';

const API = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1n027DPO_5Ss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'state' }, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <Search />
                <VideoDetails video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));