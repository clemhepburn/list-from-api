import React, { Component } from 'react';
import ArtworkList from '../components/artworks/ArtworkList';
import { fetchArtworks } from '../services/articAPI';

export default class ArticArtworks extends Component {
  state = {
    artworks: [],
    loading: true,
  };

  async componentDidMount() {
    const { artworks } = await fetchArtworks();
    this.setState({
      artworks,
      loading: false,
    });
  }

  render() {
    const { artworks, loading } = this.state;

    if(loading) return <div>Loading...</div>;

    return <ArtworkList artworks={artworks} />;
  }
}
