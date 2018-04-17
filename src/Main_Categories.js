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

export class CategoriesList extends React.Component {
  componentWillMount() {
    AsyncStorage.getItem("username")//TODO uname
      .then((val) => { if (!val) this.props.navigation.navigate("_Login"); })

    this.setState({ categories: ["Загрузка..."] })
    ExDataNamesWithHrefs().then((categories) => {
      let g = categories.map((q, id) => { return { title: q.name, href: q.href, id: id } });//"key": id ,
      this.setState({ categories: g })
    })
      .catch((error) => { // if 404 404 404 404 404 404 404 404 404 404 404 404 404 404
        console.error(error);
        AsyncStorage.getItem("name")
          .then((value) => {
            const categories = ["hello", "qwer11", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv", "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv", "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv", "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv", "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv22", "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv22",]
            categories.push(value)
            this.setState({ categories: categories })
          })
      })// end 404
  }

  render() {
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
            onPress={() => this.props.navigation.navigate('_CategoryFull', { name: val.title, href: val.href })} >

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
        <Text>Пока нет...</Text>

        <Text h4>Остальные категории: </Text>
        {categoriesCopmponents}

        <TouchableHighlight onPress={this._loadMoreCategories}>
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
