import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString : ''
        }
    }
    
    handleChange = (e) => {
        console.log(e);
        this.setState({searchString : e.target.value});
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="search" />
                <SearchResult></SearchResult>
            </div>
        )
    }
}


export const SearchBar = (props) => (
    <input type="text" onKeyPress={props.handleKeyPress} value={props.searchText} onChange={props.handleChange} placeholder="search" />
)

export const SearchResult = (props) => (
    <div>Search results</div>
)
