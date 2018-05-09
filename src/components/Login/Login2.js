import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForms';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView benhavior="padding" style={styles.container}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../Images/logoRestaurante.png')}
            />
          </View>
          <View style={styles.formContainer}>
            <LoginForm/>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer:{
      height: '1%',
      width: '1%',
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
    },
    logo:{
      width: 20,
      height: 20
    },
    title:{
      color:'#FFF',
      marginTop: 10,
      width: 160,
      textAlign: 'center',
      opacity: 0.8
    }
});
