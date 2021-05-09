import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput } from 'react-native'
import { Button, Input } from "react-native-elements";

export const CreateSerialScreen = ( { navigation }) => {

    const [name, setName] = useState();
    const [s, setS] = useState('1');
    const [e, setE] = useState('0');

    const addSerial = () => {
        if (name) {
            const navigationAddSerial = navigation.getParam('addSerial')
            navigationAddSerial(name, +s, +e)
            navigation.goBack()
        }else alert("Укажите название сериала")
    }

    return (
        <View style={styles.conteiner}>
            <Text style={styles.text}>Название сериала</Text>
            <Input
                placeholder='Введите название сериала' onChangeText={setName} />
            <Text style={styles.text}>Сезон</Text>
            <Input placeholder='Укажите номер сезона' keyboardType="numeric" onChangeText={setS} />    
            <Text style={styles.text}>Серия</Text>
            <Input placeholder='Укажите номер серии' keyboardType="numeric" onChangeText={setE} />    
            <Button
                type="outline"
                buttonStyle={{
                    flex: 1,
                    height: 100,
                    width: 100,  
                }}
                onPress={addSerial}
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