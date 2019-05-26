import React, { Component } from 'react'

export default class AlbumSongs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs : [
                {
                    name : 'song 1',
                },
                {
                    name : 'song 2',
                }
            ]
        }
    }
    
    render() {
        return (
            <div>
                {this.state.songs && 
                    <ul>
                        {this.state.songs.map((song) => {
                            return <li>
                                song.name
                            </li>
                        })}
                    </ul>
                }
            </div>
        )
    }
}
