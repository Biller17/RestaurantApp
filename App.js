import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage
} from 'react-native';

import Login from './src/components/Login/Login'
import Navigation from './src/components/Navigation'
import NewRawMaterial from './src/components/Almacen/NewRawMaterial'
import NewDish from './src/components/Platillos/NewDish'
import NewRecipe from './src/components/Recetas/NewRecipe'

import {Scene, Router} from 'react-native-router-flux';

export default class App extends Component<{}> {

  constructor() {
    super()
  }


  render() {
    return <Router>
      <Scene key="Root">
        <Scene key="login" component={Login} hideNavBar/>
        <Scene key="nav" component={Navigation} hideNavBar/>
        <Scene key="newRaw" component={NewRawMaterial} hideNavBar/>
        <Scene key="newDish" component={NewDish} hideNavBar/>
        <Scene key="newRecipe" component={NewRecipe} hideNavBar/>
      </Scene>
    </Router>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});
