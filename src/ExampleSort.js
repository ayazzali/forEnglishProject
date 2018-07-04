import React, { Component } from 'react'
import { AsyncStorage, AppRegistry, TextInput, View, ScrollView, ListView, StyleSheet, TouchableHighlight, Button } from 'react-native'
import { StackNavigator } from "react-navigation"
import { CategoryFull, WordRow } from './CategoryFull'
import { Login } from './Login'
// import { parse } from 'path';
import { ExData, ExDataNamesWithHrefs } from './ParseCategories'
import { CategoryButton } from './categ'
//todo_xls();
import { Badge, Divider, FormInput, Text } from "react-native-elements"
import { __wordsInMemory } from './util'

import { RadioGroup, RadioButton } from "react-native-flexi-radio-button"
import CheckBox from 'react-native-check-box'
import { WrapLearn_LWordsAgainstLWords, Wrap__howManyLearn_LWordsAgainstLWords, Wrap__howManyLearn_LWordsAgainstLWords2 } from './LearnExes/WrapLearn_LWordsAgainstLWords';
import { LearningAction } from './LearnExes/LearningAction';
import { WrapLearn_TestCards } from './LearnExes/Learn_TestCard';

//import { Learn_LWordsAgainstLWords } from './LearnExes/Learn_LWordsAgainstLWords';

export class ExSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'транспорт',
      partofspeech: '',
      action: ''
    }
  }
  render() {

    var filters = this.state
    return (

      <View>
        <ScrollView>
          <Text h3>Возможности (фильтры)</Text>
          {this.renderRadioPartOfSpeech()}
          {this.renderRadioFilter()}
          {this.renderRadio_LearnAction()}
          
          <ExSortButton {...filters} />
          
          <_ExSortedList {...filters} />
          
        </ScrollView>
      </View>
    )
  }
  //////////////////     SORT:
  renderRadioPartOfSpeech() {//
    return (
      <View style={styles.container}>
        <Text h4>Выберите часть речи: </Text>
        <RadioGroup
          onSelect={(index, value) => this.setState({ partofspeech: value })
          }>
          <RadioButton value={''}>
            <Text>не фильтровать</Text>
          </RadioButton>
          <RadioButton value={'v'}>
            <Text>глагол</Text>
          </RadioButton>
          <RadioButton value={'n'}>
            <Text>существительное</Text>
          </RadioButton>
          <RadioButton value={'adj'}>
            <Text>прилигательное</Text>
          </RadioButton>
        </RadioGroup>
      </View>
    )
  }

  renderRadioFilter() {

    var ar = __wordsInMemory.w
      .map(w => w.filter)
      .filter((value, index, self) => self.indexOf(value) === index)

    ar = ar.map(filter =>
      <RadioButton key={filter} value={filter}>
        <Text>{filter}</Text>
      </RadioButton>
    )

    return (
      <View style={styles.container}>
        <Text h4>Выберите название урока (категорию слов): </Text>
        <RadioGroup
          onSelect={(index, value) => this.setState({ filter: value })
          }>
          <RadioButton value={''}>
            <Text>не фильтровать</Text>
          </RadioButton>
          {ar}
        </RadioGroup>
      </View>
    )
  }

  renderRadio_LearnAction() {
    let actions = Actions.map(act =>
      <RadioButton key={act.Name} value={act.Name}>
        <Text>{act.Description}</Text>
      </RadioButton>)

    return (
      <View style={styles.container}>
        <Text h4>Выберите как будет проходить урок: </Text>
        <RadioGroup onSelect={(index, value) => this.setState({ action: value })}>
          {actions}
        </RadioGroup>
      </View>
    )
  }
}

const Actions = [/// MOVE MOVE MOVE MOVE MOVE MOVE MOVEMOV MOVE MOVE MOVE MOVEM OVEOM
  {
    Name: 'show',
    Description: 'Просто показать',
    Component: null
  }, {
    Name: 'wordsAgainstWords',
    Description: 'Перемешать и найти правильные слово-перевод',
    Component: Wrap__howManyLearn_LWordsAgainstLWords
  }, {
    Name: 'wordsAgainstWords2',
    Description: 'Перемешать и найти правильные перевод-слово',
    Component: Wrap__howManyLearn_LWordsAgainstLWords2
  }, {
    Name: 'oneWord4Versions',
    Description: 'Слово и 4 варианта ответа',
    Component: WrapLearn_TestCards
  }, {
    Name: 'chooseWordInSentence',
    Description: 'Заполнить пропущенное слово в предложении',
    Component: null
  },
]
/// words: filter partofspeech]
/// action
export function ExSortButton(props) {
  let filteredWords = __wordsInMemory.w.sort((a,b)=>a.percent>b.percent?b:a)
  if (props.filter)
    filteredWords = filteredWords.filter(w => w.filter.indexOf(props.filter) != -1)
  if (props.partofspeech)
    filteredWords = filteredWords.filter(w => w.partofspeech.indexOf(props.partofspeech) != -1)
    ///**DO IT NORMAL!!!! */
    //filteredWords=filteredWords.slice(0,3)
  // switch(props.action){
  //   case Actions.find(_=>_.Name)
  // }
  let act = Actions.find(_ => _.Name == props.action);
  let r = null;
  if (act&&act.Component)
    r = React.createElement(act.Component,{ words: filteredWords } )//

  return (
    <View>
      {r
      }
    </View>
  )
}

export function _ExSortedList(props) {
  let filteredWords = __wordsInMemory.w
  if (props.filter)
    filteredWords = filteredWords.filter(w => w.filter.indexOf(props.filter) != -1)
  if (props.partofspeech)
    filteredWords = filteredWords.filter(w => w.partofspeech.indexOf(props.partofspeech) != -1)

  return (
    <View>
      {filteredWords.map(w => <WordRow key={w.id} word={w} />)}
    </View>
  )
}


const styles = StyleSheet.create({
  // FlexStyle: {
  //   flex: 1
  // },
  // ColorRed: {
  //   backgroundColor: 'red'
  // },
  container: {
    flex: 1,
    //height: 150
    //marginTop: 40,
    //padding: 20,
  },
  text: {
    padding: 10,
    fontSize: 14,
  },
  input: {
    height: 40,
    minWidth: 200,
    //width:300,
    color: '#9197A3',
    backgroundColor: '#FAFAFA',
    borderColor: '#D8D8D8',
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,//40
    textAlign: 'center',
  },
  card: {
    flex: 0,
    marginVertical: 10
  },
})