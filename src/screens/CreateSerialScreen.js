import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { Button, Input } from "react-native-elements";

export const CreateSerialScreen = ({ navigation }) => {
    const [name, setName] = useState();
    const [s, setS] = useState("1");
    const [e, setE] = useState("0");

    const addSerial = () => {
        if (name) {
            const navigationAddSerial = navigation.getParam("addSerial");
            navigationAddSerial(name.trim(), +s, +e);
            navigation.goBack();
        } else alert("Укажите название сериала");
    };

    return (
        <ScrollView>
            <View style={styles.conteiner}>
                <Text style={styles.text}>Название сериала</Text>
                <Input
                    autoFocus={true}
                    placeholder="Введите название сериала"
                    multiline={true}
                    maxLength={40}
                    onChangeText={setName}
                    inputStyle={styles.input}
                    // onSubmitEditing={() => this.second.focus()}
                    blurOnSubmit={false}
                />
                <Text style={styles.text}>Сезон</Text>
                <Input    
                    placeholder="Укажите номер сезона" 
                    keyboardType="numeric"
                    defaultValue={"1"}
                    // for ios
                    clearTextOnFocus={true}
                    onFocus= {() => setS('')}
                    value={s}
                    onChangeText={setS}
                    inputStyle={styles.input}
                    // ref={(input) => { this.second = input; }}
                    // onSubmitEditing={() => this.secondTextInput1.focus()}
                    blurOnSubmit={false}
                />
                <Text style={styles.text}>Серия</Text>
                <Input
                    placeholder="Укажите номер серии"
                    keyboardType={"number-pad"}
                    defaultValue={"0"}
                    // for ios
                    clearTextOnFocus={true}
                    onFocus= {() => setE('')}
                    value={e}
                    onChangeText={setE}
                    inputStyle={styles.input}
                    // ref={(input) => { this.secondTextInput1 = input; }}
                />
                <Button
                    type="outline"
                    buttonStyle={{
                        height: 60,
                        width: 140,
                    }}
                    onPress={addSerial}
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
    input: {
        textAlign: "center",
    },
});
