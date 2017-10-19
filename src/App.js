import React, { Component } from 'react';
import Sortable from 'react-sortablejs';

import List from './components/List/List';
import Map from './components/Map/Map';
import { getData } from './api';

class App extends Component {

  state = {
    items: getData(),
    position: {} 
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => 
                                                this.setState({ position:  { 
                                                                              latitude: pos.coords.latitude, 
                                                                              longitude: pos.coords.longitude 
                                                                            }
                                                                }))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-lg-6">
                <Sortable
                  tag="ul" // Defaults to "div"
                  onChange={(order, sortable, evt) => { this.setState({ items: order }) }}
                >
                  <List store={this.state.items}/>  
                </Sortable>
          </div>
          <Map position={this.state.position} />
        </div>
      </div>
    );
  }
}

export default App;
