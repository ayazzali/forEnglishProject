import React, { Component } from 'react'
import { AsyncStorage, AppRegistry, TextInput, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight, Button } from 'react-native'
import { StackNavigator } from "react-navigation"
import { CategoryFull } from './CategoryFull'
import { Login } from './Login'
// import { parse } from 'path';
import { ExData,ExDataNamesWithHrefs } from './ParseCategories'
//import { writeFile, readFile } from 'react-native-fs';

// import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

// // iPhone/Android
// DocumentPicker.show({
//       filetype: [DocumentPickerUtil.images()],
//     },(error,res) => {
//       // Android
//       console.log(
//          res.uri,
//          res.type, // mime type
//          res.fileName,
//          res.fileSize
//       );
//     });
// /* read a workbook */

// readFile(file, 'ascii').then((res) => {
//   const workbook = XLSX.read(res, {type:'binary'});
//   /* DO SOMETHING WITH workbook HERE */
// });



class CategoriesList extends React.Component {
  componentWillMount() {
    this.setState({ categories: ["Загрузка..."] })

    // const pattern = "hello"//"^a.{4}$";
    // fetch("https://dictionary.skyeng.ru/api/public/v1/words/search?search=" + pattern, {
    //   method: "get",
    // })
    //   .then((r) => r.json())
    //   .then((json) => {
    //     //console.log(json)
    //     let g = json.map((q, id) => { return { title: q.text, "id": id } });//"key": id ,
    //     this.setState({ categories: g })
    //   })
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
    // let xml = require('react-native').NativeModules.RNMXml
    // console.log(xml)
    // xml.queryXml('<doc a="V1">V2</doc>',
    //   ['/doc/@a', '/doc'],
    //   results => results.map(nodes => console.log(nodes[0])))

    const categoriesCopmponents =
      (this.state.categories.map((val,id) => <Button key={id} title={val.title ? val.title : ""} // 
        onPress={() => this.props.navigation.navigate('_CategoryFull', { name: val.title })} />));
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

//deprecated
class CategoryButton extends React.Component {
  render() {

    return (
      <TouchableHighlight onPress={this._goToCategory}>
        <Text>
          {this.props.Name}
        </Text>
      </TouchableHighlight>
    )
  }
  _goToCategory() {
    alert("Скоро будет тут что то новое :)")
    //alert("И да, вы нажали на элемент с id="+this.props.id)
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

export default StackNavigator({
  _CategoriesList: {
    screen: CategoriesList,
  },
  _CategoryButton: {
    screen: CategoryButton
  },
  _Login: {
    screen: Login
  },
  _CategoryFull: {
    screen: CategoryFull
  },
},
  {
    initialRouteName: "_CategoriesList"
  });
//AppRegistry.registerComponent('CategoriesList',()=>CategoriesList);