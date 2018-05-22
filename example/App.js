// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Slider from 'react-native-infinity-list-slider';

type Props = {};
export default class App extends Component<Props> {
  state = {
    value: 2.6,
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>{this.state.value}</Text>
        </View>
        <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
