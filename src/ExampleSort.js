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

export class ExSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'транспорт',
      partofspeech: '',

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
          <_ExSort {...filters} />
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

  renderRadioFilter() {//

    var ar = __wordsInMemory.map(w => w.filter).filter((value, index, self) => self.indexOf(value) === index)

    ar = ar.map(filter =>
      <RadioButton key={filter} value={filter}>
        <Text>{filter}</Text>
      </RadioButton>
    )
    debugger;
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
}

export function _ExSort(props) {
  let filteredWords = __wordsInMemory
  if (props.filter)
    filteredWords = filteredWords.filter(w => w.filter.indexOf(props.filter) != -1)
  if (props.partofspeech)
    filteredWords = filteredWords.filter(w => w.partofspeech.indexOf(props.partofspeech) != -1)

  debugger;
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