import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { MyTextArea } from '../components/MyTextArea'

export const BookScreen = ({ navigation }) => {

    const [status, setStatus] = useState();
    const [page, setPage] = useState();

    const changeStatus = () => {
        const change = navigation.getParam('changeStatus');
        change(navigation.getParam('id'), status)
    }

    const changePage = () => {
        const change = navigation.getParam('changeStoping');
        change(navigation.getParam('id'), page)
        navigation.goBack()
    }

    return (
        <View style={StyleSheet.conteiner}>
            <Text style={styles.text}>Статус: <Text>{navigation.getParam('status')}</Text></Text>
            <Text style={styles.text}>Остановлено на: <Text>{navigation.getParam('page')}</Text></Text>
            <MyTextArea comment={'my comment'}/>
            <Button
                    onPress={changePage}
                    type="outline"
                    buttonStyle={styles.btn}
                    title="Изменить страницу"
                />
           
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