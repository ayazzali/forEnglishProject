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
    U.RestFetch('users?teacherId=' + userId)// todo CHECK
      .then(val => this.setState({ students: val }))
  }

  render() {
    //debugger;
    let students = this.state.students.map(v =>
      <TouchableHighlight
      key={v.id}
        onPress={() => this.props.navigation.navigate('_StudentStat', v)}>
        <Text>- {v.fullname?v.fullname:"[Name is undefined]"}</Text>
      </TouchableHighlight>)

    return (
      <View style={styles.Border}>
        <Text>__тут будет поиск </Text>

        <ScrollView>
          <Text >Ваши ученики:</Text>
          {students ? students : "У вас нет учеников"}
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