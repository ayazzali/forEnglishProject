import React, { Component } from 'react'
import { AsyncStorage, AppRegistry, TextInput, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight, Button } from 'react-native'
import { StackNavigator } from "react-navigation"
//import { RadioButtons } from "react-native-radio-buttons"
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button"
import CheckBox from 'react-native-check-box'
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
      fromkai: ''
    }
  }
  setSelectedOption(selectedOption) {

    alert(selectedOption);
    this.setState({
      selectedOption
    });
    var t = this.state;
    debugger;
  } onSelect(index, value) {

    alert(index + " " + value);
  }

  render() {
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
            onClick={() => { this.setState((prev) => { return { fromkai: !prev.fromkai } }); debugger; }}
            leftText={"Из КАИ?"}
          />

          {this.state.fromkai ? this.Status() : null}
          {this.state.status ? this.WhatGroup() : null}
          {this.SignIn()}
        </ScrollView>
      </View>
    );
  }
  WhatGroup() {
    return (
      <View style={styles.card}>
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
        <Button title="Вход" onPress={this._signInAsync.bind(this)} />
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
          <RadioButton value={this._teacher} >
            <Text>Преподаватель</Text>
          </RadioButton>
          <RadioButton value={this._sudent}>
            <Text>Студент</Text>
          </RadioButton>
        </RadioGroup>
      </View>
    )
  }
  _signInAsync = async () => {///
    await AsyncStorage.setItem('name', this.state.name);
    await AsyncStorage.setItem("surname", this.state.surname)
    await AsyncStorage.setItem("group", this.state.group)
    console.log(this.state.name)
    this.props.navigation.navigate('_CategoriesList');
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