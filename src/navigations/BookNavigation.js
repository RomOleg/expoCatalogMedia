import React from 'react';
import { Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation-stack";
import { BookScreen } from '../screens/BookScreen';
import { BooksScreen } from '../screens/BooksScreen';
import { CreateBookScreen } from '../screens/CreateBookScreen';

export const BookNavigation = createStackNavigator({
    Books: {
        screen: BooksScreen,
        navigationOptions: () => ({
            title: 'Книги',
            headerTitleAlign: 'center',
            headerLeft: <Icon name="menu" size={35} iconStyle={ {padding: 20,} } />
        }),
        
    },
    Book: {
        screen: BookScreen,
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam( 'name' )
        })
    },
    AddBook: {
        screen: CreateBookScreen,
        navigationOptions: {
            title: 'Добавить книгу'
        }
    }
})