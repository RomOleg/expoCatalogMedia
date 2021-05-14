import React from 'react';
import { Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation-stack";
import { CreateFilmScreen } from '../screens/CreateFilmScreen';
import { FilmScreen } from '../screens/FilmScreen';
import { FilmsScreen } from '../screens/FilmsScreen';

export const FilmNavigation = createStackNavigator({
    Films: {
        screen: FilmsScreen,
        navigationOptions: () => ({
            title: 'Сериалы',
            headerTitleAlign: 'center',
            headerLeft: <Icon name="menu" size={35} iconStyle={ {padding: 20,} } />
        }),
        
    },
    Film: {
        screen: FilmScreen,
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam( 'name' )
        })
    },
    AddFilm: {
        screen: CreateFilmScreen,
        navigationOptions: {
            title: 'Добавить фильм'
        }
    }
})