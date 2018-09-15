import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CameraComponent from "./CameraComponent";
import Location from "./Location";
import newgraph from './Utils/api'

export default class CameraWrapper extends React.Component {
  constructor(props) {
    super(props)
this.state = {
  image: null,
  location: null
}
  }

onImageTaken(image) {
  this.setState({image: image}, () => {
    attemptSubmition()
  })
}

async attemptSubmition() {
  const { image } = this.state
  if (image) {
    location = await this.getLocation()
    await newgraph(location.lat, location.lon, '', image)
  }
}

getLocationFunction(func) {
   this.getLocation = func
}

  render(){
    return(
      <View style={{flex: 1}}>
        <CameraComponent onImageTaken={this.onImageTaken}/>
        <Location
          getLocationFunction={this.getLocationFunction} />
      </View>

    )
  }
}
