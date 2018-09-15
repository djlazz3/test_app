import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import StuffComponent from './StuffComponent'
import StatelessFunctionalComponent from './StatelessFunctionalComponent'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StuffComponent visible />
        <StatelessFunctionalComponent stuff="dank memes"/>
      </View>
    );
  }
}
