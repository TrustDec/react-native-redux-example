import React, { Component } from 'react';
import {View,Text} from 'react-native';
import PropTypes from 'prop-types';
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    return (
      <View>
        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
                key={index}
                onPress={() => this.props.onTodoClick(index)} />
        )}
      </View>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}