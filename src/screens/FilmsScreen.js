import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const FilmsScreen = () => {
    return (
        <View style={styles.conteiner}>
            <Text>Films</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})