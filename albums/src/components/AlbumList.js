import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  //empty state
  state = {
    albums: []
  };
  //now call my endpoint
  componentWillMount() {
    axios.get( 'http://localhost:3000/albums.json' )
      .then( responds => this.setState( {
        albums: responds.data
      } ) );
  }

  renderAlbums() {
    //yay!! data.. lets get to it mang..
    return this.state.albums.map( album => <AlbumDetail key={ album.title } album={ album } /> );
  }

  render() {
    return (
    //keep this cat dynamic and generic
    <ScrollView>
      { this.renderAlbums() }
    </ScrollView>
    );
  }

}

export default AlbumList;
