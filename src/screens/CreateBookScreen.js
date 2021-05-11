import React, { useState } from "react";
import {View, Text, StyleSheet } from 'react-native'
import { Button, Input } from "react-native-elements";

export const CreateBookScreen = ({ navigation }) => {

    const [name, setName] = useState();

    const addBook = () => {
        if (name) {
            const navigationAdd = navigation.getParam('addBook')
            navigationAdd(name)
            navigation.goBack()
        }else alert("Укажите название книги")
    }

    return (
        <View style={styles.conteiner}>
            <Text style={styles.text}>Название книги</Text>
            <Input
                placeholder='Введите название книги'
                onChangeText={setName}
                />
            <Button
                type="outline"
                onPress={addBook}
                buttonStyle={{
                    flex: 1,
                    height: 100,
                    width: 100,  
                }}

                title="Добавить"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },
    text: {
        fontSize: 20
    }
})