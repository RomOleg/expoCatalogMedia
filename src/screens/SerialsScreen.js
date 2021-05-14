import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Alert,
    TouchableOpacity,
    ScrollView,
    Button,
} from "react-native";
import { ListItem, Avatar, Input, Icon } from "react-native-elements";
import { AddBtn } from "../components/AddBtn";
import * as SQLite from "expo-sqlite";

function openDatabase() {
    if (Platform.OS === "web") {
        return {
            transaction: () => {
                return {
                    executeSql: () => {},
                };
            },
        };
    }
    const db = SQLite.openDatabase("db.db");
    return db;
}

const db = openDatabase();

export const SerialsScreen = ({ navigation }) => {

    const [items, setItems] = React.useState(null);
    
    React.useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "create table if not exists serials (id integer primary key not null, name string, sezon int, epizod int);"
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

    const gotoSerial = (id, name, s, e) => {
        navigation.navigate("Serial", {
            name,
            s,
            e,
            incS,
            id,
            incE,
            decS,
            decE,
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
              console.log(prev);
                if (prev.id == id) {
                  console.log(prev.id == id);
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
                "INSERT INTO serials (id, name, sezon, epizod) VALUES (?, ?, ?, ?);",
                [Date.now().toString(), name, sezon, epizod]
            );
        });
    };

    const gotoAddSerial = () => {
        navigation.navigate("AddSerial", { addSerial });
    };

    return (
        <View style={styles.conteiner}>
            <AddBtn goto={gotoAddSerial} />

            <ScrollView style={styles.conteiner}>
                {items === null || items.length === 0 ? (
                    <></>
                ) : (
                    items.map((el, i) => (
                        <ListItem key={i} bottomDivider>
                            <ListItem.Content>
                                <TouchableOpacity
                                    onPress={() =>
                                        gotoSerial(
                                            el.id,
                                            el.name,
                                            el.sezon,
                                            el.epizod
                                        )
                                    }
                                    onLongPress={() => deleteSerial(el.id)}
                                >
                                    <ListItem.Title>{el.name}</ListItem.Title>
                                    <ListItem.Subtitle>
                                        сезон: {el.sezon} серия: {el.epizod}
                                    </ListItem.Subtitle>
                                </TouchableOpacity>
                            </ListItem.Content>
                        </ListItem>
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
