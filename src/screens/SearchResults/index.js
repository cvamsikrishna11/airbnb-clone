import React from 'react';
import { View, FlatList } from 'react-native';

import PostComponent from '../../components/Post';
import feed from '../../../assets/data/feed';

const SearchResultsScreen = (props) => {
    return (
        <View>
            <FlatList
                data={feed}
                renderItem={({ item }) => <PostComponent post={item} />}
            ></FlatList>
        </View>
    )
}

export default SearchResultsScreen;