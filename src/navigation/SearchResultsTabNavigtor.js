import React, { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';


import { listPosts } from '../graphql/queries';
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {

    const route = useRoute();
    const { guests, viewport } = route.params;    

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResults = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: {
                            and: {
                                maxGuests: {
                                    ge: guests
                                },
                                latitude: {
                                    between: [viewport.southwest.lat, viewport.northeast.lat],
                                },
                                longitude: {
                                    between: [viewport.southwest.lng, viewport.northeast.lng],
                                }

                            }

                        }
                    })
                )
                setPosts(postsResults.data.listPosts.items);                
            } catch (e) {
                console.error('Exception: ', e);
            }
        }

        fetchPosts();
    }, [])

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454',
            }
        }}>
            <Tab.Screen name={"list"}>
                {() => (
                    <SearchResultsScreen posts={posts} />
                )}
            </Tab.Screen>
            <Tab.Screen name={"map"}>
                {() => (
                    <SearchResultsMap posts={posts} />
                )}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default SearchResultsTabNavigator;