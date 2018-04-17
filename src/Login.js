import React, { Component } from 'react'
import { AsyncStorage, AppRegistry, TextInput, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight, Button } from 'react-native'
import { StackNavigator } from "react-navigation"
import { RadioButtons } from "react-native-radio-buttons"

export class Login extends React.Component {
  constructor(props) {
    super(props);
    //   this.state = {
    //     name: "",
    //     surname: ""
    //   }
  }
  setSelectedOption(selectedOption) {

    alert(selectedOption);
    this.setState({
      selectedOption
    });
    var t = this.state;
    debugger;
  }

  render() {
    let options = ["Преподаватель", "Студент"];
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.card}>
          <Text style={styles.title} >Пожалуйста представьтесь:</Text>
        </View>
        <RadioButtons //npm i react-native-flexi-radio-button
          options={options}
          onSelection={this.setSelectedOption.bind(this)}
          renderContainer={RadioButtons.renderVerticalContainer}
        />

        <View style={styles.card}>
          <TextInput style={styles.input}
            placeholder="ФИО" autoCorrect={false}
            onChangeText={(value) => this.setState({ fullname: value })} />
        </View>
        <View style={styles.card}>
          <TextInput style={styles.input}
            placeholder="username"
            autoCorrect={false}
            onChangeText={(value) => this.setState({ username: value })} />
        </View>
        <View style={styles.card}>
          <TextInput style={styles.input}///, если ты каист
            placeholder="№ группы"
            autoCorrect={false}
            onChangeText={(value) => this.setState({ group: value })} />
        </View>
        <View style={styles.card}>
          <Button title="Вход" onPress={this._signInAsync.bind(this)} />
        </View>
      </View>
    );
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