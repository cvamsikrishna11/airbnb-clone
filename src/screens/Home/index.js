import React from 'react';
import { Text, View, ImageBackground, Pressable } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const HomeScreen = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.searchButton}
                onPress={() => navigation.navigate('Destination Search')}
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