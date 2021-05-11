import React , { useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity, ScrollView, Button } from "react-native";
import { ListItem, Avatar, Input, Icon } from 'react-native-elements';
import { AddBtn } from '../components/AddBtn';

export const BooksScreen = ({ navigation }) => {

    const [books, setBooks] = useState([
        {
            id: Date.now().toString(),
            name: 'film',
            status: 'в планах',
            stoping: {
                page: 10,
                
            }
        }
    ]);

    const addBook = (name) => {
        setBooks(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                name,
                status: 'в планах',
                stoping: {
                    page: 0,
                    
                }
            }
        ])
    }

    const deleteBook = (id) => {
        setBooks(prev => prev.filter(prev => prev.id !== id))
    }

    const gotoBook = (id, name, status, page) => {
        navigation.navigate('Book', {id, name, status, page, changeStatus, changeStoping})
    }


    const gotoAddBook = () => {
        navigation.navigate('AddBook', { addBook })
    }

    const changeStatus = (id, status) => {
        setBooks(prev => prev.filter(prev => {
            if (prev.id == id) {
                prev.status = status
            }
            return prev
        }))
    }

    const changeStoping = (id, page) => {
        setBooks(prev => prev.filter(prev => {
            if (prev.id == id) {
                prev.stoping.page = page
            }
            return prev
        }))
    }

    return (
        <View style={styles.conteiner}>

            <AddBtn goto={gotoAddBook} />

            <ScrollView style={styles.conteiner}>
            {
                books.map((el, i) => (
                    <ListItem key={i} bottomDivider>  
                        <ListItem.Content>
                            <TouchableOpacity onPress={() => gotoBook(el.id, el.name, el.status, el.stoping.page)} onLongPress={() => deleteBook(el.id)}>
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
})