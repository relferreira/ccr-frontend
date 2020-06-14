import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.955413,
      lng: 30.337844,
    },
    zoom: 11,
  };

  render() {
    console.log(this.props);
    return (
      <Box height="500px">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </Box>
    );
  }
}

export default Map;
