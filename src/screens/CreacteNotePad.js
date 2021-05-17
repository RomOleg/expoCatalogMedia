import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { Button, Input } from "react-native-elements";

export const CreateNotePadScreen = ({ navigation }) => {
    const [name, setName] = useState();

    const addNotePad = () => {
        if (name) {
            const navigationAddFilm = navigation.getParam("addNotePad");
            navigationAddFilm(name.trim());
            navigation.goBack();
        } else alert("Укажите название заметки");
    };

    return (
        <ScrollView>
            <View style={styles.conteiner}>
                <Text style={styles.text}>Название заметки</Text>
                <TextInput
                    autoFocus={true}
                    placeholder="Введите название заметки"
                    onChangeText={setName}
                    placeholderTextColor="grey"
                    numberOfLines={2}
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "#bbb",
                        marginVertical: 20,
                        paddingBottom: 5,
                        width: 165
                    }}
                    multiline={true}
                    maxLength={40}
                    textAlign={"center"}
                />
                <Button
                    type="outline"
                    onPress={addNotePad}
                    buttonStyle={{
                        height: 60,
                        width: 140,
                    }}
                    title="Добавить"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 50,
        paddingVertical: 50,
    },
    text: {
        fontSize: 20,
    },
});
