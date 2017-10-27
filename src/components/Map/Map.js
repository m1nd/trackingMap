import React, { Component } from 'react';

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline
} from "react-google-maps";

const Map = withGoogleMap(
  class Wrap extends Component { 
    constructor(props) {
      super(props);
      
      this.state = {
        formattedData: [],
      };
       
    }

  componentDidMount() {
    this.getFormatData(this.props.markers);
  }

  componentWillReceiveProps() {
    this.getFormatData(this.props.markers);
  }

  getFormatData = (arr) => {
    let buffArr = [];
    arr.map((item, key) =>  { 
      buffArr.push({ lat: item[0], lng: item[1] }); 
    })
    this.setState({ formattedData: buffArr });
  }

  render() {
    
    return (
       Object.keys(this.props.position).length !== 0 ? 
          <GoogleMap
            defaultZoom={9}
            defaultCenter={this.props.position}
          >
            <Marker
              position={this.props.position}
            />
            { this.state.formattedData.map((item, key) => <Marker key={key} position={ item } /> ) }
            { <Polyline 
                path={this.state.formattedData} 
                options= {{
                  geodesic: true,
                  strokeColor: '#00BFFF',
                  strokeOpacity: 1.0,
                  strokeWeight: 5
                }} 
              />
            }
          </GoogleMap> 
          : null
    )
  }
})

export default Map;
