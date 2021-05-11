import React, { useState } from "react";
import {View, Text, StyleSheet } from 'react-native'
import { Button, Input } from "react-native-elements";

export const CreateFilmScreen = ({ navigation }) => {

    const [name, setName] = useState();

    const addFilm = () => {
        if (name) {
            const navigationAddFilm = navigation.getParam('addFilm')
            navigationAddFilm(name)
            navigation.goBack()
        }else alert("Укажите название фильма")
    }

    return (
        <View style={styles.conteiner}>
            <Text style={styles.text}>Название фильма</Text>
            <Input
                placeholder='Введите название фильма'
                onChangeText={setName}
                />
            <Button
                type="outline"
                onPress={addFilm}
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