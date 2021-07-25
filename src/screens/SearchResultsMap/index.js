import React, { useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCarousleItem from '../../components/PostCarouselItem';

const SearchResultsMap = (props) => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <MapView style={{ width: '100%', height: '100%' }}
                provider='google'
                initialRegion={{
                    latitude: 28.3915637,
                    longitude: -16.6291304,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {places.map(place =>
                (<CustomMarker
                    isSelected={place.id === selectedPlaceId}
                    key={place.id}
                    coordinate={place.coordinate}
                    price={place.newPrice}
                    onPress={() => setSelectedPlaceId(place.id)}
                />)
                )}
            </MapView>
            <View style={{ position: 'absolute', bottom: 30 }}>
                <PostCarousleItem post={places[0]} />
            </View>
        </View>
    );
}

export default SearchResultsMap;