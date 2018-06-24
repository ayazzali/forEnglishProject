import React, { Component } from 'react'
import { Learn_LWordsAgainstLWords } from "./Learn_LWordsAgainstLWords";
import { __wordsInMemory } from '../util';
import { View,Text } from 'react-native'
 /**delete
  * for test
 */
export function WrapLearn_LWordsAgainstLWords() {
  return (<Wrap__howManyLearn_LWordsAgainstLWords lessonName='знакомство' />)
}

/**enToLeft
 */
export function Wrap__howManyLearn_LWordsAgainstLWords2(props) {
  return (
    <Wrap__howManyLearn_LWordsAgainstLWords enToLeft {...props} />
  )
}

/** дай мне тему урока (lessonName) или words
 * и я буду вызывать Learn_LWordsAgainstLWords на каждые 3 слова
 */
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
    let allWords = this.props.words
    if (!this.props.words) {
      allWords = __wordsInMemory.w.filter(_ => _.filter == this.props.lessonName).slice(0, 9);
    }
    let words = allWords.slice(this.state.curFirstWordId, this.state.curFirstWordId + this.__howMany);

    return (
      <View>
        {this.state.curFirstWordId == allWords.length ? <Text>первое задание окончено. Приходите завтра</Text> : null}
        <Learn_LWordsAgainstLWords
          enToLeft={this.props.enToLeft}
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
