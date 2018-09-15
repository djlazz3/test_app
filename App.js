import { Constants, Camera, FileSystem, Permissions, BarCodeScanner } from 'expo';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import StuffComponent from './StuffComponent'
import StatelessFunctionalComponent from './StatelessFunctionalComponent'
import CameraComponent from './CameraComponent'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CameraComponent />
        <StuffComponent visible />
        <StatelessFunctionalComponent stuff="dank memes"/>
      </View>
    );
  }
}
