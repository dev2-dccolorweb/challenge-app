import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'

export default function App() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <AppNavigator/>
            </NavigationContainer>
        </SafeAreaView>
    )
}

