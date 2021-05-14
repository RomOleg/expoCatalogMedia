import React from 'react';
import { Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation-stack";
import { CreateSerialScreen } from '../screens/CreateSerialScreen';
import { SerialScreen } from "../screens/SerialScreen";
import { SerialsScreen } from "../screens/SerialsScreen";

const SerialNavigation = createStackNavigator({
    Serials: {
        screen: SerialsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Сериалы',
            headerTitleAlign: 'center',
            headerLeft: () => <Icon name="menu" size={35} iconStyle={ {padding: 20,} } onPress={() => alert('hi')}/>,
        }),
        
    },
    Serial: {
        screen: SerialScreen,
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam( 'name' )
        })
    },
    AddSerial: {
        screen: CreateSerialScreen,
        navigationOptions: {
            title: 'Добавить сериал'
        }
    }
})

export default SerialNavigation