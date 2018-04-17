import React, { Component } from 'react'
import { AsyncStorage, AppRegistry, TextInput, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight, Button } from 'react-native'
import { StackNavigator } from "react-navigation"

export class Login extends React.Component {
  constructor(props) {
    super(props);
    //   this.state = {
    //     name: "",
    //     surname: ""
    //   }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.card}>
          <Text style={styles.title} >Пожалуйста представьтесь:</Text>
        </View>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder="Имя" autoCorrect={false}
            onChangeText={(value) => this.setState({ name: value })} />
        </View>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder="Фамилия" autoCorrect={false}
            onChangeText={(value) => this.setState({ surname: value })} />
        </View>
        <View style={styles.card}>
          <TextInput style={styles.input}
            placeholder="№ группы, если ты каист"
            autoCorrect={false}
            onChangeText={(value) => this.setState({ group: value })} />
        </View>
        <View style={styles.card}>
          <Button title="Вход" onPress={this._signInAsync} />
        </View>
      </View>
    );
  }

  _signInAsync = async () => {
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