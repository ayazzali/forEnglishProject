import React, { Component } from 'react'
import { Learn_LWordsAgainstLWords } from "./Learn_LWordsAgainstLWords";
import { __wordsInMemory } from '../util';
import {View} from 'react-native'

export function WrapLearn_LWordsAgainstLWords() {
  return (<Wrap__howManyLearn_LWordsAgainstLWords lessonName='знакомство' />)
}

/// дай мне тему урока - lessonName
export class Wrap__howManyLearn_LWordsAgainstLWords extends React.Component {
  /// state c-по
  constructor(props) {
    super(props);
    this.state = {
      curFirstWordId: 0,
    }
    this.__howMany = 3
  }

  render() {
    let allWords=this.props.words
    if(!this.props.words){
      allWords = __wordsInMemory.w.filter(_ => _.filter == this.props.lessonName).slice(0, 9);
    }
    let words = allWords.slice(this.state.curFirstWordId, this.state.curFirstWordId + this.__howMany);
      
    return (
      <View>
        {this.state.curFirstWordId == allWords.length ? <Text>первое задание окончено. Приходите завтра</Text> : null}
        <Learn_LWordsAgainstLWords
          words={words}
          whenFinished={() => this.setState(prv => {
            debugger;
            if (prv.curFirstWordId == allWords.length) {
              alert("Вы выполнили первое задание лессона: " + this.props.lessonName)
            }
            return { curFirstWordId: prv.curFirstWordId + this.__howMany }
          })} />
      </View>
    )
  }
}
