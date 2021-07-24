import React from 'react';
import { View, FlatList } from 'react-native';

import PostComponent from '../../components/Post';
import feed from '../../../assets/data/feed';

const SearchResultsScreen = (props) => {
    return (
        <>
            <FlatList
                data={feed}
                renderItem={({ item }) => <PostComponent post={item} />}
            ></FlatList>
        </>
    )
}

export default SearchResultsScreen;