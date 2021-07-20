import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import searchResults from '../../../assets/data/search';
import styles from './styles';

const DestinationSearchScreen = (props) => {
    const [inputText, setInputText] = useState('');

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* input component */}
            <TextInput
                style={styles.textInput}
                placeholder='Where are you going?'
                value={inputText}
                onChangeText={setInputText}
            />


            {/* list of desitnations */}
            <FlatList
                data={searchResults}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('Guests')} style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name="location-pin" size={30} color="black" />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    )
}

export default DestinationSearchScreen;