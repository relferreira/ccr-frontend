import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: -19.912998,
      lng: -43.940933,
    },
    zoom: 15,
  };

  render() {
    return (
      <Box height="700px">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-19.912998}
            lng={-43.940933}
            text="My Marker"
          />
        </GoogleMapReact>
      </Box>
    );
  }
}

export default Map;
