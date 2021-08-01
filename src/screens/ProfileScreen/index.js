import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Auth } from 'aws-amplify';

const ProfileScreen = (props) => {
    const logOut = () => {
        Auth.signOut();

    }
    return (
        <View style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Pressable
                onPress={logOut}
                style={{
                    width: '100%', height: 40, backgroundColor: '#c3c3c3', alignItems: 'center', justifyContent: 'center'
                }}>
                <Text >Logout</Text>
            </Pressable>
        </View>
    );
}

export default ProfileScreen;