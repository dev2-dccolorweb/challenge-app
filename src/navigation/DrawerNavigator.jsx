import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Employees from './../screens/Employees'
import Details from './../screens/Employees/Details'
import Profile from './../screens/Profile'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Employees">
            <Drawer.Screen 
                name="Employees" 
                component={Employees}
                options={{
                    title: 'Employees',
                }}/>
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator