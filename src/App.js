/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import {provider, Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common';
import LibraryList from './components/LIbraryLIst'
const App = () => {
  return (
    <Provider store = {createStore(reducers)}>
    <View>
      <Header headerText = "React Stack"/>
      <LibraryList/>
    </View>
    </Provider>
  )
}

export default App;