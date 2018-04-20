import React, { Component } from 'react'
import { AppRegistry, Button, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight } from 'react-native'

import { ExData } from './ParseCategories'
import * as U from './util'

export class TeacherStat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
    }
    let userId = props.navigation.state.params.id;
    U.RestFetch('users?q=teacherId=' + userId)// todo CHECK
      .then(val => this.setState({ students: val }))
  }

  render() {
    //debugger;
    let students = this.state.students.map(v =>
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate('_StudentStat', v)}>
        <Text>{v.fullname}</Text>
      </TouchableHighlight>)

    return (
      <View style={styles.Border//, {height:100, color:"orange" /*width:200*/}
      }>
        <Text >тут будет поиск </Text>

        <ScrollView>
          <Text >Ваши ученики:</Text>
          {students}
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