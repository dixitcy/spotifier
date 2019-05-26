import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <SearchBar></SearchBar>
                <SearchResult></SearchResult>
            </div>
        )
    }
}


export const SearchBar = (props) => (
    <input type="text" placeholder="search" />
)

export const SearchResult = (props) => (
    <div>Search results</div>
)
