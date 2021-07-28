/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ArtworkDetail from '../components/artworks/ArtworkDetail';
import { fetchByArtwork } from '../services/articAPI';

export default class ArtDetail extends Component {
    state = {
      artwork: null,
      loading: true,
    };

    async componentDidMount() {
      
      const { match } = this.props;
      
      const character = await fetchByArtwork(match.params.id);
      this.setState({ character, loading: false });
    }

    render() {
      const { artwork, loading } = this.state;
      console.log(this.props);
      if(loading) return <h1>Loading...</h1>;

      return <ArtworkDetail {...artwork}/>;
    }
}
