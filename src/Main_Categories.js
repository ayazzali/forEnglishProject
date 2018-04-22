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
import { RestFetch, DB } from './util';
import { Categories } from './_Categories';

/// MainStudent
///->props=User
export class CategoriesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nothing: true,
    }
  }
  componentDidMount() {
  }

  render() {
    //debugger;
    console.log("rendering main_Categories")
    var user = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.FlexStyle} >
        {user.fromkai && user.status == "student" && user.teacherId ?
          <View>
            <Text h4>Лессоны вашей группы: </Text>
            <Categories
              getCategories={() => RestFetch(DB.users + '/' + user.teacherId + '/' + DB.usersCategories + '?_expand=category', 'get').then(expanded => expanded.map(ex => ex.category))}
              navigation={this.props.navigation}
            /></View>

          :
          <View>
            <Text h4>Вами добавленные категории: </Text>
            <Categories
              getCategories={() => RestFetch(DB.users + '/' + user.id + '/' + DB.usersCategories + '?_expand=category', 'get').then(expanded => expanded.map(ex => ex.category))}
              navigation={this.props.navigation}/>
            <View style={{ marginTop: 30 }} />

            <Text h4>Остальные категории: </Text>
            <Categories
              add={(category) => RestFetch(DB.usersCategories + '/', 'post', { categoryId: category.id, userId: userId })
                .then(r => { if (r) { alert("Категория добавлена"); } })}
              navigation={this.props.navigation}
            />
          </View>
        }
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
