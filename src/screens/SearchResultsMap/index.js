import React, { useState, useEffect, useRef } from 'react';
import { FlatList, View, useWindowDimensions } from 'react-native';
import MapView from 'react-native-maps';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import CustomMarker from '../../components/CustomMarker';
import PostCarousleItem from '../../components/PostCarouselItem';

const SearchResultsMap = (props) => {

    const { posts } = props;    

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);


    const flatList = useRef();

    const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });

    const map = useRef();

    const onViewChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id);
        }

    })

    const width = useWindowDimensions().width;


    useEffect(() => {
        if (!selectedPlaceId || !flatList) {
            return;
        }
        const index = posts.findIndex(place => place.id === selectedPlaceId);
        flatList.current.scrollToIndex({ index })

        const selectedPlace = posts[index];
        const region = {
            latitude: selectedPlace.latitude,
            longitude: selectedPlace.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }
        map.current.animateToRegion(region);
    }, [selectedPlaceId])


    return (
        <View style={{ width: '100%', height: '100%' }}>
            <MapView style={{ width: '100%', height: '100%' }}
                ref={map}
                provider='google'
                initialRegion={{
                    latitude: 28.3915637,
                    longitude: -16.6291304,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
            >
                {posts.map(place =>
                (<CustomMarker
                    isSelected={place.id === selectedPlaceId}
                    key={uuidv4()}
                    coordinate={{ latitude: place.latitude, longitude: place.longitude }}
                    price={place.newPrice}
                    onPress={() => setSelectedPlaceId(place.id)}
                />)
                )}
            </MapView>
            <View style={{ position: 'absolute', bottom: 10 }}>
                <FlatList
                    ref={flatList}
                    data={posts}
                    renderItem={({ item }) => <PostCarousleItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                />

            </View>
        </View>
    );
}

export default SearchResultsMap;