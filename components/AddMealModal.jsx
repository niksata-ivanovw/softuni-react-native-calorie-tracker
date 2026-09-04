import { Modal, Text, View, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export default function AddMeal({ onClose }) {
    return (
            <Modal animationType="fade" transparent={true}>
                <View style={styles.centeredView}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.heading}>Add Meal</Text>

                        <View>
                            <Text>Search foods...</Text>
                            <Text>Many foods</Text>
                        </View>

                        <View>
                            <TouchableOpacity
                            onPress={onClose}
                            style={styles.closeButton}
                            >
                                <Text style={styles.closeButtonText}>Go Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={onClose}
                            style={styles.closeButton}
                            >
                                <Text style={styles.closeButtonText}>Add Custom Food</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    closeButton: {
        borderColor: '#eaeaea',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        margin: 'auto',
        marginTop: 10,
    },
    closeButtonText: {
        color: 'black',
    },
});