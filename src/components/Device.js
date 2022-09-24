import React from 'react';
import DeviceDetails from './DeviceDetails/DeviceDetails';

const Device = (props) => {
    return (
        <div>
            <h1>Device Name: {props.name}</h1>
            <DeviceDetails price="100"></DeviceDetails>
        </div>
    );
};

export default Device;