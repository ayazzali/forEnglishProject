import React, { Component } from 'react'
import { AppRegistry, Button, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight } from 'react-native'

import { ExData } from './ParseCategories'
import { Categories } from './_Categories';
import { DB, RestFetch } from './util';


export class MainTeacher extends React.Component {
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
        <Button
          title={"Добавить категорию слов (колоду)"}
          onPress={() => this.props.navigation.navigate("_TeacherAddCategory", this.props.navigation.state.params)} />
        <Button
          title={"Статистика (учеников)"}
          onPress={() => this.props.navigation.navigate("_TeacherStat", this.props.navigation.state.params)} />
        <ScrollView>
          <Text >Ваши добавленные колоды: </Text>
          <Categories
            getCategories={() => RestFetch(DB.users+ '/'+userId+'/'+DB.usersCategories+'?_expand=category', 'get').then(expanded=>expanded.map(ex=>ex.category))}
            navigation={this.props.navigation}
          />
        </ScrollView>
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