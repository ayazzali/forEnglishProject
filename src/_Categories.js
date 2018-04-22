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

/// give me as a prop: 
/// add()
/// getCategories() or we have DEFAULT
export class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
    }
    console.log("rendering[constructor] _categories")

  }
  componentDidMount() {
    //debugger
    if (this.props.getCategories) {
      this.props.getCategories()
        .then(val => this.setState({ categories: val }))
        .catch(console.error)
    }
    else
      U.RestFetch('categories') //todo leave this to parent
        .then(val => this.setState({ categories: val }))
        .catch(console.error)

  }
  render() {
    //debugger;
    console.log("rendering _categories")

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
            style={styles.FlexStyle}//TODOOOOOOOOOOOOOOOOOOOOOOOO 0000000000000000000
            onPress={() => this.props.navigation.navigate('_CategoryFull', { name: val.title, href: val.href })}>
            <Text>
              - {val.name}
            </Text>
          </TouchableHighlight>
          {this.props.add ?
            <Badge
              value={"+"}
              onPress={() => this.props.add(val)}
            /> : null}
          <Divider style={{ backgroundColor: 'blue' }} />
        </View>
      ));

    return (
      <ScrollView //style={{...styles.FlexStyle, backgroundColor:'green'}}
      >
        {categoriesCopmponents}
        <TouchableHighlight onPress={this._loadMoreCategories} >
          <Text>
          {categoriesCopmponents ? null : "[Пусто...]"}
            {//this.state.categories.length > 1 ? "еще" : "категории" // todoOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
            }
          </Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }

  _loadMoreCategories() {
      //
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
