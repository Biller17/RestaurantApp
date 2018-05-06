import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from "react-native-router-flux";
import Card from '../Common/Card';

export default class RawMaterialDetail extends Component {
  newProduct(){
    Actions.pop();
  }
  render() {
    return (
      <KeyboardAvoidingView benhavior="padding" style={styles.container}>
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.detailContainer}>
              <Text style={styles.title}>Producto</Text>

              <Image style={styles.image}source={require('../../Images/placeholder.jpg')}/>
              <Text style={styles.textDetail}>Detalle del producto</Text>
              <Text style={styles.textDetailSec}>Detalle del producto secundario</Text>
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={()=> {this.newProduct()}}style={styles.button}>
              <Text style={styles.buttonText}>Regresar a la lista</Text>
            </TouchableOpacity>
          </View>
      </View>
    </KeyboardAvoidingView>
  );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center'

    },
    detailContainer:{
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
      marginTop: 30,
      marginBottom: 30,
      textAlign: 'center',
      opacity: 0.8
    },
    button:{
      flex:1,
      backgroundColor: '#2980b9',
      paddingVertical: 10
    },
    buttonContainer:{
      flexDirection:'row',
    },
    buttonText:{
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
    },
    image:{
      width: 200,
      height: 200,
      borderRadius: 100

    },
    textDetail:{
      flex:1,
      color:'#FFF',
      fontSize: 30,
      textAlign: 'center',
    },
    textDetailSec:{
      flex:1,
      color:'#FFF',
      fontSize: 20,
      textAlign: 'center',
      opacity: 0.8
    }
});
