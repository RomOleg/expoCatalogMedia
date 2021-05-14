import React from "react";
import { DrawerLayoutAndroid, StyleSheet, SafeAreaView } from 'react-native';
import AppNavigation from "./src/navigations/AppNavigation";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  }
});