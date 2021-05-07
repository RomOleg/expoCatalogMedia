
import React from "react";
import { ScrollView } from "react-native";
import { DrawerLayoutAndroid, StyleSheet, View, Text, Button, Alert, LogBox, YellowBox } from 'react-native';
import { Footer } from './src/Footer';
import { Header } from './src/Header';
import AppNavigation from "./src/navigations/AppNavigation";
import { SerialPage } from "./src/SerialPage";

export default function App() {

  return (
  // <View style={styles.container}>
  //    <View style={styles.header}>
  //      <Header />
  //    </View>

  //   <ScrollView style={styles.content}>
  //     <SerialPage />
  //   </ScrollView>

  //     <View style={styles.footer}>
  //      <Footer />
  //    </View>
  // </View> 
    <AppNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.18,
    justifyContent: 'flex-start'
  },
  content: {
    flex: 1,
    backgroundColor: '#fff'
  },
  footer: {
    flex: 0.14,
    justifyContent: 'flex-end'
  }, 
  aaa: {}
});
