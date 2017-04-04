import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Poll from 'react-native-poll';

const choices = [
  {
    title: 'aaa',
    votes: [
      {
        name: 'user1',
      },
    ],
  },
  {
    title: 'bbb',
    votes: [
      {
        name: 'user1',
      },
      {
        name: 'user2',
      },
    ],
  },
];

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Poll choices={choices} user={'user1'} />
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
