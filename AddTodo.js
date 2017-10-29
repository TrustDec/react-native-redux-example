import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {View,Text,TextInput,Button} from 'react-native';
export default class AddTodo extends Component {
  render() {
    return (
      <View >
        <TextInput  ref={ref=>this.input = ref} style={{height:40,width:300,borderWidth:1,borderColor:'red'}}/>
        <Button title={'Add'} color={'#188eee'} onPress={(e)=>this.handleClick(e)}/>
      </View>
    )
  }

  handleClick(e) {
    let test = this.input;
    const text = test._lastNativeText.trim();
    this.props.onAddClick(text);
    this.input.clear();
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}