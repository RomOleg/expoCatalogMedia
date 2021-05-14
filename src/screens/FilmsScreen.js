import React , { useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity, ScrollView, Button } from "react-native";
import { ListItem, Avatar, Input, Icon } from 'react-native-elements';
import { AddBtn } from '../components/AddBtn';

export const FilmsScreen = ({ navigation }) => {

    const [films, setFilms] = useState([
        {
            id: Date.now().toString(),
            name: 'film',
            status: 'в планах'
        }
    ]);

    const addFilm = (name) => {
        setFilms(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                name,
                status: 'в планах'
            }
        ])
    }

    const deleteFilm = (id) => {
        setFilms(prev => prev.filter(prev => prev.id !== id))
    }

    const gotoFilm = (id, name, status) => {
        navigation.navigate('Film', {id, name, status, changeStatus})
    }


    const gotoAddFilm = () => {
        navigation.navigate('AddFilm', { addFilm })
    }

    const changeStatus = (id, status) => {
        setFilms(prev => prev.filter(prev => {
            if (prev.id == id) {
                prev.status = status
            }
            return prev
        }))
    }

    return (
        <View style={styles.conteiner}>

            <AddBtn goto={gotoAddFilm} />

            <ScrollView style={styles.conteiner}>
            {
                films.map((el, i) => (
                    <ListItem key={i} bottomDivider>  
                        <ListItem.Content>
                            <TouchableOpacity onPress={() => gotoFilm(el.id, el.name, el.status)} onLongPress={() => deleteFilm(el.id)}>
                            <ListItem.Title>{el.name}</ListItem.Title>
                            <ListItem.Subtitle>статус {el.status}</ListItem.Subtitle>
                            </TouchableOpacity>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        zIndex: 0,
    },
    add: {
        flex: 1,
        position: 'absolute',
        zIndex: 1,
        right: 35,
        bottom: 30
    }
})