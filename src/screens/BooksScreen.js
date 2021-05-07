import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const BooksScreen = () => {
    return (
        <View style={styles.conteiner}>
            <Text>Books</Text>
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