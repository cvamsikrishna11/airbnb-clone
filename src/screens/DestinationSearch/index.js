import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';


import searchResults from '../../../assets/data/search';
import styles from './styles';

const DestinationSearchScreen = (props) => {
    const [inputText, setInputText] = useState('');
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
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name="location-pin" size={30} color="black" />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default DestinationSearchScreen;