import React, { Component } from 'react'
import { AsyncStorage, AppRegistry, TextInput, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight, Button } from 'react-native'
import { StackNavigator } from "react-navigation"
import { CategoryFull } from './CategoryFull'
import { Login } from './Login'
// import { parse } from 'path';
import { ExData,ExDataNamesWithHrefs } from './ParseCategories'
import { CategoryButton } from './categ'
//todo_xls();


export class CategoriesList extends React.Component {
  componentWillMount() {
    this.setState({ categories: ["Загрузка..."] })
    ExDataNamesWithHrefs().then((categories)=>{
      let g = categories.map((q, id) => { return { title: q.name, href: q.href, id: id } });//"key": id ,
         this.setState({ categories: g })
    })
      .catch((error) => {
        console.error(error);
        AsyncStorage.getItem("name")
          .then((value) => {
            const categories = ["hello", "qwer11", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv", "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv", "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv", "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv", "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv22", "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv22",]
            categories.push(value)
            this.setState({ categories: categories })
          })
      })
  }

  render() {
    const categoriesCopmponents =
      (this.state.categories.map((val,id) => <Button key={id} title={val.title ? val.title : ""} // 
        onPress={() => this.props.navigation.navigate('_CategoryFull', { name: val.title,href: val.href})} />));
    return (
      <ScrollView style={styles.FlexStyle} >
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
