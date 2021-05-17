import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    TextInput,
    View,
    Text,
    Dimensions,
} from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export const NotePadScreen = ({ navigation }) => {
    const changeComment = () => {
        const change = navigation.getParam("changeComment");
        change(navigation.getParam("id"), comment);
    };

    const [comment, setComment] = useState("");

    React.useEffect(() => {
        changeComment();
    }, [comment]);

    return (
        <View
            style={styles.conteiner}
            onLayout={(event) => {
                var { x_pos, y_pos, width, height } = event.nativeEvent.layout;
            }}
        >
            <ScrollView>
                <Text style={{ marginBottom: 10, color: "#888" }}>
                    {navigation.getParam("date")}
                </Text>
                <TextInput
                    autoFocus={true}
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    numberOfLines={10}
                    multiline={true}
                    defaultValue={navigation.getParam("comment")}
                    onChangeText={(text) => setComment(text)}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        margin: 10,
    },
    textArea: {
        height: deviceHeight * 0.6689,
        justifyContent: "flex-start",
        textAlignVertical: "top",
    },
});
