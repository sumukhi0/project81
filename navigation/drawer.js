import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from "./bottomTabNavigator"
import Profile from '../screens/profile'

var Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name = "Home" component = {BottomTabNavigator}/>
      <Drawer.Screen name = "Profile" component = {Profile}/>
    </Drawer.Navigator>
    
  )
}

export default DrawerNavigator