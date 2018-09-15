import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const StatelessFunctionalComponent = (props) => {

  return (
    <View>
      <Text>I dont have state {props.stuff}</Text>
    </View>
  )
}

export default StatelessFunctionalComponent
