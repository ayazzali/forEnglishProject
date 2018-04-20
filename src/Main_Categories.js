import React, { Component } from 'react'
import { AsyncStorage, AppRegistry, TextInput, View, ScrollView, ListView, StyleSheet, TouchableHighlight, Button } from 'react-native'
import { StackNavigator } from "react-navigation"
import { CategoryFull } from './CategoryFull'
import { Login } from './Login'
// import { parse } from 'path';
import { ExData, ExDataNamesWithHrefs } from './ParseCategories'
import { CategoryButton } from './categ'
//todo_xls();
import { Badge, Divider, FormInput, Text } from "react-native-elements"
import * as U from './util'

/// MainStudent
///->props=User
export class CategoriesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      studentsCategories:[],
      categories:[],
    }
  }
  componentDidMount() {
    U.RestFetch('users/' + this.props.navigation.state.params.id + '/studentsCategories')
      .then(val => this.setState({ studentsCategories: val }))
      .catch(console.error)

    ExDataNamesWithHrefs().then((categories) => {
      let g = categories.map((q, id) => { return { title: q.name, href: q.href, id: id } });//"key": id ,
      this.setState({ categories: g })
    }).catch(console.error)

  }

  render() {
    //debugger;
    let studentsCategories = this.state.studentsCategories.map(v =>// todo check v.id on each onpress
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate('_StudentStatCategory', v)}>
        <Text>{v}</Text>
      </TouchableHighlight>)

    const categoriesCopmponents =
      (this.state.categories.map((val, id) =>
        <View
          key={id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
          <TouchableHighlight
            style={styles.FlexStyle}
            onPress={() => this.props.navigation.navigate('_CategoryFull', { name: val.title, href: val.href })}>
            <Text>
              {val.title ? val.title : "пусто... "}
            </Text>
          </TouchableHighlight>
          <Badge
            //ToDo: add
            value={"+"}
            onPress={() => this.props.navigation.navigate('addToMyListAndSaveToPhone', { name: val.title, href: val.href })}
          />
          <Divider style={{ backgroundColor: 'blue' }} />
        </View>
      ));

    return (
      <ScrollView style={styles.FlexStyle} >
        <Text h4>Вы изучаете категории: </Text>
        {studentsCategories}
        <View style={{ marginTop: 30 }} />

        <Text h4>Остальные категории: </Text>
        {categoriesCopmponents}

        <TouchableHighlight onPress={this._loadMoreCategories} >
          <Text>
            Загрузить {this.state.categories.length > 1 ? "еще" : "категории"}
          </Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }

  _loadMoreCategories() {
  }
}



const styles = StyleSheet.create({
  FlexStyle: {
    flex: 1
  },
  ColorRed: {
    backgroundColor: 'red'
  },

})
