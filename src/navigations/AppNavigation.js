import { createAppConteiner } from 'react-navigation'
import { createButtomNavigator } from "react-navigation/bottom-tabs";

import { SerialsScreen } from '../screens/SerialsScreen';
import { BooksScreen } from '../screens/BooksScreen';
import { FilmsScreen } from '../screens/FilmsScreen';

const AppNavigation = createButtomNavigator({
    Strials: {
        screen: SerialsScreen,
        navigationOptions: {
            title: 'Serials'
        }
    },
    Books: {
        screen: BooksScreen,
        navigationOptions: {
            title: 'Books'
        }
    },
    Films: {
        screen: FilmsScreen,
        navigationOptions: {
            title: 'Films'
        }
    }
})

export default createAppConteiner(AppNavigation)