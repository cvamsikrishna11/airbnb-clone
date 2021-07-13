import React from 'react';
import { Text, View, ImageBackground, Pressable } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import styles from './styles';

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.searchButton}
                onPress={() => console.warn('Search button clicked!')}
            >
                <EvilIcons name="search" size={25} color="#f15454" />
                <Text style={styles.searchButtonText}>Where are you going?</Text>
            </Pressable>

            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>

                <Text style={styles.title}>Go Near</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => console.warn('Explore button clicked!')}
                >
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>

        </View>
    )
}

export default HomeScreen;