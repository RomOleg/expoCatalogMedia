import { createDrawerNavigator } from "react-navigation-drawer";
import { BooksScreen } from "../screens/BooksScreen";

const DrawerNavigation = createDrawerNavigator(
    {
        Books: {
            screen: BooksScreen,
            navigationOptions: {
                title: 'Books',
            },
        },
        // Eat: {
        //     screen: BooksScreen,
        // },
        // Drink: {
        //     screen: BooksScreen,
        // },
    }
)

export default DrawerNavigation