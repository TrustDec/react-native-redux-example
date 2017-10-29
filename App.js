import React,{Component} from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoHome from './src/page/home/index'
import todoApp from './src/reducers/reducers'

let store = createStore(todoApp)

export default class Index extends Component {
  render(){
    return(
      <Provider store={store}>
        <TodoHome />
      </Provider>
    );
  }
}