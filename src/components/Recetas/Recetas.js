import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from "react-native-router-flux";

export default class Recetas extends Component {
  newProduct(){
    Actions.newRecipe();
  }
  render() {
    return (
      <KeyboardAvoidingView benhavior="padding" style={styles.container}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.title}>Recetas</Text>
          </View>
          <TouchableOpacity onPress={()=> {this.newProduct()}}style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Nueva receta</Text>
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
    }
});
