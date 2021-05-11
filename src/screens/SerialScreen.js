import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MyTextArea } from '../components/MyTextArea'
import { Button } from 'react-native-elements';

export const SerialScreen = ({ navigation }) => {

    const incS = () => {
        const inc = navigation.getParam('incS');
        inc(navigation.getParam('id'))
        let x = navigation.getParam('s') + 1
        navigation.setParams({ s: x });
        // navigation.goBack()
    }
    const incE = () => {
        const inc = navigation.getParam('incE');
        inc(navigation.getParam('id'))
        let x = navigation.getParam('e') + 1
        navigation.setParams({ e: x });
    }

    const decS = () => {
        const dec = navigation.getParam('decS');
        dec(navigation.getParam('id'))
        let x = navigation.getParam('s') - 1
        navigation.setParams({ s: x });
        // navigation.goBack()
    }
    const decE = () => {
        const dec = navigation.getParam('decE');
        dec(navigation.getParam('id'))
        let x = navigation.getParam('e') - 1
        navigation.setParams({ e: x });
    }

    return (
        <View style={StyleSheet.conteiner}>
            <Text style={styles.text}>Сезон <Text>{navigation.getParam('s')}</Text></Text>
            <Text style={styles.text}>Серия <Text>{navigation.getParam('e')}</Text></Text>
            <MyTextArea comment={'my comment'}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={styles.text}>Сезон</Text>
                <Text style={styles.text}>Серия</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Button
                    onPress={incS}
                    onLongPress={decS}
                    type="outline"
                    buttonStyle={styles.btn}
                    title="+/-"
                />
                <Button
                    onPress={incE}
                    onLongPress={decE}
                    type="outline"
                    buttonStyle={styles.btn}
                    title="+/-"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
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