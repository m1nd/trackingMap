import React, { Component } from 'react';

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Map = withGoogleMap(
  class Wrap extends Component { 
  
  render() {
    return (
       Object.keys(this.props.position).length !== 0 ? 
          <GoogleMap
            defaultZoom={8}
            defaultCenter={this.props.position}
          >
            <Marker
              position={this.props.position}
            />
          </GoogleMap> 
          : null
    )
  }
})

export default Map;
