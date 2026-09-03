import { Modal, Text, TouchableOpacity } from 'react-native';

export default function AddMeal({ onClose }) {
    return (
            <Modal>
                <Text>Add Meal</Text>
                <TouchableOpacity
                onPress={onClose}
                >
                    <Text>Close Modal</Text>
                </TouchableOpacity>
            </Modal>
            
    );
}