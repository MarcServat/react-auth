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
    firebase.initializeApp();
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