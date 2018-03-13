import React, { Component } from 'react'
import { AppRegistry, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight } from 'react-native'

class CategoryFull extends React.Component{
  constructor(props){
    super(props)
    //fetch
    //and... :
    this.state={
      Description:"Description",
      Words:[{Word:"qwerqw",Translate:"цукйцук",Percent:0},"Word - translation - persent --Transcript --Voice","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468","Words aqwerwe","Words5468",]
    }
  }
  //после нажатия на категорию для её изучения 
    // сначала показывается список слов и % их изучения, статискика
  render(){
    const words=this.state.Words.map((value)=> <WordRow {...value}/>/*<Text>{value}</Text>*/)
    return(
    <View style={styles.Border, {height:100, color:"orange" /*width:200*/}}>
      <Text>
        {this.props.Name}
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

function WordRow (props){
  return(
    
    <Text>
      {props.Word} {props.Translate} {props.Percent}%
      </Text>
  )
  
}



class CategoriesList extends React.Component {
  render() {
    const text = "sdfsaf"
    const categories = ["qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv",
      "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv",
      "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv",
      "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv",
      "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv22",
      "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv22",]
      const categoriesCopmponents=(categories.map((val) => <CategoryButton Name={val} />));
    return (
      <ScrollView style={styles.FlexStyle}>
                                     <CategoryFull /*category*/id={2}/>
        {categoriesCopmponents}

        <View>
          <Text style={styles.ColorRed}>
            hihihihihi
          </Text>
          <Text style={styles.ColorRed}>
            hi2hi2hi2hi2hi2
          </Text>
        </View>
        <View>
          <Text>
            hohohohoho
            </Text>
        </View>

      </ScrollView>

    )
  }
}

class CategoryButton extends React.Component {
  render() {
    return (
      <TouchableHighlight /*onPress={this.props.onForward}*/  >
        <Text>
          {this.props.Name}
        </Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  FlexStyle: {
    flex: 1
  },
  ColorRed: {
    backgroundColor: 'red'
  },
  Border: {
    border: 'solid 1'
  }
})

AppRegistry.registerComponent('CategoriesList',()=>CategoriesList);
