import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// import  DrawerNavigation  from './DrawerNavigation'
import SerialNavigation from './SerialNavigation';
import { FilmNavigation } from './FilmNavigation';   
import { BookNavigation } from './BookNavigation';
import { NotePadNavigation } from './NotePadNavigation';

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
        NotePads: {
            screen: NotePadNavigation,
            navigationOptions: {
                title: 'Блокнот'
            }
        }
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
            labelStyle: {
                fontSize: 18,
                
            }, 
            style: {
                alignItems: 'center',
            },
            keyboardHidesTabBar: true,      
        }
    }
);

export default createAppContainer(AppNavigation)