import React, { Component } from 'react';
import Sortable from 'react-sortablejs';

import Input from './components/Input/Input';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getData } from './api';

class App extends Component {

  state = {
    items: getData(),
    position: {} 
  }

  addItem = item => {
    const newdata = [...this.state.items, item];
    this.setState({ items: newdata });
  }

  changeList = item => {
    const newData = this.state.items.filter((i, key) =>  key !== item);
    this.setState({ items: newData });
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
                  <List store={this.state.items} changeList={ item => this.changeList(item) }/>  
                </Sortable>
          </div>
          <div className="col col-lg-6">
            <Map  position={this.state.position}
                  containerElement={<div style={{ height: `400px` }} />} 
                  mapElement={<div style={{ height: `100%` }} />} 
                  markers={this.state.items}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
