import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GoogleMap from '../screen/GoogleMap';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="GoogleMap" component={GoogleMap} />
        </Stack.Navigator>
    )
}

