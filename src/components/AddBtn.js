import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon, Image } from 'react-native-elements';

export const AddBtn = ( { goto } ) => {
    return(
        <View style={styles.add}>
            {/* <Icon name='add' size={55} color='#fff'
                onPress={goto}
                iconStyle={{
                    backgroundColor: 'red',
                    borderRadius: '50%',
                }}/> */}
            <Image  source={require('../media/Floating_Button.png')} style={{ width: 70, height: 70 }} onPress={goto}/>
        </View>
    )
}

const styles = StyleSheet.create({
    add: {
        flex: 1,
        position: 'absolute',
        zIndex: 1,
        right: 35,
        bottom: 30
    }
})