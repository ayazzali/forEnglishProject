import React, { Component } from 'react'
import { AppRegistry, Button, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight } from 'react-native'

import { ExData } from './ParseCategories'
import { Categories } from './_Categories'
import { RestFetch, DB } from './util';


export class TeacherAddCategory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    //debugger;
    var userId = this.props.navigation.state.params.id;
    return (
      <View style={styles.Border//, {height:100, color:"orange" /*width:200*/}
      }>
        <Categories 
        add={(category) => RestFetch(DB.usersCategories + '/', 'post', { categoryId: category.id, userId: userId })
          .then(r => { if (r) alert("Категория добавлена, вернитесь назад.") })} 
          navigation={this.props.navigation}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  FlexStyle: {
    flex: 1
  },
  ColorRed: {
    backgroundColor: 'red'
  },
  Border: {
    borderWidth: 1
  }
})