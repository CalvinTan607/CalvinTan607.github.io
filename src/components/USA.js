import React, { Component } from 'react';

import USAMap from "react-usa-map";

class USA extends Component {
  mapHandler = (event) => {
    alert(event.target.dataset.name);
    console.log(event.target.dataset);
  };

  statesFilling = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: () => alert("Custom callback for the NJ state")
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };

  render() {
    return (
      <div className="App">
        
        <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
        
      </div>
    );
  }
}

export default USA