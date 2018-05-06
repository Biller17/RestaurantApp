import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from "react-native-router-flux";

export default class Card extends Component {
  detail(){
    Actions.rawDetail();
    // console.warn("card pressed");
  }
  render() {
    return (
      <TouchableOpacity behavior="padding" style={styles.container} onPress={()=> {this.detail()}}>
        <View style={styles.imageContainer}>
          <Image style={styles.image}source={require('../../Images/placeholder.jpg')}/>
        </View>
          <Text style={styles.title}>Producto</Text>
      </TouchableOpacity>
  );
  }
}

const styles = StyleSheet.create({
    container:{
        height: 100,
        backgroundColor: '#1069a3',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
    },
    title:{
      color:'#FFF',
      fontSize: 20,
      textAlign: 'center',
      opacity: 0.9
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
    image:{
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    },
    imageContainer:{
      width: '30%',
      height: '100%',
      borderBottomLeftRadius: 15,
      borderTopLeftRadius: 15,
      overflow: "hidden",
      marginRight: '15%',
    }
});
