import React, { Component } from "react";
import "./dashboard.css";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import { SearchResult , SearchBar} from "./search/Search";
import ArtistBanner from './artist-banner/ArtistBanner'
import AlbumGrid from './album-grid/AlbumGrid';
import AlbumSongs from './album-songs/AlbumSongs';
import TrackPlayer from './track-player/TrackPlayer';
import {searchSpotify} from '../../services/api.spotify';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
			searchString : ''
	};
	}
	handleChange = (e) => {
		console.log(e.target.value);
		e.preventDefault();
		this.setState({searchString : e.target.value});
}
handleKeyPress = (e) => {
	console.log(e);
	if(e.key === 'Enter'){
		console.log('ENTER');
		// call search api
		searchSpotify(this.state.searchString)
	}
}

  render() {


    return (
      <div>
        <AppBar position="static" color="white">
          <Toolbar >
						<div style={{flex : '1 1 25%'}}>
						<SearchBar handleKeyPress={this.handleKeyPress} handleChange={this.handleChange} searchText={this.state.searchString} ></SearchBar>
						</div>
			  
			  <div style={{flex : '3 3 75%'}}></div>
		  </Toolbar>
        </AppBar>
        <div className="dash-container">
          <div className="search-container">
            <SearchResult />
          </div>
		  <div className="artist-container">
			  <div className="artist-banner">
			  	<ArtistBanner></ArtistBanner>
			  </div>
			  
			  <div className="album-container">
				  <div className="album-grid">
					<AlbumGrid></AlbumGrid>
				  </div>
				  <div className="album-songs">
					<AlbumSongs></AlbumSongs>
				  </div>
			  </div>
		  </div>
		  <div className="track-player">
			  <TrackPlayer></TrackPlayer>
		  </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
