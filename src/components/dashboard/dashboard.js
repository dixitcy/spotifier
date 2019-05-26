import React, { Component } from "react";
import "./dashboard.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, IconButton } from "@material-ui/core";
import { SearchResult , SearchBar} from "./search/Search";
import ArtistBanner from './artist-banner/ArtistBanner'
import AlbumGrid from './album-grid/AlbumGrid'
import AlbumSongs from './album-songs/AlbumSongs'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {


    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar >
			  <SearchBar></SearchBar>
			  <div style={{flex : '1'}}></div>
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
        </div>
      </div>
    );
  }
}

export default Dashboard;
