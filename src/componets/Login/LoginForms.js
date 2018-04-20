import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

export default class LoginForm extends Component{
  render() {
    return(
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <TextInput
          placeholder="username or email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          //Control de botones una ves se complete el campo
          returnKeyType="next"
          onSubmitEditing={()=>this.passwordInput.focus()}
          keyboardType="email-addres"
          autoCapitalize="none"
          autoCorrect={false}
          style={style.input}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          //Control de botones una ves se complete el campo
          returnKeyType="go"
          style={style.input}
          ref={(input)=> this.passwordInput = input}
        />

      <TouchableOpacity style={style.buttonContainer}>
        <text style={style.buttonText}>LOGIN</text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 20
  },
  input:{
    heigth:40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer:{
    backgroundColor: '#2980b9',
    paddingVertical: 10
  },
  buttonText:{
    textAling: 'center',
    color: '#FFFFFF'
    fontWeight: '700'
  }
});
