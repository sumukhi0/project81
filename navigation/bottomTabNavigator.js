import * as React from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Feed from '../screens/feed';
import Post from '../screens/post';

const Bottom = createMaterialBottomTabNavigator();

export default function BottomNav() {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="feed" component={Feed} />
      <Bottom.Screen name="post" component={Post} />
    </Bottom.Navigator>
  );
}
