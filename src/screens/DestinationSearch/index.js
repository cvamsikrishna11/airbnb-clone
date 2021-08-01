import React from 'react';
import { View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = (props) => {


    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <GooglePlacesAutocomplete
                placeholder='Where are you going?'

                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    // console.log(data, details);
                    navigation.navigate('Guests', { viewport: details.geometry.viewport });

                }}
                fetchDetails
                styles={{
                    textInput: styles.textInput,
                }}

                query={{
                    key: 'GOOGLE_PLACES_API_KEY',
                    language: 'en',
                    types: '(cities)'
                }}
                requestUrl={{
                    useOnPlatform: 'web', // or "all"
                    url:
                        'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
                }}
                suppressDefaultStyles
                renderRow={(item) => <SuggestionRow item={item} />}
            />

        </View>
    )
}

export default DestinationSearchScreen;



