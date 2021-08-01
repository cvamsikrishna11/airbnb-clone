import React from 'react';
import { FlatList } from 'react-native';

import PostComponent from '../../components/Post';

const SearchResultsScreen = (props) => {

    const { posts } = props;
    

    return (
        <>
            <FlatList
                data={posts}
                renderItem={({ item }) => <PostComponent post={item} />}
            ></FlatList>
        </>
    )
}

export default SearchResultsScreen;