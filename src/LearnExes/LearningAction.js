// all TODO!!!
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
import { DB_actionNames, DB, __wordsInMemory } from './util'


export class LearningClass {
  static _first5Words = 0;
  static _first5Tests = 0;
  static c = 0;

  static nowWeLerningThis_10WordIds = [1, 3, 12,]
  static prevWordAction() {
    return { wordId: 10, action: DB_actionNames.Test_4 }
  }

  //function
  static saveResult_and_WhatWordNext_and_Render(wordId, addWhatPercent) {
    //debugger
    if (wordId && addWhatPercent)
      saveResult(wordId, addWhatPercent)
    //
    var word_and_Action = this.WhatWord_and_ActionNext()
    switch (word_and_Action.action) {
      case DB_actionNames.Card: return (<FullCard {...word_and_Action} />); break;
      case DB_actionNames.Test_4: return (<TestCard {...word_and_Action} />); break;
      case DB_actionNames.Test_Written: return (<TestCard {...word_and_Action} />); break;
    }
    // if (word_and_Action.action == DB_actionNames.Card)
    //   return (<FullCard {...word_and_Action} />)
    // else if (word_and_Action.action == DB_actionNames.Test_4)
    //   return (<TestCard {...word_and_Action} />)
    // else if (word_and_Action.action == DB_actionNames.Test_Written)
    //   return (<TestCard {...word_and_Action} />)
  }

  static saveResult(wordId, addWhatPercent) {
    //

    __wordsInMemory.w = __wordsInMemory.w.map(w => {
      if (w.wordId == wordId) {
        w.lastSeen = Date.now()
        w.percent += addWhatPercent
      }
      return w
    })
  }

  //function
  //let _w = DB.getWord(nextWordId)

  static allLearnNowIds =
    [1, 8, 12, 13, 16,
      9, 6, 22, 23, 28]
      //how many actions was made/learned
  static first5cards = 0
  static first5tests = 0
  static sec5cards = 0
  static sec5tests = 0
  static rnd = () =>   __wordsInMemory.w[ this.allLearnNowIds[(Math.random() * 10 ).toFixed()]]
  static rnd4;
  static WhatWord_and_ActionNext() {
    let _w;
    if (this.first5cards != 5) {
      //mmmmmmmiiiiiiiiinnnnnnnnnnnn
      _w = __wordsInMemory.w[this.allLearnNowIds[this.first5cards]]//.min(w => w.percent)////////////////////////////first
      _w.action = DB_actionNames.Card
      this.first5cards++
    }
    else if (this.first5tests != 5) {
      _w = __wordsInMemory.w[this.allLearnNowIds[this.first5tests]]//.min(w => w.percent)////////////////////////////first
      _w.action = DB_actionNames.Test_4
      _w.options = [this.rnd(), this.rnd(), this.rnd(), this.rnd()]
      this.first5tests++
    }
    return _w
  }
}
/// card test addTest
export class LearningAction extends Component {//X3
  constructor(p) {
    super(p)
    this.state = { refresh: false }
  }
  render() {
    //debugger
    //  <TestCard word={"Hello"}/>
    //<FullCard word={"Hello"} />
    var action = LearningClass.saveResult_and_WhatWordNext_and_Render();
    return (
      <View>
        {action}
        <Button title={'btn'} onPress={() => { //LearningClass.saveResult_and_WhatWordNext_and_Render()
          //  this.setState(prv=>{refresh:!prv.refresh}) 
          //this.render()
          this.forceUpdate()
        }} />
      </View>
    )
  }

}







/// give me as a prop: 
/// ID??, word, translation, photo?, voice?
/// getCategories() or we have DEFAULT
export class FullCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    console.log("rendering[constructor] _categories")

  }

  render() {
    var word = this.props.word;
    var translation = this.props.translation;
    var photoHref;//
    var voiceHref;//
    return (
      <ScrollView //style={{...styles.FlexStyle, backgroundColor:'green'}}
      >
        <Text>{word}</Text>
        <Text>{translation}</Text>


      </ScrollView>
    )
  }
}

export function TestCard(props) {

  return (
    <View>
      <Text> {props.word}</Text>

      <Text> {props.options[0]}</Text>
      <Text> {props.options[1]}</Text>
      <Text> {props.options[2]}</Text>
      <Text> {props.options[3]}</Text>
    </View>
  )



}



const styles = StyleSheet.create({
  FlexStyle: {
    flex: 1
  },
  ColorRed: {
    backgroundColor: 'red'
  },

})