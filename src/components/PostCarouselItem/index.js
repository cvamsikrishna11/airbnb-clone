import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';

import styles from './styles';


const PostCarousleItem = (props) => {
    const post = props.post;

    const width = useWindowDimensions().width;

    return (
        <View style={styles.container, { width: width - 60 }}>
            <View style={styles.innerContainer}>
                {/* Image */}
                <Image
                    style={styles.image}
                    source={{ uri: post.image }}
                />

                <View style={{ flex: 1, marginHorizontal: 10 }}>
                    {/* Bed & Bedroom */}
                    <Text style={styles.bedrooms}>{post.bed} bed, {post.bedroom} bedroom</Text>

                    {/* Type & Description */}
                    <Text style={styles.description} numberOfLines={2}>{post.type}: {post.title}</Text>

                    {/* old pric & New Price */}
                    <Text style={styles.prices}>
                        <Text style={styles.newPrice}>${post.newPrice} </Text>
                        / night
                    </Text>
                </View>
            </View>
        </View >
    )
}

export default PostCarousleItem;