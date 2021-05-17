import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Keyboard } from "react-native";
import { ListItem } from "react-native-elements";
import { AddBtn } from "../components/AddBtn";
import { isNameSearch, MySearchBar } from "../components/MySearchBar";
import { OpenDatabase } from "../database/connectionDB";

const db = OpenDatabase("db.db");

export const SerialsScreen = ({ navigation }) => {
    const [items, setItems] = React.useState(null);

    React.useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "create table if not exists serials (id STRING (20) PRIMARY KEY UNIQUE NOT NULL, name STRING (40), sezon INTEGER, epizod INTEGER, comment STRING);"
            );
        });
    }, []);

    React.useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                `select * from serials;`,
                [],
                (_, { rows: { _array } }) => setItems(_array)
            );
        });
    }, [items]);

    const deleteSerial = (id) => {
        db.transaction((tx) => {
            tx.executeSql(`delete from serials where id = ?;`, [id]);
        });
        // setItems(prev => prev.filter(prev => prev.id !== id))
    };

    const gotoSerial = (id, name, s, e, comment) => {
        navigation.navigate("Serial", {
            name,
            s,
            e,
            incS,
            id,
            incE,
            decS,
            decE,
            changeComment,
            comment,
        });
    };

    const changeComment = (id, comment) => {
        db.transaction((tx) => {
            tx.executeSql(`update serials set comment = ? where id = ?;`, [
                comment,
                id,
            ]);
        });
    };

    const incS = (id) => {
        setItems((prev) =>
            prev.filter((prev) => {
                if (prev.id == id) {
                    updateSezon(id, ++prev.sezon);
                }
            })
        );
    };

    const decS = (id) => {
        setItems((prev) =>
            prev.filter((prev) => {
                if (prev.id == id) {
                    updateSezon(id, --prev.sezon);
                }
            })
        );
    };

    const incE = (id) => {
        setItems((prev) =>
            prev.filter((prev) => {
                if (prev.id == id) {
                    updateEpizod(id, ++prev.epizod);
                }
            })
        );
    };

    const decE = (id) => {
        setItems((prev) =>
            prev.filter((prev) => {
                if (prev.id == id) {
                    updateEpizod(id, --prev.epizod);
                }
                return prev;
            })
        );
    };

    function updateSezon(id, value) {
        db.transaction((tx) => {
            tx.executeSql(`update serials set sezon = ? where id = ?;`, [
                value,
                id,
            ]);
        });
    }

    function updateEpizod(id, value) {
        db.transaction((tx) => {
            tx.executeSql(`update serials set epizod = ? where id = ?;`, [
                value,
                id,
            ]);
        });
    }

    const addSerial = (name, sezon, epizod) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO serials (id, name, sezon, epizod, comment) VALUES (?, ?, ?, ?, ?);",
                [Date.now().toString(), name, sezon, epizod, ""]
            );
        });
    };

    const gotoAddSerial = () => {
        navigation.navigate("AddSerial", { addSerial });
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
            <AddBtn visible={visibleAddBtn} goto={gotoAddSerial} />
            <MySearchBar text={search} onText={(text) => setSearch(text)} />
            <ScrollView style={styles.conteiner}>
                {items === null || items.length === 0 ? (
                    <></>
                ) : (
                    items.map((el) => (
                        <View key={el.id}>
                            {isNameSearch(el.name, search) || !search ? (
                                <ListItem key={el.id} bottomDivider>
                                    <ListItem.Content>
                                        <TouchableOpacity
                                            onPress={() =>
                                                gotoSerial(
                                                    el.id,
                                                    el.name,
                                                    el.sezon,
                                                    el.epizod,
                                                    el.comment
                                                )
                                            }
                                            onLongPress={() =>
                                                deleteSerial(el.id)
                                            }
                                        >
                                            <ListItem.Title>
                                                {el.name}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                сезон: {el.sezon} серия: {el.epizod}
                                            </ListItem.Subtitle>
                                        </TouchableOpacity>
                                    </ListItem.Content>
                                </ListItem>
                            ) : <></>}
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
