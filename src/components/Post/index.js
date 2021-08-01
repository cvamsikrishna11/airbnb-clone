import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const days = 7;

const PostComponent = (props) => {
    
    const post = props.post;

    const navigation = useNavigation();

    const goToPostPage = () => {
        
        navigation.navigate('Post', { postId: post.id });
    }

    return (
        <Pressable onPress={goToPostPage} style={styles.container}>
            {/* Image */}
            <Image
                style={styles.image}
                source={{ uri: post.image }}
            />

            {/* Bed & Bedroom */}
            <Text style={styles.bedrooms}>{post.bed} bed, {post.bedroom} bedroom</Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>{post.type}: {post.title}</Text>

            {/* old pric & New Price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice} </Text>
                <Text style={styles.newPrice}> ${post.newPrice} </Text>
                / night
            </Text>

            {/* Total price */}
            <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
        </Pressable>
    )
}

export default PostComponent;