import { Constants, Camera, FileSystem, Permissions, BarCodeScanner } from 'expo';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import StuffComponent from './StuffComponent'
import StatelessFunctionalComponent from './StatelessFunctionalComponent'
import CameraComponent from './CameraComponent'
import Location  from './Location'
import haeding from './heading'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>

        <Location />
        <heading />
        <CameraComponent />


      </View>
    );
  }
}
