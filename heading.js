import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FileSystem, FaceDetector, MediaLibrary, Permissions } from 'expo';

export default class heading extends React.Component {
  const DeviceEventEmitter = require ('react-native');
  const RactNativeHeading = require('react-native-heading');

  componentDidMount() {
    ReactNativeHeading.start(1)
    .then(didStart => {
      this.setState({
        headingIsSuppoorted: didStart,
      })
    })
     DeviceEventEmitter.addListener('headingUpdated', data => {
       console.log('New heading is:', data.heading);
     });
  }
  componentWillUnmount(){
    ReactNativeHeading.stop();
    DeviceEventEmitter.removeAllListeners('headingUpdated');
  }
}
