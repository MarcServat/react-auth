/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase'
import {Header} from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

type Props = {};
export default class App extends Component<Props> {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAIgGXNbrGeNss7xoGrd8xx5RMsIar7NRg",
      authDomain: "auth-7c065.firebaseapp.com",
      databaseURL: "https://auth-7c065.firebaseio.com",
      projectId: "auth-7c065",
      storageBucket: "auth-7c065.appspot.com",
      messagingSenderId: "374313026599"
    });
  }

  render() {
    return (
      <View>
        <Header title="HIHIHIH"/>
        <LoginForm/>
      </View>
    );
  }
}