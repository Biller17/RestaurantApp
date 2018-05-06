import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

export default class NewRawMaterial extends Component {
  newProduct(){
    Actions.pop();
  }
  render() {
    return (
      <KeyboardAvoidingView benhavior="padding" style={styles.container}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.title}>Crear materia prima</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Nombre"
              placeholderTextColor="rgba(255,255,255,0.7)"
              //Control de botones una ves se complete el campo
              returnKeyType="next"
              onSubmitEditing={()=>this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
            <TextInput
              placeholder="Cantidad"
              placeholderTextColor="rgba(255,255,255,0.7)"
              //Control de botones una ves se complete el campo
              returnKeyType="next"
              onSubmitEditing={()=>this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
            <TextInput
              placeholder="Precio"
              placeholderTextColor="rgba(255,255,255,0.7)"
              //Control de botones una ves se complete el campo
              returnKeyType="next"
              onSubmitEditing={()=>this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
            <TextInput
              placeholder="Caducidad"
              placeholderTextColor="rgba(255,255,255,0.7)"
              //Control de botones una ves se complete el campo
              returnKeyType="next"
              onSubmitEditing={()=>this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
            <TextInput
              placeholder="Categoria"
              placeholderTextColor="rgba(255,255,255,0.7)"
              //Control de botones una ves se complete el campo
              returnKeyType="next"
              onSubmitEditing={()=>this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Crear</Text>
          </TouchableOpacity>
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
      flex:1 ,
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
    },
    logo:{
      width: 100,
      height: 1000
    },
    title:{
      flex:1,
      color:'#FFF',
      fontSize: 50,
      marginTop: 15,
      textAlign: 'center',
      opacity: 0.8
    },
    buttonContainer:{
      backgroundColor: '#2980b9',
      paddingVertical: 10
    },
    buttonText:{
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
    },
    input:{
      height:40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 20,
      color: '#FFF',
      paddingHorizontal: 10
    },
    inputContainer: {
      padding: 20
    }
});
