import React, { Component } from 'react'
import { AppRegistry, Button, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight } from 'react-native'

import { ExData } from './ParseCategories'


export class CategoryFull extends React.Component {
  constructor(props) {
    super(props)
    //console.log(props)
    //fetch
    //and... :
    this.state = {
      Description: "Description",
      Words: [{ Word: "word", Translate: "Translate", Percent: 0 }, { Word: "word2", Translate: "Translate2", Percent: 0 }, { Word: "hello", Translate: "привет", Percent: 0 },//,"Word - translation - persent --Transcript --Voice","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468",
      ]
    }

    ExData(props.navigation.getParam('href', ''))
      .then((array) => {
        let g = array.map((q, id) => { return { "Word": q[0], "Translate": q[1], Percent: 0, key: id } });
        this.setState({ Words: g })
      })
  }
  componentDidMount = () => console.warn("componentDidMount")
  //после нажатия на категорию для её изучения 
  // сначала показывается список слов и % их изучения, статискика
  render() {
    const name = this.props.navigation.getParam('name', '');
    const words = this.state.Words.map((value, id) => <WordRow {...value} />/*<Text>{value}</Text>*/)
    return (
      <View style={styles.Border//, {height:100, color:"orange" /*width:200*/}
      }>
        <Button title={"Добавить категорию на изучение"} onPress />
        <Button title={"Учить"} />
        <ScrollView>
          <Text h4>Категория: {name}</Text>
          <Text >Описание: {this.state.Description}</Text>
          {words}
        </ScrollView>
      </View>
    )
  }
}

function WordRow(props) {
  return (

    <View style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>

      <Text> {props.Word}</Text>
      <Text> {props.Translate}</Text>
      <Text> {props.Percent}%</Text>
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
  Border: {
    borderWidth: 1
  }
})