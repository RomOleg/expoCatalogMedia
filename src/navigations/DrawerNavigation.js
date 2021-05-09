import { createDrawerNavigator } from "react-navigation-drawer";
import { BooksScreen } from "../screens/BooksScreen";
import { SerialsScreen } from "../screens/SerialsScreen";

const DrawerNavigation = createDrawerNavigator(
    {
        Books: {
            screen: SerialsScreen,
            navigationOptions: {
                title: 'Books',
            },
        },
        Eat: {
            screen: BooksScreen,
        },
        Drink: {
            screen: BooksScreen,
        },
    }
)

export default DrawerNavigation