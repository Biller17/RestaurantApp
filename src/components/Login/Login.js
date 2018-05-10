import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View // Container component
} from "react-native";
import { StackNavigator } from "react-navigation";
import Spinner from "react-native-loading-spinner-overlay";
import {Actions} from "react-native-router-flux";
import {logUser, isLoggedIn} from '../API/APICommunication.js';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loggedin: false,
      checkingUser: false
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };

  componentDidMount() {
    this.setState({
      checkingUser: true,
    })
    let logAction = function login(){
      this.setState({
        checkingUser: false,
      })
      Actions.nav();
    }.bind(this)
    AsyncStorage.getItem('userToken').then((value) => {
      if(value !== null){
        isLoggedIn(value, logAction);
              // var newUID = this.generateUID()
              // AsyncStorage.setItem('UID', newUID);
      }
    }).done();
  }

  async onLoginPress() {
    const { email, password } = this.state;

    let callback = function setToken(token){
      try {
        AsyncStorage.setItem('userToken', token);
      } catch (error) {
        console.warn("error al guardar el token");
      }
      this.setState({
        loggedin: true
      });
      Actions.nav();
    }.bind(this)
    logUser(email, password, callback);
  }

  register(){
    Actions.register();
  }


  renderlogInScreen(){
    if(this.state.checkingUser){
      return(
        <View style={styles.loadContainer}>
          <Image style={styles.load} source={require("../../Images/foodLoader.gif")} />
          <Text style={styles.title}>Loading...</Text>
        </View>
      );
    }
    else{
      return (
        <View style={styles.container}>
          <View behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require("../../Images/logoRestaurante.png")} />
              <Text style={styles.title}>PaCompartir</Text>
            </View>
            <KeyboardAvoidingView style={styles.keyboard}>
              <TextInput
                placeholder="Username"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
                autoCorrect={false}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                ref={input => (this.passwordInput = input)}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />

              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this.onLoginPress.bind(this)}
              >
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => this.register()}>
            <Text
              style={styles.buttonText}
              title="Sign up"
            >
              Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate("ForgetPassword.js")}
              title="Forget Password"
            >
              Forget Password
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }


  render() {
    return (
      <View style={styles.container}>
        {this.renderlogInScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 200
  },
  subtext: {
    color: "#ffffff",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8
  },
  keyboard:{
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#307db0",
    paddingVertical: 10
  },
  button2: {
    backgroundColor: "#246a99",
    paddingVertical: 10
  },
  input:{
    height:40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  loadContainer:{
    flex:1 ,
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  load:{
    marginTop: 50,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  title:{
    color:'#FFF',
    fontSize: 50,
    marginTop: 15,
    textAlign: 'center',
    opacity: 0.8
  },
});

AppRegistry.registerComponent("Login", () => Login);
