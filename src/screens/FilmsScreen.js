import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Keyboard } from "react-native";
import { ListItem } from "react-native-elements";
import { AddBtn } from "../components/AddBtn";
import { isNameSearch, MySearchBar } from "../components/MySearchBar";
import { OpenDatabase } from "../database/connectionDB";

const db = OpenDatabase("db.db");

export const FilmsScreen = ({ navigation }) => {
    const [films, setFilms] = useState(null);

    React.useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "create table if not exists films (id STRING (20) PRIMARY KEY UNIQUE NOT NULL, name STRING, status STRING, comment STRING);"
            );
        });
    }, []);

    React.useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                `select * from films;`,
                [],
                (_, { rows: { _array } }) => setFilms(_array)
            );
        });
    }, [films]);

    const status = ["В планах", "Просмотренно"];

    const addFilm = (name) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO films (id, name, status, comment) VALUES (?, ?, ?, ?);",
                [Date.now().toString(), name, status[0], ""]
            );
        });
    };

    const deleteFilm = (id) => {
        db.transaction((tx) => {
            tx.executeSql(`delete from films where id = ?;`, [id]);
        });
        // setFilms((prev) => prev.filter((prev) => prev.id !== id));
    };

    const gotoFilm = (id, name, status, comment) => {
        navigation.navigate("Film", {
            id,
            name,
            status,
            comment,
            changeStatus,
            changeComment,
        });
    };

    const gotoAddFilm = () => {
        navigation.navigate("AddFilm", { addFilm });
    };

    const changeStatus = (id, status) => {
        db.transaction((tx) => {
            tx.executeSql(`update films set status = ? where id = ?;`, [
                status,
                id,
            ]);
        });
    };

    const changeComment = (id, comment) => {
        db.transaction((tx) => {
            tx.executeSql(`update films set comment = ? where id = ?;`, [
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
            <AddBtn visible={visibleAddBtn} goto={gotoAddFilm} />
            <MySearchBar text={search} onText={(text) => setSearch(text)} />
            <ScrollView style={styles.conteiner}>
                {films === null || films.length === 0 ? (
                    <></>
                ) : (
                    films.map((el) => (
                        <View key={el.id}>
                            {isNameSearch(el.name, search) || !search ? (
                                <ListItem key={el.id} bottomDivider>
                                    <ListItem.Content>
                                        <TouchableOpacity
                                            onPress={() =>
                                                gotoFilm(
                                                    el.id,
                                                    el.name,
                                                    el.status,
                                                    el.comment
                                                )
                                            }
                                            onLongPress={() =>
                                                deleteFilm(el.id)
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
