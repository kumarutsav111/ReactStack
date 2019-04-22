/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common';
import LibraryList from './components/LIbraryLIst'
const App = () => {
  return (
    <Provider store = {createStore(reducers)}>
    <View style = {{flex: 1}}>
      <Header headerText = "React Stack"/>
      <LibraryList/>
    </View>
    </Provider>
  )
}

export default App;