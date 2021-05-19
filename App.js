import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { MyDrawer } from "./src/components/MyDrawer";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <MyDrawer />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
    },
});
