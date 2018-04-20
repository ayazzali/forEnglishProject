import React, { Component } from 'react'
import { AppRegistry, Button, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight } from 'react-native'

import { ExData } from './ParseCategories'
import * as U from './util'

export class TeacherStat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
 
    }
  }
  
  render() {
   debugger;
    let props= this.props.navigation.state.params.id
    return (
      <View style={styles.Border//, {height:100, color:"orange" /*width:200*/}
      }>
        <Button title={"Добавить категорию слов (колоду)"} />
        <Button title={"Статистика (учеников)"} />
        <ScrollView>
          <Text >тут будут ваши добавленные колоды </Text>
          
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