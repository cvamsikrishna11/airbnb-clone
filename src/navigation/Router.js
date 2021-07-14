import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import DestinationSearchScreen from '../screens/DestinationSearch';

const Stack = createStackNavigator();


const Router = () => {
    const ref = React.useRef(null);
    return (
        <View>
            <NavigationContainer ref={ref}>
                <Stack.Navigator>
                    <Stack.Screen
                        name={"Destination Search"}
                        component={DestinationSearchScreen}
                        options={{
                            title: "Search your destination"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
export default Router;