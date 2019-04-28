# react-native-list-slider

 List slider for React Native - Pure JS Slider base on FlatList. `Android` and `iOS` platform supported. Tested on `RN` version `0.55.x`.

 ![2018-05-15 23-13-00](https://thumbs.gfycat.com/PowerfulMarriedAssassinbug-max-1mb.gif)

 # Props

 | Property | Type | Default | Description |
 |----------|------|---------|-------------|
 | value | `Number` | required | Default value which will be used. |
 | onValueChange | `Function` | required | Callback called on every value changed. `value: Number` as parameter.|
 | multiplicity | `Number` | `0.1` |  |
 | decimalPlaces | `Number` | `1` |  |
 | arrayLength | `Number` | 10000 |  |
 | renderThumb | `Function` | optional | Function to render thumb - middle component which is fixed |
 | thumbStyle | `Object` | optional | You can pass your style to overwrite default one |
 | mainContainerStyle | `Object` | optional | You can pass your style to overwrite default container style |
 | itemStyle | `Object` | optional | You can pass your style to overwrite default item style |
 | tenthItemStyle | `Object` | optional | You can pass your style to overwrite active item style |
 | shouldMoveSlider | `boolean` | `false` | If `true` is passed, next update will change offset on `Flatlist` |
 | scrollEnabled | `boolean` | `true` | Is enabled to scroll or not |
 | initialPositionValue | `number` | `undefined` | value of 1st element |
 | maximumValue | `number` | `undefined` | max value to achieve |

 # How to use it

 ```js
 import React, { Component } from 'react';
 import ReactNative from 'react-native';
 import RNListSlider from 'react-native-list-slider';

 const {
   View,
   Text,
   StyleSheet,
 } = ReactNative;

 export default class App extends Component {
   state = {
     value: 0,
   };

   onValueChanged = value => this.setState({ value });

   render() {
     return (
       <View style={styles.container}>
         <View>
           <Text>Value: {this.state.value}</Text>
         </View>
         <RNListSlider
           value={this.state.value}
           onValueChange={this.onValueChanged}
         />
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
 });
 ```
 # Example

 ```bash
 $ cd example
 $ yarn
 $ react-native run-ios
 ```

 # License

 MIT
