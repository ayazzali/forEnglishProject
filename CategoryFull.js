import React, { Component } from 'react'
import { AppRegistry, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight } from 'react-native'

export class CategoryFull extends React.Component {
  constructor(props) {
    super(props)
    //console.log(props)
    //fetch
    //and... :
    this.state = {
      Description: "Description",
      Words: [{ Word: "qwerqw", Translate: "цукйцук", Percent: 0 }, { Word: "qwerqw", Translate: "цукйцук", Percent: 0 }, { Word: "qwerqw", Translate: "цукйцук", Percent: 0 },//,"Word - translation - persent --Transcript --Voice","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468",
      ]
    }
  }
  //после нажатия на категорию для её изучения 
  // сначала показывается список слов и % их изучения, статискика
  render() {
    const name = this.props.navigation.getParam('name', '');
    const words = this.state.Words.map((value) => <WordRow {...value} />/*<Text>{value}</Text>*/)
    return (
      <View style={styles.Border//, {height:100, color:"orange" /*width:200*/}
      }
      >
        <Text>
          {name}
        </Text>
        <Text>
          {this.state.Description}
        </Text>
        <ScrollView>
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