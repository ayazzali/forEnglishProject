import React from 'react'
import { Component } from 'react';
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
import { ExSort } from './src/ExampleSort';
import { TestLearn_TestCard } from './src/LearnExes/Learn_TestCard';
import { TestLearn_ChooseWordInSentence } from './src/LearnExes/Learn_WordInSentenseByMeaning';
// import { LearningAction } from './src/LearningAction';
// import { WrapLearn_LWordsAgainstLWords } from './src/LearnExes/WrapLearn_LWordsAgainstLWords';
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
  ExSort: {
    screen: ExSort
  },
  Test__TestLearn_TestCard:{
    screen:TestLearn_TestCard
  },
  Test__ChooseWordInSentence:{
    screen:TestLearn_ChooseWordInSentence
  }
  // _LearningAction: {
  //   screen: LearningAction
  // },
  // _WrapLearn_LWordsAgainstLWords: {
  //   screen: WrapLearn_LWordsAgainstLWords
  // },
},
  {
    initialRouteName: 'ExSort'//'Test__ChooseWordInSentence'//"DelTS"//'_WrapLearn_LWordsAgainstLWords'//'_LearningAction'//"_Login" //todo techer ot student
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