import { createStackNavigator } from "react-navigation-stack";
import { SerialScreen } from "../screens/SerialScreen";
import { SerialsScreen } from "../screens/SerialsScreen";

const SerialNavigation = createStackNavigator({
    Serials: {
        screen: SerialsScreen,
        navigationOptions: {
            title: 'Сериалы',
            headerTitleAlign: 'center'
        }
    },
    Serial: {
        screen: SerialScreen,
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam( 'name' )
        })
    }
})

export default SerialNavigation