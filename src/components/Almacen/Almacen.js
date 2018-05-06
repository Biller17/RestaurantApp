import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from "react-native-router-flux";
import Card from '../Common/Card';

export default class Almacen extends Component {
  newProduct(){
    Actions.newRaw();
  }
  render() {
    return (
      <KeyboardAvoidingView benhavior="padding" style={styles.container}>
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.logoContainer}>
              <Text style={styles.title}>Almacen</Text>
            </View>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </ScrollView>
          <TouchableOpacity onPress={()=> {this.newProduct()}}style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Nueva materia prima</Text>
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
