import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SearchResultsScreen from '../screens/SearchResults';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454',
            }
        }}>
            <Tab.Screen name={"list"}>
                {() => (
                    <SearchResultsScreen />
                )}
            </Tab.Screen>
            <Tab.Screen name={"map"}>
                {() => (
                    <SearchResultsScreen />
                )}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default SearchResultsTabNavigator;