import React, { Component } from 'react'
import {View,Text} from 'react-native';
import PropTypes from 'prop-types';

export default class Todo extends Component {
  render() {
    return (
      <Text
        onPress={this.props.onPress}
        style={{
            textDecorationLine: this.props.completed ? 'line-through' : 'none',
          //cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.text}
      </Text>
    )
  }
}

Todo.propTypes = {
    onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}