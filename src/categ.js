import React, { Component } from 'react'
import { AsyncStorage, AppRegistry, TextInput, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight, Button } from 'react-native'
import { StackNavigator } from "react-navigation"
import { CategoryFull } from './CategoryFull'
import { Login } from './Login'
// import { parse } from 'path';
import { ExData,ExDataNamesWithHrefs } from './ParseCategories'
//todo_xls();

//deprecated
export class CategoryButton extends React.Component {
    render() {
  
      return (
        <TouchableHighlight onPress={this._goToCategory}>
          <Text>
            {this.props.Name}
          </Text>
        </TouchableHighlight>
      )
    }
    _goToCategory() {
      alert("Скоро будет тут что то новое :)")
      //alert("И да, вы нажали на элемент с id="+this.props.id)
    }
  }