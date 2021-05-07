import React , { useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity, ScrollView, Button } from "react-native";
import { ListItem, Avatar, Input } from 'react-native-elements';
// import { FAB } from 'react-native-fab';
import { MyFAB } from '../components/MyFAB';

export const SerialsScreen = () => {

    const [list, setList] = useState([
        { id: "1", name: 'serial 1', status: "просмотренно" },
        { id: "2",name: 'serial 2',status: "смотрю" },
        { id: "3",name: 'serial 3',status: "смотрю" },
        { id: "4",name: 'serial 4',status: "смотрю" },
        { id: "5",name: 'serial 5',status: "смотрю" },
        { id: "6",name: 'serial 6',status: "смотрю" },
        { id: "7",name: 'serial 7',status: "смотрю" },
        { id: "8",name: 'serial 8',status: "смотрю" },
        { id: "9",name: 'serial 9',status: "смотрю" },
        { id: "11",name: 'serial 12',status: "смотрю" },
        { id: "12",name: 'serial 122',status: "смотрю" },
        { id: "13",name: 'serial 23',status: "смотрю" },
        { id: "14",name: 'serial 2222',status: "смотрю" },
        { id: "21",name: 'serial 32',status: "смотрю" },
        { id: "22",name: 'serial 33',status: "смотрю" },
        { id: "23",name: 'serial 44',status: "смотрю" },
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
        
    const deleteSerial = (id) => {
        console.log(`delete ${id}`);
        console.log(list);
        setList(prev => prev.filter(prev => prev.id !== id))
    }

    return (
        <ScrollView style={styles.conteiner}>
        
         

        {
            list.map((el, i) => (
                <ListItem key={i} bottomDivider>  
                    <ListItem.Content>
                        <TouchableOpacity onPress={() => alert(el.name)} onLongPress={() => deleteSerial(el.id)}>
                        <ListItem.Title>{el.name}</ListItem.Title>
                        <ListItem.Subtitle>{el.status}</ListItem.Subtitle>
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