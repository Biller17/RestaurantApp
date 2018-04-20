import React, { Component } from 'react'
import { StyleSheet, View, Image} from 'react-native'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={style.logoContainer}>
          <Image source={}/>
        </View>
        <View style={style.formContainer}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3498db'
    }
});