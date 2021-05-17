import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Switch } from "react-native";
import { Button } from "react-native-elements";
import { MyTextArea } from "../components/MyTextArea";

export const FilmScreen = ({ navigation }) => {
    const changeStatus = () => {
        const change = navigation.getParam("changeStatus");
        change(navigation.getParam("id"), state ? status[0] : status[1]);
        navigation.goBack();
    };

    const changeComment = () => {
        const change = navigation.getParam("changeComment");
        change(navigation.getParam("id"), comment);
        setComment(navigation.getParam("comment"))
    }

    const status = ["В планах", "Просмотренно"];
    const [state, setState] = useState(false);
    const [comment, setComment] = useState("");
    

    React.useEffect(() => {
        setState(() =>
            navigation.getParam("status") === status[0] ? false : true
        );
        setComment(navigation.getParam("comment"))
    }, [state]);

    return (
        <View style={styles.conteiner}>
            <ScrollView>
                <Text style={styles.text}>
                    Статус: <Text>{navigation.getParam("status")}</Text>
                </Text>
                <MyTextArea
                    text={(comment) => setComment(comment)}
                    comment={navigation.getParam("comment")}
                />
                {navigation.getParam("comment") !== comment ? (
                    <View style={{flex: 1, alignItems: 'flex-end', marginTop: 5}}>
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
                <Button
                    onPress={changeStatus}
                    type="outline"
                    buttonStyle={{
                        height: 60,
                        marginTop: "12%",
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
        padding: 20,
        fontSize: 18,
    },
});
