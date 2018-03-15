//import React, { Component } from 'react'
// import { AsyncStorage, AppRegistry, TextInput, View, ScrollView, ListView, StyleSheet, Text, TouchableHighlight, Button } from 'react-native'
// import { StackNavigator } from "react-navigation"
import select from 'xpath.js'
import { DOMParser } from 'xmldom'
import { inspect, log, format } from 'react-native-util'

export async function ExData() {
  const pattern = ""//"^a.{4}$";
  return fetch("http://studyfun.ru/Слова%20по%20теме/Театр%2c%20цирк%2c%20кино%2c%20эстрада/")
    .catch((error) => console.error("error0"))
    .then((r) => r.text()).catch((error) => console.error("error1"))
    .then((xml) => {
      //console.log(json)
      try {
        let doc = new DOMParser().parseFromString(xml);
        if (doc)
          console.log("doc is not null");
        let patternRow = '//div/div[2]/div[2]/table/tbody/tr';//"//td[2]/span"

        try {
          let rows = select(doc, patternRow)
          try {
            console.log(rows ? "rows is good" : "(")
            console.log(typeof (rows));
            log("rows")

            //console.log(rows[0].localName + ": " + rows[0].firstChild.data)
            //console.log("node: " + rows[0].toString())

            return rows.map(el => {
              console.log("el.toString()");
              let patternRow2 = "//td[*]/span/text()"
              let doc2 = new DOMParser().parseFromString(el.toString());
              let dataAtRow = select(doc2, patternRow2)
              dataAtRow.forEach(el2 => {
                log(el2.toString())
              });

              return dataAtRow.map(el2 => el2.toString());
            });
            //rows.map((val)=>console.log(val.toString()))
            //log(rows)
            // inspect( rows)
            //console.log(format(rows));
            //console.log(rows.toString())
          } catch (err) { console.log("+=+= " + err) }
        } catch (err) { console.log("domErr") }
      } catch (err) { console.log("selectErr") }
      // let en = rows.forEach(el => 
      //   console.log(el)
      // );

      //  patternRow = '//td[3]/span/text()'
      //  rows = select(doc, patternRow)
      // let ru = rows.forEach(el =>         console.log(el ? el : "none"));

      //.map((val)=>console.log(val.toString))
      //console.log(nodes[0].localName + ": " + nodes[0].firstChild.data)
      //console.log("node: " + nodes[0].toString())
    })
    .catch((error) => {
      console.error("error2");
      //await AsyncStorage.setItem('name', this.state.name);
      // AsyncStorage.getItem("name")
      //   .then((value) => {
      //     const categories = ["hello", "qwer11", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv", "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv", "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv", "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv", "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv22", "qwer", "qwerqwer", "asd", "asdfasdf", "zxc", "zxcvzxcv22",]
      //     categories.push(value)
      //     this.setState({ categories: categories })
      //   })
    });

}
