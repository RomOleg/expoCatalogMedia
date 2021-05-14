import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export const MyTextArea = ({ comment, text }) => {
    return (
        <View style={styles.textAreaContainer} >
            <TextInput
                onChangeText={text}
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Твой комментарий"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
                defaultValue={comment}
                // autoCapitalize={true}
                textAlign={'center'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textAreaContainer: {
      borderColor: 'gray',
      borderWidth: 1,
      // padding: 15,
      // margin: 10,
      alignItems: 'center',
    },
    textArea: {
      flex: 1,
      width: "80%",  
      height: 100,
    }
  })