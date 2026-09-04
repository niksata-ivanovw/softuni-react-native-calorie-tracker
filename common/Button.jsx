import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({
    title,
    onPress,
    style
}) {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={[styles.button, style]}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderColor: '#eaeaea',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        margin: 'auto',
        marginTop: 10,
    },
    buttonText: {
        color: 'black',
    },
});