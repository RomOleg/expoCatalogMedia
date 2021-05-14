import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";

import  DrawerNavigation  from './DrawerNavigation'
import SerialNavigation from './SerialNavigation';
import { FilmNavigation } from './FilmNavigation';   
import { BookNavigation } from './BookNavigation';

// const _SerialsNavigator = createStackNavigator(
//     {
//         Serials: {
//             screen: SerialsScreen,
//             navigationOptions: {
//                 title: 'Serials',
//                 headerTitleAlign: 'center',
//             },
//         }
//     }
// )

// const _FilmsNavigator = createStackNavigator(
//     {
//         Films: {
//             screen: FilmsScreen,
//             navigationOptions: {
//                 title: 'Films',
//                 headerTitleAlign: 'center'
//             },
//         }
//     }
// )

// const _BooksNavigator = createStackNavigator(
//     {
//         Books: {
//             screen: BooksScreen,
//             navigationOptions: {
//                 title: 'Books',
//                 headerTitleAlign: 'center'
//             },
//         }
//     }
// )

const AppNavigation = createBottomTabNavigator(
    {
        Serials: {
            screen: SerialNavigation,
            navigationOptions: {
                title: 'Сериалы',
            },
        },
        Films: {
            screen: FilmNavigation,
            navigationOptions: {
                title: 'Фильмы',
            },
        },
        Books: {
            screen: BookNavigation,
            navigationOptions: {
                title: 'Книги',
            },
        },
        // Drawer: {
        //     screen: DrawerNavigation,
        //     navigationOptions: {
        //         title: 'Drawer'
        //     }
        // }
    },
    {
        tabBarOptions: {
            activeTintColor: '#e91e63',
            inactiveTintColor: '#000',
            tabBarVisible: true,
            // animationEnabled: true,
            // showLabel: false,
            labelStyle: {
                fontSize: 18,
                // color: '#fff'
                
            }, 
            style: {
                // backgroundColor: 'blue',
                // flex: 1,
                alignItems: 'center',
                // justifyContent: 'center'
            },
        }
    }
);

export default createAppContainer(AppNavigation)