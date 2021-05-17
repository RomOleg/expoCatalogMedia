import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Keyboard } from "react-native";
import { ListItem } from "react-native-elements";
import { AddBtn } from "../components/AddBtn";
import { MySearchBar, isNameSearch } from "../components/MySearchBar";
import { OpenDatabase } from "../database/connectionDB";

const db = OpenDatabase("db.db");

export const BooksScreen = ({ navigation }) => {
    const [books, setBooks] = useState(null);

    React.useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "create table if not exists books (id STRING (20) PRIMARY KEY NOT NULL UNIQUE, name STRING, stopping INTEGER, comment STRING, status STRING);"
            );
        });
    }, []);

    React.useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                `select * from books;`,
                [],
                (_, { rows: { _array } }) => setBooks(_array)
            );
        });
    }, [books]);

    const addBook = (name) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO books (id, name, stopping, comment, status) VALUES (?, ?, ?, ?, ?);",
                [Date.now().toString(), name, 0, "", "Читаю"]
            );
        });
    };

    const deleteBook = (id) => {
        db.transaction((tx) => {
            tx.executeSql(`delete from books where id = ?;`, [id]);
        });
        // setBooks(prev => prev.filter(prev => prev.id !== id))
    };

    const gotoBook = (id, name, status, page, comment) => {
        navigation.navigate("Book", {
            id,
            name,
            status,
            page,
            comment,
            changeStatus,
            changeStopping,
            changeComment,
        });
    };

    const gotoAddBook = () => {
        navigation.navigate("AddBook", { addBook });
    };

    const changeStopping = (id, page) => {
        db.transaction((tx) => {
            tx.executeSql(`update books set stopping = ? where id = ?;`, [
                page,
                id,
            ]);
        });
    };

    const changeStatus = (id, status) => {
        db.transaction((tx) => {
            tx.executeSql(`update books set status = ? where id = ?;`, [
                status,
                id,
            ]);
        });
    };

    const changeComment = (id, comment) => {
        db.transaction((tx) => {
            tx.executeSql(`update books set comment = ? where id = ?;`, [
                comment,
                id,
            ]);
        });
    };

    const [search, setSearch] = useState("");

    React.useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardShowHide);
        Keyboard.addListener('keyboardDidHide', _keyboardShowHide);
      }, [visibleAddBtn]);
    
      const _keyboardShowHide = () => {
        setVisibleAddBtn((visibleAddBtn) => !visibleAddBtn)
      };

      const [visibleAddBtn, setVisibleAddBtn] = useState(true)

    return (
        <View style={styles.conteiner}>
            <AddBtn visible={visibleAddBtn} goto={gotoAddBook} />
            <MySearchBar text={search} onText={(text) => setSearch(text)} />
            <ScrollView style={styles.conteiner} >
                {books === null || books.length === 0 ? (
                    <></>
                ) : (
                    books.map((el) => (
                        <View key={el.id}>
                            {isNameSearch(el.name, search) || !search ? (
                                <ListItem key={el.id} bottomDivider>
                                    <ListItem.Content>
                                        <TouchableOpacity
                                            onPress={() =>
                                                gotoBook(
                                                    el.id,
                                                    el.name,
                                                    el.status,
                                                    el.stopping,
                                                    el.comment
                                                )
                                            }
                                            onLongPress={() =>
                                                deleteBook(el.id)
                                            }
                                        >
                                            <ListItem.Title>
                                                {el.name}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                статус: {el.status}
                                            </ListItem.Subtitle>
                                        </TouchableOpacity>
                                    </ListItem.Content>
                                </ListItem>
                            ) : null}
                        </View>
                    ))
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        zIndex: 0,
    },
});
