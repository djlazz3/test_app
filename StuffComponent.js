import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class StuffComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stuffText: 'Original Stuff Text'
    }

    this.whenButtonPressed = this.whenButtonPressed.bind(this)
  }

  whenButtonPressed(event) {
    this.setState({
      stuffText: 'Not the original Text'
    })
  }

  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        {
          this.props.visible ?
            <Text>{this.state.stuffText}</Text>
            : null
        }
        <Button onPress={this.whenButtonPressed} title="Change stuffText" />
      </View>
    );
  }
}
