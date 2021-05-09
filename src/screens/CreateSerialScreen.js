import React from "react";
import {View, Text, StyleSheet } from 'react-native'
import { Button, Input } from "react-native-elements";

export const CreateSerialScreen = () => {
    return (
        <View style={styles.conteiner}>
            <Text>Название сериала</Text>
            <Input
                placeholder='Введите название сериала'
                />
            <Button
                type="outline"
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
        justifyContent: 'center'
    }
})