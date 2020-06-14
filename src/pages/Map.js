import React from 'react';
import { Box } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
  return (
    <Box height="500px">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDC0vx_VtowZQDqcxzngyDelg1ctQ0kcS0' }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        defaultZoom={11}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </Box>
  );
}

export default Map;
