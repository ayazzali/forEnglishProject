import React, { Component } from 'react'
import { AsyncStorage, AppRegistry, TextInput, View, ScrollView, ListView, StyleSheet, TouchableHighlight, Button } from 'react-native'
import { StackNavigator } from "react-navigation"
//import { RadioButtons } from "react-native-radio-buttons"
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button"
import CheckBox from 'react-native-check-box'
import { Text } from 'react-native-elements'
import *as U from './util'

_users = "users"
export class Login extends React.Component {
  _sudent = "student";
  _teacher = "teacher";
  teachers = [];
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      fullname: '',
      status: '',
      group: '',
      pass: '',
      fromkai: false,
      teacherId: '',
      isSignUping: false,//will be delete before signUp
      teachers: []//will be deleted before signUp
    }
    AsyncStorage.getItem("User")
      .then((val) => {
        if (val) {
          console.log("already LogedIn.")
          let valObj = JSON.parse(val);
          this.props.navigation.navigate(
            valObj.status == this._teacher ? "_MainTeacher" : '_CategoriesList', valObj);
        }
        else
          console.log("new User")
      })

    U.RestFetch('users?status=' + this._teacher, 'get')
      .then(val => this.setState({ teachers: val }));

  }

  render() {
    let options = ["Преподаватель", "Студент"];
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView>
          <View style={styles.card}>
            <Text style={styles.title} >
              Пожалуйста представьтесь:
            </Text>
          </View>
          {this.renderLogin()}
          {this.renderPass()}
          {!this.state.isSignUping ? this.renderBtnLogIn() : null}

          {this.state.isSignUping ? this.renderFullName() : null}
          {this.state.fullname ? this.renderFromkai() : null}
          {this.state.fromkai ? this.renderStatus() : null}
          {this.state.status == this._sudent ? this.renderTeachersList() : null}
          {this.renderBtnSignUp()}
        </ScrollView>
      </View>
    );
  }
  renderTeachersList() {// TODO SelectedList ......
    let ts = this.state.teachers.map(val =>
      <RadioButton
        key={val.id}
        style={{ flex: 1, padding: 10 }}
        value={val.id}>
        <Text>
          {val.fullname}
        </Text>
      </RadioButton>)
    return (
      <View>
        <Text>Выберите вашего преподавателя:</Text>
        <RadioGroup
          onSelect={(index, value) => this.setState({ teacherId: value })// = user.id
          }>
          {ts}
        </RadioGroup>
      </View>
    )
  }

  renderWhatGroup() {
    return (
      <View style={styles.card} >
        <TextInput style={styles.input}///, если ты каист
          placeholder="№ группы"
          autoCorrect={false}
          onChangeText={(value) => this.setState({ group: value })} />
      </View>)
  }
  renderFromkai() {
    return (
      <CheckBox
        style={{ flex: 1, padding: 10 }}
        onClick={() => { this.setState((prev) => { return { fromkai: !prev.fromkai } }); }}
        leftText={"Из КАИ?"}
      />
    )
  }
  renderFullName() {
    return (
      <View style={styles.card}>
        <TextInput style={styles.input}
          placeholder="ФИО" autoCorrect={false}
          onChangeText={(value) => this.setState({ fullname: value })} />
      </View>
    )
  }
  renderLogin() {
    return (
      <View style={styles.card}>
        <TextInput style={styles.input}
          placeholder="Логин"
          autoCorrect={false}
          onChangeText={(value) => this.setState({ username: value })} />
      </View>
    )
  }
  renderPass() {
    return (
      <View style={styles.card}>
        <TextInput style={styles.input}///, если ты каист
          placeholder="Пароль"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(value) => this.setState({ pass: value })} />
      </View>)
  }
  renderBtnSignUp() {
    return (
      <View style={styles.card}>
        <Button title="Зарегистрироваться" onPress={() => {
          //debugger;
          if (this.state.isSignUping)
            return this._SignUp.bind(this)()
          else
            this.setState({ isSignUping: true })
        }} />
      </View>
    )
  }
  renderBtnLogIn() {
    return (
      <View style={styles.card}>
        <Button title="Войти" onPress={this._LogIn.bind(this)} />
      </View>
    )
  }
  /// препод или студент
  renderStatus() {
    return (
      <View style={styles.container}>
        <RadioGroup
          onSelect={(index, value) => this.setState({ status: value })
          }>
          <RadioButton value={this._teacher}>
            <Text>Преподаватель</Text>
          </RadioButton>
          <RadioButton value={this._sudent}>
            <Text>Студент</Text>
          </RadioButton>
        </RadioGroup>
      </View>
    )
  }
  _SignUp = async () => {///
    console.log("_SignUp");
    //debugger;
    const{ teachers,isSignUping,..._state} = this.state// isted of delete teachers and isSignUping
    let user = await U.RestFetch(_users, "POST", _state)
    await AsyncStorage.setItem('User', JSON.stringify(user))
    console.log('[from storage] V')
    console.log(JSON.parse(await AsyncStorage.getItem('User')))
    //debugger;

    console.log('_SignUp & _LogIn: succeed- ' + user.fullname)
    if (this.state.status == this._teacher)
      this.props.navigation.navigate('_MainTeacher', user);
    else
      this.props.navigation.navigate('_CategoriesList', user);

  };
  _LogIn = async () => {///
    //debugger;

    console.log('_LogIn')
    let res = await U.RestFetch(_users + '?username=' + this.state.username + '&pass=' + this.state.pass, "get")
    if (res && res[0]) {
      var user = res[0]
      await AsyncStorage.setItem('User', JSON.stringify(user))
      console.log('_LogIn: succeed- ' + user.fullname)
      console.log('[from storage] V')
      console.log(JSON.parse(await AsyncStorage.getItem('User')))

      if (user.status == this._teacher)
        this.props.navigation.navigate('_MainTeacher', user);
      else
        this.props.navigation.navigate('_CategoriesList', user);
    }
    else {
      debugger
      alert("Неправильный логин или пароль")
      console.log(res)
    }
  };
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