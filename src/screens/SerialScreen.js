import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MyTextArea } from "../components/MyTextArea";
import { Button } from "react-native-elements";

export const SerialScreen = ({ navigation }) => {
    const incS = () => {
        const inc = navigation.getParam("incS");
        inc(navigation.getParam("id"));
        let x = navigation.getParam("s") + 1;
        navigation.setParams({ s: x });
        // navigation.goBack()
    };
    const incE = () => {
        const inc = navigation.getParam("incE");
        inc(navigation.getParam("id"));
        let x = navigation.getParam("e") + 1;
        navigation.setParams({ e: x });
    };

    const decS = () => {
        const dec = navigation.getParam("decS");
        dec(navigation.getParam("id"));
        let x = navigation.getParam("s") - 1;
        navigation.setParams({ s: x });
        // navigation.goBack()
    };
    const decE = () => {
        const dec = navigation.getParam("decE");
        dec(navigation.getParam("id"));
        let x = navigation.getParam("e") - 1;
        navigation.setParams({ e: x });
    };

    const [comment, setComment] = useState("");

    React.useEffect(() => {
        setComment(navigation.getParam("comment"))
    }, []);

    const changeComment = () => {
        const change = navigation.getParam("changeComment");
        change(navigation.getParam("id"), comment);
        setComment(navigation.getParam("comment"))
    }

    return (
        <View style={styles.conteiner}>
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: 'space-around'}}>
                    <Text style={styles.text}>
                        Сезон: <Text>{navigation.getParam("s")}</Text>
                    </Text>
                    <Text style={styles.text}>
                        Серия: <Text>{navigation.getParam("e")}</Text>
                    </Text>
                </View>
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
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }}
                >
                    <Text style={styles.text}>Сезон</Text>
                    <Text style={styles.text}>Серия</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                >
                    <Button
                        onPress={incS}
                        onLongPress={decS}
                        type="outline"
                        buttonStyle={{ fontSize: 40, width: 100, height: 60 }}
                        titleStyle={{ fontSize: 30 }}
                        title="+/-"
                    />
                    <Button
                        onPress={incE}
                        onLongPress={decE}
                        type="outline"
                        buttonStyle={{ fontSize: 40, width: 100, height: 60 }}
                        titleStyle={{ fontSize: 30 }}
                        title="+/-"
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'space-around',
        margin: 20,
    },
    text: {
        padding: 20,
        fontSize: 18,
    },
});
