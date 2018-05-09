import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";

import { StackNavigator } from "react-navigation";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      password_confirmation: ""
    };
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    }
  };

  async onRegisterPress() {
    const { email, password, name } = this.state;
    console.log(email);
    console.log(name);
    console.log(password);
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("name", name);
    await AsyncStorage.setItem("password", password);
    this.props.navigation.navigate("Boiler");
  }

  renderError(){
    if(this.state.password != this.state.password_confirmation){
      return(
        <View>
          <Text style={styles.error}>Passwords don't match</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.subtext}>Sign Up</Text>

        <KeyboardAvoidingView>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            style={styles.input}
            placeholder="John Doe"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
          />
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.input}
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            ref={input => (this.emailInput = input)}
            onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="johnny@falsemail.com"
          />
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            onChangeText={password => this.setState({ password })}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.7)"
            onSubmitEditing={() => this.passwordInput.focus()}
            returnKeyType="next"
            secureTextEntry
          />
          <TextInput
            onChangeText={password_confirmation => this.setState({ password_confirmation })}
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            returnKeyType="go"
            secureTextEntry
          />
          {this.renderError()}
        </KeyboardAvoidingView>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.button} onPress={() => this.register()}>
            <Text
              style={styles.buttonText}
              title="Sign up"
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#16a085",
    padding: 20,
    paddingTop: 100
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
  input: {
    height: 40,
    width: 350,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  button: {
    flex:1,
    backgroundColor: "#0c8358",
    paddingVertical: 10,
    marginTop: 50
  },
  subtext: {
    color: "#ffffff",
    width: 160,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 40
  },
  inputTitle:{
    color:'#FFF',
    fontSize: 18,
    marginBottom: 15,
    opacity: 0.9
  },
  error:{
    fontSize: 20,
    color:'#c43a3a',
    textAlign:'center',

  }
});

AppRegistry.registerComponent("Register", () => Register);
