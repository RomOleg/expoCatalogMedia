import React from 'react';
import { Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation-stack";
import { CreateNotePadScreen } from '../screens/CreacteNotePad';
import { NotePadScreen } from '../screens/NotePadScreen';
import { NotePadsScreen } from '../screens/NotePadsScreen';

export const NotePadNavigation = createStackNavigator({
    NotePads: {
        screen: NotePadsScreen,
        navigationOptions: () => ({
            title: 'Блокнот',
            headerTitleAlign: 'center',
            // headerLeft: () => <Icon name="menu" size={35} iconStyle={ {padding: 20,} } />
        }),
        
    },
    NotePad: {
        screen: NotePadScreen,
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam( 'name' )
        })
    },
    AddNotePad: {
        screen: CreateNotePadScreen,
        navigationOptions: {
            title: 'Новая заметка'
        }
    }
})