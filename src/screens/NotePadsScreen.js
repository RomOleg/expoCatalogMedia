import React, { useState } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { ListItem } from "react-native-elements";
import { AddBtn } from "../components/AddBtn";
import { isNameSearch, MySearchBar } from "../components/MySearchBar";
import { OpenDatabase } from "../database/connectionDB";

const db = OpenDatabase("db.db");

export const NotePadsScreen = ({ navigation }) => {
    const [notepad, setNotepad] = useState(null);

    React.useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "create table if not exists notepad (id STRING (20) PRIMARY KEY UNIQUE NOT NULL, name STRING (40), comment STRING, date STRING);"
            );
        });
    }, []);

    React.useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                `select * from notepad;`,
                [],
                (_, { rows: { _array } }) => setNotepad(_array)
            );
        });
    }, [notepad]);

    const addNotePad = (name) => {
        let date = new Date();
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO notepad (id, name, comment, date) VALUES (?, ?, ?, ?);",
                [
                    Date.now().toString(),
                    name,
                    "",
                    `${date.getDate()}:${date.getMonth()+1}:${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
                ]
            );
        });
    };

    const deleteNotePad = (id) => {
        db.transaction((tx) => {
            tx.executeSql(`delete from notepad where id = ?;`, [id]);
        });
    };

    const gotoNotePad = (id, name, comment, date) => {
        navigation.navigate("NotePad", {
            id,
            name,
            comment,
            date,
            changeComment,
        });
    };

    const gotoAddNotePad = () => {
        navigation.navigate("AddNotePad", { addNotePad });
    };

    const changeComment = (id, comment) => {
        db.transaction((tx) => {
            tx.executeSql(`update notepad set comment = ? where id = ?;`, [
                comment,
                id,
            ]);
        });
    };

    const [search, setSearch] = useState("");

    return (
        <View style={styles.conteiner}>
            <AddBtn goto={gotoAddNotePad} />
            <MySearchBar text={search} onText={(text) => setSearch(text)} />
            <ScrollView style={styles.conteiner}>
                {notepad === null || notepad.length === 0 ? (
                    <></>
                ) : (
                    notepad.map((el) => (
                        <View key={el.id}>
                            {isNameSearch(el.name, search) || !search ? (
                                <ListItem key={el.id} bottomDivider>
                                    <ListItem.Content>
                                        <TouchableOpacity
                                            onPress={() =>
                                                gotoNotePad(
                                                    el.id,
                                                    el.name,
                                                    el.comment,
                                                    el.date
                                                )
                                            }
                                            onLongPress={() =>
                                                deleteNotePad(el.id)
                                            }
                                        >
                                            <ListItem.Title>
                                                {el.name}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {el.date}
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
