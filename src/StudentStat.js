import React, { Component } from 'react'
import { AppRegistry, Button, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight } from 'react-native'

import { ExData } from './ParseCategories'
import * as U from './util'

export class StudentStat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usersCategories,
    }
    
    U.RestFetch('users/' + userId + '/usersCategories')
      .then(val => this.setState({ usersCategories: val }))
  }

  render() {
    debugger;
    let props = this.props.navigation.state.params;
    let userId = props.id;
    let usersCategories = this.students.map(v =>
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
          {usersCategories}
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