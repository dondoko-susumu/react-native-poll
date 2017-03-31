import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Poll from 'react-native-poll';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Poll />
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
