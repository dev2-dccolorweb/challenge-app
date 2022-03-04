import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './src/navigation/DrawerNavigator'

export default function App() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar style="light"  backgroundColor="#00CDBE"/>
            <NavigationContainer>
                <DrawerNavigator/>
            </NavigationContainer>
        </SafeAreaView>
    )
}

