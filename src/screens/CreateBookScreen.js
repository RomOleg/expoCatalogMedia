import React, { useState } from "react";
import {View, Text, StyleSheet, ScrollView } from 'react-native'
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
       <ScrollView>
            <View style={styles.conteiner}>
                <Text style={styles.text}>Название книги</Text>
                <Input
                    placeholder='Введите название книги'
                    onChangeText={setName}
                    autoFocus={true}
                    />
                <Button
                    type="outline"
                    onPress={addBook}
                    buttonStyle={{
                        height: 60,
                        width: 140,  
                    }}

                    title="Добавить"
                />
            </View>
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 50
    },
    text: {
        fontSize: 20
    }
})