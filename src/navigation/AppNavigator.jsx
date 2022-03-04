import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from './DrawerNavigator'
import Employees from './../screens/Employees'
import Details from './../screens/Employees/Details'

const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={DrawerNavigator}
                options={{
                    title: 'Employees',
                    headerShown: false
                }}/>
            <Stack.Screen 
                name="Details" 
                component={Details} 
                options={{
                    title: 'Employee Details',
                }}/>
        </Stack.Navigator>
    )
}

export default AppNavigator