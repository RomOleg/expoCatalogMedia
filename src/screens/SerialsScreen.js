import React , { useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity, ScrollView, Button } from "react-native";
import { ListItem, Avatar, Input } from 'react-native-elements';
import { createDrawerNavigator } from "react-navigation-drawer";
// import { FAB } from 'react-native-fab';
import { MyFAB } from '../components/MyFAB';

export const SerialsScreen = ({ navigation }) => {

    const [list, setList] = useState([
        { id: "11", name: 'Arrow', s: 1, e: 1 },
        { id: "12", name: 'serial 223', s: 3, e: 1 },
        { id: "13", name: 'serial 224', s: 20, e: 2 },
        { id: "14", name: 'serial 1', s: 1, e: 2 },
        { id: "15", name: 'serial 2', s: 1, e: 3 },
    ]);
        
    const addSerial = (name) => {
        let add = Alert.prompt('serial', '');
        setList(prev => 
            [
                ...prev,
                {
                    id: Date.now().toString(),
                    name,
                    status: 'wotch'
                }
        ])
    }

    const incS = (id) => {
        setList(prev => prev.filter(prev => {
            if (prev.id == id) {
                prev.s++;
            }
            return prev
        }))
    }

    const deсS = (id) => {
        setList(prev => prev.filter(prev => {
            if (prev.id == id) {
                prev.s--;
            }
            return prev
        }))
    }

    const incE = (id) => {
        setList(prev => prev.filter(prev => {
            if (prev.id == id) {
                prev.e++;
            }
            return prev
        }))
    }

    const deсE = (id) => {
        setList(prev => prev.filter(prev => {
            if (prev.id == id) {
                prev.e--;
            }
            return prev
        }))
    }
        
    const deleteSerial = (id) => {
        setList(prev => prev.filter(prev => prev.id !== id))
    }

    // const drawer = createDrawerNavigator()

    // const toggleMenu = () => {
    //     drawer.toggleDraver();
    // }

    const gotoStrial = (id, name, s, e) => {
        navigation.navigate('Serial', { name, s, e , incS, id, incE })
    }

    return (
        <ScrollView style={styles.conteiner}>
        {
            list.map((el, i) => (
                <ListItem key={i} bottomDivider>  
                    <ListItem.Content>
                        <TouchableOpacity onPress={() => gotoStrial(el.id, el.name, el.s, el.e)} onLongPress={() => deleteSerial(el.id)}>
                        <ListItem.Title>{el.name}</ListItem.Title>
                        <ListItem.Subtitle>сезон: {el.s} серия: {el.e}</ListItem.Subtitle>
                        </TouchableOpacity>
                    </ListItem.Content>
                </ListItem>
            ))
        }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
})