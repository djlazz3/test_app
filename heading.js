const{DeviceEventEmitter} = require ('react-native');
const RactNativeHeading = require('react-native-heading');

componentDidMount(){
  ReactNativeHeading.start(1).then(didStart => {

    this.setState({
      headingIsSuppoorted: didStart,
    })
  })
   DeviceEventEmitter.addListener('headingUpdated', data => {

     console.log('new heading is:', data.heading);
   });
}
componentWillUnmount(){
  ReactNativeHeading.stop();
  DeviceEventEmitter.removeAllListeners('headingUpdated')

}
