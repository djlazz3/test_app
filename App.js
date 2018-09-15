import { Constants, Camera, FileSystem, Permissions, BarCodeScanner } from 'expo';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import StuffComponent from './StuffComponent'
import StatelessFunctionalComponent from './StatelessFunctionalComponent'
import CameraComponent from './CameraComponent'
<<<<<<< HEAD
import SketchComponent from './SketchComponent'
=======
import Location  from './Location'
<<<<<<< HEAD
>>>>>>> fd385e0cd2e61a6d6dae236233a0a50e9b5220d8
=======
import haeding from './heading'
>>>>>>> rami_branch2

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>

        <Location />
        <heading />
        <CameraComponent />
<<<<<<< HEAD
        <SketchComponent />
        <StuffComponent visible />
        <StatelessFunctionalComponent stuff="dank memes"/>
=======


>>>>>>> rami_branch2
      </View>
    );
  }
}
