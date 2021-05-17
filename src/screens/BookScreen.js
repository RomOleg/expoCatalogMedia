import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, Input } from "react-native-elements";
import { MyTextArea } from "../components/MyTextArea";

export const BookScreen = ({ navigation }) => {
    const [page, setPage] = useState();

    const changeStatus = () => {
        const change = navigation.getParam("changeStatus");
        change(navigation.getParam("id"), state ? status[0] : status[1]);
        navigation.goBack();
    };

    const changePage = () => {
        if (page) {
            const change = navigation.getParam("changeStopping");
            change(navigation.getParam("id"), page);
            navigation.goBack();
        } else alert("Укажите номер страницы");
    };

    const changeComment = () => {
        const change = navigation.getParam("changeComment");
        change(navigation.getParam("id"), comment);
        setComment(navigation.getParam("comment"));
    };

    const status = ["Читаю", "Прочитано"];
    const [state, setState] = useState(false);
    const [comment, setComment] = useState("");

    React.useEffect(() => {
        setState(() =>
            navigation.getParam("status") === status[0] ? false : true
        );
        setComment(navigation.getParam("comment"));
    }, [state]);

    return (
        <View style={styles.conteiner}>
            <ScrollView>
                <Text style={styles.text}>
                    Статус: <Text>{navigation.getParam("status")}</Text>
                </Text>
                <Text style={styles.text}>
                    Вы остановились на:{" "}
                    <Text>{navigation.getParam("page")} странице</Text>
                </Text>
                <MyTextArea
                    text={(comment) => setComment(comment)}
                    comment={navigation.getParam("comment")}
                />
                {navigation.getParam("comment") !== comment ? (
                    <View
                        style={{
                            flex: 1,
                            alignItems: "flex-end",
                            marginTop: 5,
                        }}
                    >
                        <Button
                            onPress={changeComment}
                            type="outline"
                            buttonStyle={{
                                width: 150,
                                height: 50,
                            }}
                            titleStyle={{ fontSize: 12 }}
                            title={"Сохранить комментарии"}
                        />
                    </View>
                ) : (
                    <></>
                )}
                <Input
                    inputStyle={{
                        textAlign: "center",
                    }}
                    placeholder={"Укажите новую страницу"}
                    keyboardType={"number-pad"}
                    onChangeText={setPage}
                />
                <Button
                    onPress={changePage}
                    type="outline"
                    buttonStyle={{
                        // width: 150,
                        height: 60,
                    }}
                    title="Изменить страницу"
                />
                <Button
                    onPress={changeStatus}
                    type="outline"
                    buttonStyle={{
                        height: 60,
                        marginTop: 10,
                    }}
                    titleStyle={{ fontSize: 20 }}
                    title={
                        navigation.getParam("status") === status[0]
                            ? status[1]
                            : status[0]
                    }
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        margin: 20,
    },
    text: {
        padding: 10,
        fontSize: 18,
    },
});
