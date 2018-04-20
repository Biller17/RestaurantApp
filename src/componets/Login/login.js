import React, { Component } from 'react';
import { StyleSheet, View, Image, keyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForms';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView benhavior="padding" style={styles.container}>
        <View style={styles.container}>
          <View style={style.logoContainer}>
            <Image
              source={required('../../Images/logoRestaurante.png')}
            />
            <text style={styles.title}>Una app de restaurante hecha en React Native </text>
          </View>
          <View style={style.formContainer}>
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
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
    },
    logo:{
      width: 100,
      heigth: 1000
    },
    title:{
      color:'#FFF'
      marginTop: 10,
      width: 160,
      textAling: 'center',
      opacity: 0.8
    }
});
