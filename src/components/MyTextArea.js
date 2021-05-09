import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export const MyTextArea = ({ comment }) => {
    return (
        <View style={styles.textAreaContainer} >
            <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Your comment"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
                value={comment}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textAreaContainer: {
      borderColor: 'gray',
      borderWidth: 1,
      padding: 5
    },
    textArea: {
      width: 300,  
      height: 150,
      justifyContent: "flex-start"
    }
  })