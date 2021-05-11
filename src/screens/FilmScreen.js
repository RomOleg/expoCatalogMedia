import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MyTextArea } from '../components/MyTextArea'

export const FilmScreen = ({ navigation }) => {

    const [status, setStatus] = useState();

    const changeStatus = () => {
        const change = navigation.getParam('changeStatus');
        change(navigation.getParam('id'), status)
    }

    return (
        <View style={StyleSheet.conteiner}>
            <Text style={styles.text}>Статус <Text>{navigation.getParam('status')}</Text></Text>
           
            <MyTextArea comment={'my comment'}/>
           
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        padding: 10,
        fontSize: 18,
    },
    btn: {
        flex: 1,
        height: 100,
        width: 100,  
    }
})