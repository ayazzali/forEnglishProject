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
  return (
    <Learn_LWordsAgainstLWords lessonName='знакомство' />
  )
}

/// передай мне тему урока - lessonName
export class Learn_LWordsAgainstLWords extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wordsReady: __wordsInMemory.w//do not
      , wordsLeft: __wordsInMemory.w.filter(_ => _.filter == props.lessonName)//
      , wordsRight: __wordsInMemory.w
        .filter(_ => _.filter == props.lessonName)
        .sort(function (a, b) {
          let g = 0.5 - Math.random();
          return g > 0 ? 1 : g > 0 ? -1 : 0;
        })
      //(0.5 - Math.random())//
      , curRight: false
      , curLeft: false
    }
    console.log("rendering[constructor] _categories")
    console.log("wordsRight= " + this.state.wordsRight.map(_ => _.id).join(" "))
    //this.setState({ words:  })
  }

  clickOnWordRight(wordId, IsWordTapped) {
    console.log("clickOnWordRight");
    this.setState({ curRight: IsWordTapped });
    this.clickOnWord(wordId)
  }

  clickOnWordLeft(wordId, IsWordTapped) {
    console.log("clickOnWordLeft");
    this.setState({ curLeft: IsWordTapped });
    this.clickOnWord(wordId)
  }

  clickOnWord(wordId) {
    if (this.state.curRight && this.state.curLeft) {
      let f = this.state.wordsLeft.findIndex(_ => _.id == wordId)
      console.log(f)
      //do 
      //this.state.words.sort(_ => _.)
    }
  }

  onLayout(event) {
    console.log(event.nativeEvent.layout)
  }

  render() {
    let leftListWords = this.state.wordsLeft.map(_ => <DottedWord
      key={_.id}
      wordId={_.id}
      word={_.word}
      clickOnWord={this.clickOnWordLeft.bind(this)} />)

    ///!!!  перемешать
    let rightListWords = this.state.wordsRight.map(_ =>
      <View>
        <DottedWord
          key={_.id}
          wordId={_.id}
          word={_.translation}
          clickOnWord={this.clickOnWordRight.bind(this)} />
      </View>)

    return (
      <ScrollView>
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
class DottedWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordIsMarkedNow: false
    }
  }
  render() {
    let f = this.state.wordIsMarkedNow ? { h2: true } : { h2: false };

    return (
      <TouchableOpacity onPress={() => {
        this.setState(prv => { return { wordIsMarkedNow: !prv.wordIsMarkedNow } })
        this.props.clickOnWord(this.props.wordId, this.state.wordIsMarkedNow);
      }}>
        <Text {...f} >
          {this.props.word}
        </Text>
      </TouchableOpacity>
    )
  }

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