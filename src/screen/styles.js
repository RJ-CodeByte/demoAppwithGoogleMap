import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center' },
    map: { height: '92%', width: '100%' },
    // callout bubble
    bubble: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: '#FFFF',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150,
    },
    //Arrow  below the bubble
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#FFF',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5
    },
    //Character  name
    name: {
        fontSize: 16,
        marginBottom: 5
    },
    //Character image
    image: {
        width: 120,
        height: 80
    }
});
