import React, { Component } from 'react'
import { AppRegistry, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight } from 'react-native'

export default class CategoriesList extends React.Component {

  render() {
    const text = "sdfsaf"
    const categories = ["qwer11", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv",
      "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv",
      "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv",
      "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv",
      "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv22",
      "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv22",]
      const categoriesCopmponents=(categories.map((val) => <CategoryButton Name={val} />));
    return (
      <ScrollView style={styles.FlexStyle}>
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
  }
})

//AppRegistry.registerComponent('CategoriesList',()=>CategoriesList);