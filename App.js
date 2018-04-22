import React, { Component } from 'react'
import { AsyncStorage, AppRegistry, TextInput, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight, Button } from 'react-native'
import { StackNavigator } from "react-navigation"
import { CategoryFull } from './src/CategoryFull'
import { Login } from './src/Login'
// import { parse } from 'path';
import { ExData, ExDataNamesWithHrefs } from './src/ParseCategories'
import { CategoriesList } from './src/Main_Categories'
import { CategoryButton } from './src/categ'
import { MainTeacher } from './src/MainTeacher'
import { TeacherStat } from './src/TeacherStat'
import { TeacherAddCategory } from './src/TeacherAddCategory'
//import * as U from './src/util'
//todo_xls();


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
  _MainTeacher: {
    screen: MainTeacher
  },
  _TeacherStat: {
    screen: TeacherStat
  },
  _TeacherAddCategory: {
    screen: TeacherAddCategory
  },
},
  {
    initialRouteName: "_Login" //todo techer ot student
  });

function todo_xls() {
  {
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
  }
}
//AppRegistry.registerComponent('CategoriesList',()=>CategoriesList);