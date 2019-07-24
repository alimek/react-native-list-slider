/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Slider from '../src/index';

const App = () => {
  const [value, setValue] = useState(10);

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <View>
          <TouchableOpacity
            onPress={() => setTimeout(() => setValue(20), 2000)}
          >
            <Text>Change Value to 20 with Delay</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setValue(25)}
          >
            <Text>Change Value to 25 now</Text>
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>{value}</Text>
          <Slider value={value} onValueChange={setValue} multiplicity={1} />
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    color: Colors.black
  }
});

export default App;
