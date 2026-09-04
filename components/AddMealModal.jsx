import { Modal, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import Button from '../common/Button';

export default function AddMeal({ onClose }) {
    return (
            <Modal animationType="fade" transparent={true}>
                <View style={styles.centeredView}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.heading}>Add Meal</Text>

                        <View>
                            <View>
                                <Text style={styles.inputLabels}>Food Name</Text>
                                <TextInput style={styles.textInput} placeholder="e.g., Pizza Slice" keyboardType="default"/>
                            </View>
                            <View>
                                <Text style={styles.inputLabels}>Calories</Text>
                                <TextInput style={styles.textInput} placeholder="0" keyboardType="numeric"/>
                            </View>
                        </View>

                        <View>
                            <Button title="Add Meal" onPress={onClose} />

                            <Button title="Cancel" onPress={onClose} />
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
        fontSize: 24,
        fontWeight: 700,
        marginBottom: 10,
    },
    inputLabels: {
        fontSize: 16,
        fontWeight: 500,
    },
    textInput: {
        padding: 10,
        marginBottom: 10,
    },
    textInputSelected: {

    },
});