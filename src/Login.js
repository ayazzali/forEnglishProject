import React, { Component } from 'react'
import { AsyncStorage, AppRegistry, TextInput, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight, Button } from 'react-native'
import { StackNavigator } from "react-navigation"
//import { RadioButtons } from "react-native-radio-buttons"
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button"
import CheckBox from 'react-native-check-box'
import { RestFetch } from './util'

_users = "users"
export class Login extends React.Component {
  _sudent = "sudent";
  _teacher = "teacher";
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      fullname: '',
      status: '',
      group: '',
      pass: '',
      fromkai: false
    }
  }

  render() {
    AsyncStorage.getItem("User")
      .then((val) => {
        if (val) {
          let valObj = JSON.parse(val);
          this.props.navigation.navigate(
            valObj.status == this._teacher ? "_MainTeacher" : '_CategoriesList', valObj);
        }
        else
          console.log("new User")
      })


    let options = ["Преподаватель", "Студент"];
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView>
          <View style={styles.card}>
            <Text style={styles.title} >Пожалуйста представьтесь:</Text>
          </View>
          <View style={styles.card}>
            <TextInput style={styles.input}
              placeholder="ФИО" autoCorrect={false}
              onChangeText={(value) => this.setState({ fullname: value })} />
          </View>
          <View style={styles.card}>
            <TextInput style={styles.input}
              placeholder="Логин"
              autoCorrect={false}
              onChangeText={(value) => this.setState({ username: value })} />
          </View>
          {this.Pass()}
          <CheckBox
            style={{ flex: 1, padding: 10 }}
            onClick={() => { this.setState((prev) => { return { fromkai: !prev.fromkai } }); }}
            leftText={"Из КАИ?"}
          />

          {this.state.fromkai ? this.Status() : null}
          {this.state.status == this._sudent ? this.WhatGroup() : null}
          {this.SignIn()}
        </ScrollView>
      </View>
    );
  }
  WhatGroup() {
    return (
      <View style={styles.card} >
        <TextInput style={styles.input}///, если ты каист
          placeholder="№ группы"
          autoCorrect={false}
          onChangeText={(value) => this.setState({ group: value })} />
      </View>)
  }
  Pass() {
    return (
      <View style={styles.card}>
        <TextInput style={styles.input}///, если ты каист
          placeholder="Пароль"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(value) => this.setState({ pass: value })} />
      </View>)
  }
  SignIn() {
    return (
      <View style={styles.card}>
        <Button title="Вход" onPress={this._signUpAsync.bind(this)} />
      </View>
    )
  }
  /// препод или студент
  Status() {
    return (
      <View style={styles.container}>
        <RadioGroup
          onSelect={(index, value) => this.setState({ status: value })
          }>
          <RadioButton value={this._teacher}>
            <Text>Преподаватель</Text>
          </RadioButton>
          <RadioButton value={this._sudent}>
            <Text>Студент</Text>
          </RadioButton>
        </RadioGroup>
      </View>
    )
  }
  _signUpAsync = async () => {///
    //debugger;
    let user = await RestFetch(_users, "POST", this.state)
    await AsyncStorage.setItem('User', JSON.stringify(user))
    console.log('[from storage] v')
    console.log(JSON.parse(await AsyncStorage.getItem('User')))

    if (this.state.status == this._teacher)
      this.props.navigation.navigate('_MainTeacher', user);
    else
      this.props.navigation.navigate('_CategoriesList', user);

  };
}


const styles = StyleSheet.create({
  // FlexStyle: {
  //   flex: 1
  // },
  // ColorRed: {
  //   backgroundColor: 'red'
  // },
  container: {
    flex: 1,
    //height: 150
    //marginTop: 40,
    //padding: 20,
  },
  text: {
    padding: 10,
    fontSize: 14,
  },
  input: {
    height: 40,
    minWidth: 200,
    //width:300,
    color: '#9197A3',
    backgroundColor: '#FAFAFA',
    borderColor: '#D8D8D8',
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,//40
    textAlign: 'center',
  },
  card: {
    flex: 0,
    marginVertical: 10
  },
})