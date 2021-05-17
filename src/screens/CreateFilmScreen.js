import React, { useState } from "react";
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import { Button, Input } from "react-native-elements";

export const CreateFilmScreen = ({ navigation }) => {

    const [name, setName] = useState();

    const addFilm = () => {
        if (name) {
            const navigationAddFilm = navigation.getParam('addFilm')
            navigationAddFilm(name.trim())
            navigation.goBack()
        }else alert("Укажите название фильма")
    }

    return (
        <ScrollView>
            <View style={styles.conteiner}>
                <Text style={styles.text}>Название фильма</Text>
                <Input
                    autoFocus={true}
                    placeholder='Введите название фильма'
                    multiline={true}
                    inputStyle={{textAlign: "center"}}
                    maxLength={40}
                    onChangeText={setName}
                    />
                <Button
                    type="outline"
                    onPress={addFilm}
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