import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from 'react-native-elements';

export const AddBtn = ( { goto, visible = 1 } ) => {
    return(
        <View style={styles.add}>
            {visible ? <Image  source={require('../media/Floating_Button.png')} style={{ width: 70, height: 70 }} onPress={goto}/> : <></>}
        </View>
    )
}

const styles = StyleSheet.create({
    add: {
        flex: 1,
        position: 'absolute',
        zIndex: 1,
        right: 35,
        bottom: 10
    }
})