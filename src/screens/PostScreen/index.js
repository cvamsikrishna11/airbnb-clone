import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import PostDetails from '../../components/PostDetails';
import places from '../../../assets/data/feed';

const PostScreen = (props) => {

    const route = useRoute();
    
    const post = places.find(place => place.id === route.params.postId);


    return (
        <View style={{ backgroundColor: 'white' }}>
            <PostDetails post={post} />
        </View>
    );
}

export default PostScreen;