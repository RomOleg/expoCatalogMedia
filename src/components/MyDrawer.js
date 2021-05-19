import React, { useRef, useState } from "react";
import {
    Text,
    Modal,
    Share,
    StyleSheet,
    DrawerLayoutAndroid,
    Dimensions,
    TextInput,
    View,
    ScrollView,
    TouchableOpacity,
    Pressable,
} from "react-native";
import { OpenDatabase } from "../database/connectionDB";
import AppNavigation from "../navigations/AppNavigation";

let deviceHeight = Dimensions.get("window").height;

export const MyDrawer = () => {
    
    const navigationView = () => {

        function exportDB() {
            const db = OpenDatabase("db.db");

            new Promise((resolve, reject) => {
                db.transaction((tx) => {
                    tx.executeSql(
                        `select * from serials;`,
                        [],
                        (_, { rows: { _array } }) => resolve([{'serials': _array}])
                    );
                });
            })
                .then((mas) => {
                    return new Promise((resolve, reject) => {
                        db.transaction((tx) => {
                            tx.executeSql(
                                `select * from films;`,
                                [],
                                (_, { rows: { _array } }) =>
                                    resolve(mas.concat([{'films': _array}]))
                            );
                        });
                    });
                })
                .then((mas) => {
                    return new Promise((resolve, reject) => {
                        db.transaction((tx) => {
                            tx.executeSql(
                                `select * from books;`,
                                [],
                                (_, { rows: { _array } }) =>
                                    resolve(mas.concat([{'books': _array}]))
                            );
                        });
                    });
                })
                .then((mas) => {
                    return new Promise((resolve, reject) => {
                        db.transaction((tx) => {
                            tx.executeSql(
                                `select * from notepad;`,
                                [],
                                (_, { rows: { _array } }) =>
                                    resolve(mas.concat([{'notepad': _array}]))
                            );
                        });
                    });
                })
                .then((mas) => {
                    // console.log(JSON.stringify(mas));
                    onShare(JSON.stringify(mas));
                });
        }

        const onShare = async (message) => {
            try {
                const result = await Share.share({
                    message: message,
                });
                if (result.action === Share.sharedAction) {
                    if (result.activityType) {
                        // shared with activity type of result.activityType
                    } else {
                        // shared
                    }
                } else if (result.action === Share.dismissedAction) {
                    // dismissed
                }
            } catch (error) {
                alert(error.message);
            }
        };

        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 0.206,
                        borderBottomWidth: 1,
                        borderBottomColor: "#ccc",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ fontSize: 22 }}>Меню</Text>
                </View>
                <ScrollView style={{ backgroundColor: "rgb(242,242,242)" }}>
                    <Text
                        style={{
                            textAlign: "left",
                            paddingVertical: 10,
                            paddingLeft: 10,
                        }}
                    >
                        ДАННЫЕ
                    </Text>
                    <TouchableOpacity onPress={exportDB}>
                        <Text style={styles.textContentDrawer}>Экспорт</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            drawer.current.closeDrawer();
                            setModalVisible(true);
                        }}
                    >
                        <Text style={styles.textContentDrawer}>Импорт</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    };

    const [modalVisible, setModalVisible] = useState(false);
    const drawer = useRef(null);
    const [importdb, setImportdb] = useState("");

    const improtDB = () => {
        const db = OpenDatabase('db.db')
        const importObject = JSON.parse(importdb)

        importObject.filter(el => el['serials']).map(el => el['serials']).forEach(el => {
            for (let i = 0; i < el.length; i++) {
                db.transaction((tx) => {
                    tx.executeSql(
                        "INSERT INTO serials (id, name, sezon, epizod, comment) VALUES (?, ?, ?, ?, ?);",
                        [el[i].id, el[i].name, el[i].sezon, el[i].epizod, el[i].comment]
                    );
                });
            }
        })
        importObject.filter(el => el['films']).map(el => el['films']).forEach(el => {
            for (let i = 0; i < el.length; i++) {
                db.transaction((tx) => {
                    tx.executeSql(
                        "INSERT INTO films (id, name, status, comment) VALUES (?, ?, ?, ?);",
                        [el[i].id, el[i].name, el[i].status, el[i].comment]
                    );
                });
            }
        })
        importObject.filter(el => el['books']).map(el => el['books']).forEach(el => {
            for (let i = 0; i < el.length; i++) {
                db.transaction((tx) => {
                    tx.executeSql(
                        "INSERT INTO books (id, name, stopping, comment, status) VALUES (?, ?, ?, ?, ?);",
                        [el[i].id, el[i].name, el[i].stopping, el[i].comment, el[i].status]
                    );
                });
            }
        })
        importObject.filter(el => el['notepad']).map(el => el['notepad']).forEach(el => {
            for (let i = 0; i < el.length; i++) {
                db.transaction((tx) => {
                    tx.executeSql(
                        "INSERT INTO notepad (id, name, comment, date) VALUES (?, ?, ?, ?);",
                        [el[i].id, el[i].name, el[i].comment, el[i].date]
                    );
                });
            }
        })
    }

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={"left"}
            renderNavigationView={navigationView}
        >
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Импорт данных</Text>
                        <TextInput
                            autoFocus={true}
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder={
                                'Вставте экспортированный текст в формате: [{"id":1,"name":"name"}]'
                            }
                            numberOfLines={10}
                            multiline={true}
                            onChangeText={(text) => setImportdb(text)}
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                improtDB()
                            }}
                        >
                            <Text style={styles.textStyle}>Импорт</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <AppNavigation />
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    textContentDrawer: {
        paddingLeft: 20,
        paddingVertical: 15,
        fontSize: 18,
        backgroundColor: "#fff",
        marginTop: 1,
    },
    modalView: {
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
    },
    modalText: {
        marginBottom: 10,
        textAlign: "center",
        fontSize: 22,
    },
    textArea: {
        height: deviceHeight * 0.6689,
        justifyContent: "flex-start",
        textAlignVertical: "top",
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 12,
        padding: 10,
        marginVertical: 10,
    },
});
