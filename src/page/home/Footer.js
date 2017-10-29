import React, { Component } from 'react';
import {View,Text,Button} from 'react-native';
import PropTypes from 'prop-types';

export default class Footer extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name
    }

    return (
      <Text onPress={e => {
        e.preventDefault()
        this.props.onFilterChange(filter)
      }}>
        {name}
      </Text>
    )
  }

  render() {
    return (
      <View>
        <Text>Show:</Text>
        <View style={{flexDirection:'row',width:300,justifyContent:'space-between'}}>
            <Text>{this.renderFilter('SHOW_ALL', 'All')}</Text>
            <Text>{this.renderFilter('SHOW_COMPLETED', 'Completed')}</Text>
            <Text>{this.renderFilter('SHOW_ACTIVE', 'Active')}</Text>
        </View>
      </View>
    )
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}