import { StyleSheet, Dimensions } from "react-native";


const styles = StyleSheet.create({
    container: {
        zIndex: 0,
        flex: 1
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        marginLeft: 20,
        marginTop: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    searchButton: {
        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get('screen').width - 20,
        flexDirection: 'row',
        borderRadius: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 70,
        zIndex: 1,
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },
});

export default styles;