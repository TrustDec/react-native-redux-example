import React,{Component} from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Home from './Home'
import todoApp from './reducers'

let store = createStore(todoApp)

export default class Index extends Component {
  render(){
    return(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}