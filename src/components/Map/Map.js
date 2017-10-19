import React from 'react';


const Map = (props) => ( 
  <div className="col col-lg-6">
    <button type="button" className="btn btn-primary">Primary</button>
    <h5>
        Latitude: { props.position.latitude } | Longitude: { props.position.longitude }
    </h5>            
  </div>
            
)

export default Map;