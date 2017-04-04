import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

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

const votersCount = 2;

export default class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = { votes: [], user: '' };
  }

  static propTypes = {
    style: PropTypes.any,
    choices: PropTypes.array,
    user: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    choices: [],
    user: '',
  };

  onPressChoice(choice) {
    console.log(choice);
  }

  choiceSelected(choice) {
    console.log(choice);
    return true;
  }

  render() {
    const {
      choices,
      user,
    } = this.props;

    const screenWidth = Dimensions.get('window').width;
    let graphWidth;
    if (Platform.OS === 'ios') {
      graphWidth = screenWidth - (16 * 3) - (8 * 2) - 40 - 4;
    } else {
      graphWidth = screenWidth - (16 * 3) - (8 * 2) - 40 - 2;
    }

    return (
      <View>
        {choices.map(choice => (
          <View style={styles.rowContainer}>
            <TouchableOpacity
              disabled
              style={styles.avatar}
              onPress={() => this.onPressChoice(choice)}
            >
              <View style={styles.check} backgroundColor={this.choiceSelected(choice) ? '#20B2AA' : '#E4E5EB'} />
            </TouchableOpacity>

            <View
              style={styles.container}
              onLayout={(event) => {
                const { width } = event.nativeEvent.layout;
                this.setState({ graphWidth: width });
              }}
            >
              <View style={styles.barContainer}>
                <View style={[styles.bar, { width: (choice.votes.length / votersCount) * graphWidth }]} />
                <Text
                  style={[styles.barItem, { width: graphWidth - 38 }]}
                  numberOfLines={2}
                  ellipsizeMode={'tail'}
                >
                  {choice.title}
                </Text>
                <Text style={[styles.pollsCount]}>{choice.votes.length}</Text>
              </View>
            </View>
          </View>
          ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row',
  },
  barContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  bar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#E4E5EB',
  },
  barItem: {
    fontSize: 14,
    marginVertical: 6,
    paddingLeft: 8,
    backgroundColor: 'transparent',
  },
  check: {
    width: 20,
    height: 20,
  },
});
