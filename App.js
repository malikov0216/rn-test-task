/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";
import SecondApp from './secondApp'
import MainApp from './mainApp'

const App: () => React$Node = () => {
  const isMainApp = true
  let content = (
    <SecondApp />
  )
  if(isMainApp) {
    content = (
      <MainApp />
    )
  }
  console.log(content)
  return (
    <View>{content}</View>
  )
}
export default App;
