
import React from "react";
import { ScrollView } from "react-native";
import { DrawerLayoutAndroid, StyleSheet, View, Text, Button, Alert, LogBox, YellowBox } from 'react-native';
import { Footer } from './src/Footer';
import { Header } from './src/Header';
import AppNavigation from "./src/navigations/AppNavigation";
import { SerialPage } from "./src/SerialPage";

export default function App() {

  return (
    <AppNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
