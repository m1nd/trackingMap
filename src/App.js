import React, { Component } from 'react';
import Sortable from 'react-sortablejs';

import Input from './components/Input/Input';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getData } from './api';

let data = getData();

class App extends Component {

  state = {
    items: data,
    position: {} 
  }

  addItem = item => {
    data = [...data, item];
     this.setState({ items: data});
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => 
                                                this.setState({ position:  { 
                                                                              lat: pos.coords.latitude, 
                                                                              lng: pos.coords.longitude 
                                                                            }
                                                                }))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-lg-6">
                <Input add={this.addItem}/>
                <Sortable
                  tag="ul" // Defaults to "div"
                  onChange={(order, sortable, evt) => { this.setState({ items: order }) }}
                >
                  <List store={this.state.items}/>  
                </Sortable>
          </div>
          <div className="col col-lg-6">
            <Map  position={this.state.position}
                  containerElement={<div style={{ height: `400px` }} />} 
                  mapElement={<div style={{ height: `100%` }} />} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
