import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './MyStack';

export default function Routes() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}

