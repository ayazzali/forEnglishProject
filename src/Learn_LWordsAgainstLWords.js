import React, { Component } from 'react'
import { TouchableOpacity, AsyncStorage, AppRegistry, TextInput, View, ScrollView, ListView, StyleSheet, TouchableHighlight, Button } from 'react-native'
import { StackNavigator } from "react-navigation"
import { CategoryFull } from './CategoryFull'
import { Login } from './Login'
// import { parse } from 'path';
import { ExData, ExDataNamesWithHrefs } from './ParseCategories'
import { CategoryButton } from './categ'
//todo_xls();
import { Badge, Divider, FormInput, Text } from "react-native-elements"
import { DB_actionNames, DB, __wordsInMemory } from './util'
import { RadioButton } from 'react-native-flexi-radio-button';

export function wrapLearn_LWordsAgainstLWords() {
  return (<Learn_LWordsAgainstLWords lessonName='знакомство' />)
}

/// дай мне тему урока - lessonName
export class Learn_LWordsAgainstLWords extends React.Component {
  constructor(props) {
    super(props)
    let __w = __wordsInMemory.w
      .filter(_ => _.filter == props.lessonName)
      .slice(0,5)
      .map(_ => { _.isPressed = false; return { ..._ } });

    //console.log(__w)
    this.state = {
      wordsDone: []//__w//do not{
      , wordsLeft: __w.map(_=>{return{word:_.word,id: _.id,isPressed:_.isPressed}})
      , wordsRight: __w
       .slice()
       .sort(function (a, b) {
        let g = 0.5 - Math.random();
        return g > 0 ? 1 : g < 0 ? -1 : 0;
      })
      //(0.5 - Math.random())//
      , curRight: false
      , curLeft: false
    }
    console.log("rendering[constructor] _categories")
    //console.log("wordsRight= " + this.state.wordsRight.map(_ => _.id).join(" "))
    //this.setState({ wordsDone: {} })
  }


  clickOnWordRight(wordId) {
    debugger
    console.log("clickOnWordRight");
    let IsWordTapped = false;
    this.setState(prv => {
      let newWords = prv.wordsRight.map(_ => {
        if (_.id == wordId) {
          _.isPressed = !_.isPressed;
          IsWordTapped = _.isPressed
        }
        else
          _.isPressed = false;
        return { ..._ }
      });
      return {
        wordsRight: newWords,
        curRight: IsWordTapped
      }
    })
    this.clickOnWord()
  }

  /// copy code from behind
  clickOnWordLeft(wordId) {
    debugger
    console.log("clickOnWordLeft");
    let IsWordTapped = false;
    this.setState(prv => {
      let oldR=prv.wordsRight.slice();
      let g = prv.wordsLeft.slice().map(_ => {
        if (_.id == wordId) {
          _.isPressed = !_.isPressed;
          IsWordTapped = _.isPressed
        }
        else
          _.isPressed = false;
        return { ..._ }
      }).slice();
      return {
        wordsLeft: g,
        wordsRight: oldR,
        curLeft: IsWordTapped
      }
    })
    //! do not
    let good = this.clickOnWord()
    // if(!good)
    // {

    // }
  }

  clickOnWord() {
    this.setState(_prv => {
      if (_prv.curRight && _prv.curLeft) {
        let ChoosedWordFromLeft = _prv.wordsLeft.find(_ => _.isPressed);
        let ChoosedWordFromRight = _prv.wordsRight.find(_ => _.isPressed);
        console.log(ChoosedWordFromLeft);console.log(ChoosedWordFromRight)

        if (!(ChoosedWordFromLeft&&ChoosedWordFromRight))
          return ;
        else if(ChoosedWordFromLeft.id == ChoosedWordFromRight.id) {
          let wordId=ChoosedWordFromLeft.id
          /// wordsDone:
          let newWordsDone = _prv.wordsDone;
          debugger;
          wordToPush = __wordsInMemory.w.find(_ => _.id == wordId);
          newWordsDone.push(wordToPush);
          return {
            wordsDone: newWordsDone,
            wordsLeft: _prv.wordsLeft.filter(_=> _.id != wordId),
            wordsRight: _prv.wordsRight.filter(_=> _.id != wordId)
          }
        }
        else {
          alert("Вы выбрали неправильный перевод")
          //  return false;
        }
      }
      //return true;
    })
  }

  onLayout(event) {
    console.log(event.nativeEvent.layout)
  }

  render() {
    let leftListWords = this.state.wordsLeft.map(_ =>
      <DottedWord
        key={_.id + 100}
        wordId={_.id}
        word={_.word}
        isPressed={_.isPressed}
        clickedOnWord={this.clickOnWordLeft.bind(this)} />)

    let rightListWords = this.state.wordsRight.map(_ =>
      <DottedWord
        key={_.id}
        wordId={_.id}
        word={_.translation}
        isPressed={_.isPressed}
        clickedOnWord={this.clickOnWordRight.bind(this)} />
    )

    return (
      <ScrollView>
        <Text>{this.state.wordsDone.length}</Text>
        <View style={styles.viewStyle}>
          <View style={styles.HalfOfView} >
            {leftListWords}
          </View>
          <View style={[styles.HalfOfView, styles.ColorRed]} >
            {rightListWords}
          </View>
        </View>
      </ScrollView>
    )
  }
}

/// для слов правого и левого стлобцов
/// wordId word clickOnWord
function DottedWord(props) {
  let f = props.isPressed ? { h2: true } : { h2: false };
  if (props.isPressed)
    debugger;
  return (
    <TouchableOpacity onPress={() => {
      props.clickedOnWord(props.wordId);
    }}>
      <Text {...f} >
        {props.word}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    //padding: 'space',
    marginTop: 20,
    backgroundColor: 'green'
  },

  HalfOfView: {
    width: '50%',
    flex: 1
  },
  // FlexStyle: {
  //   flex: 1
  // },
  ColorRed: {
    backgroundColor: 'red'
  },

})