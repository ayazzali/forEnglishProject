import React, { Component } from 'react'
import { AppRegistry, Button, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight } from 'react-native'

import { ExData } from './ParseCategories'
import * as U from './util'

export class StudentStat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      studentsCategories,
    }
    
    U.RestFetch('users/' + userId + '/studentsCategories')
      .then(val => this.setState({ studentsCategories: val }))
  }

  render() {
    debugger;
    let props = this.props.navigation.state.params;
    let userId = props.id;
    let studentsCategories = this.students.map(v =>
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate('_StudentStatCategory', v)}>
        <Text>{v}</Text>
      </TouchableHighlight>)

      
    return (
      <View style={styles.Border//, {height:100, color:"orange" /*width:200*/}
      }>
        <Text >тут будет поиск </Text>

        <ScrollView>
          <Text >Ваши ученики </Text>
          {studentsCategories}
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